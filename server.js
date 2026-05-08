const express = require('express');
const http = require('http');
const path = require('path');
const crypto = require('crypto');
const { Server } = require('socket.io');

const QUESTIONS = require('./questions');
const { CORRECT_GIFS, WRONG_GIFS } = require('./gifs');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(express.static(path.join(__dirname, 'public')));

const MAX_TEAMS = 99;
const ALLOWED_LENGTHS = [25, 50, 100];
const DEFAULT_LENGTH = 50;
const QUESTION_TIME_MS = 25_000;
const REVEAL_TIME_MS = 7_000;
const MILESTONE_INTERVAL = 10;
const MILESTONE_TIME_MS = 9_000;
const STRAFSCHLUCK_CHANCE = 0.35;
const ROOM_TTL_AFTER_FINISH_MS = 10 * 60 * 1000;
const OFFLINE_TEAM_TTL_MS = 10 * 60 * 1000;       // 10 Min Reconnect-Fenster
const OFFLINE_CLEANUP_INTERVAL_MS = 60 * 1000;

const STRAFSCHLUCK_MESSAGES = {
  1: ["Klein-Strafe – nur einer!", "Nicht so wild: 1 Schluck.", "Anwärmen für die nächste Runde!", "Ein kleiner Schluck zur Beruhigung."],
  2: ["Doppelte Strafe!", "Zwei Schlücke. Gönn dir.", "2 Schlücke – passt schon.", "Doppelt hält besser."],
  3: ["Maxi-Strafe! 3 Schlücke!", "Drei Schlücke – Au.", "Voll daneben, voll bestraft: 3 Schlücke!", "Zeit, die Leber zu testen: 3 Schlücke!"]
};

function maybeStrafschluck() {
  if (Math.random() > STRAFSCHLUCK_CHANCE) return null;
  const r = Math.random();
  let count;
  if (r < 0.6) count = 1;
  else if (r < 0.9) count = 2;
  else count = 3;
  const messages = STRAFSCHLUCK_MESSAGES[count];
  const message = messages[Math.floor(Math.random() * messages.length)];
  return { count, message };
}

const rooms = {};

function genCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 4; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

function genToken() {
  return crypto.randomBytes(16).toString('hex');
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function shuffleAndPick(arr, n) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(n, copy.length));
}

function teamList(room) {
  return Object.values(room.teams).map(t => ({
    name: t.name,
    score: t.score,
    online: t.socketId !== null
  }));
}

function emitToTeam(team, event, payload) {
  if (team.socketId) io.to(team.socketId).emit(event, payload);
}

function broadcastLobby(code) {
  const room = rooms[code];
  if (!room) return;
  io.to(code).emit('lobby:teams', teamList(room));
}

function findRoomByToken(token) {
  for (const [code, room] of Object.entries(rooms)) {
    if (room.teams[token]) return { code, room, team: room.teams[token] };
  }
  return null;
}

function nextQuestion(code) {
  const room = rooms[code];
  if (!room) return;
  clearTimeout(room.questionTimer);
  clearTimeout(room.revealTimer);
  room.questionIdx++;
  room.answers = {};
  room.revealed = false;

  if (room.questionIdx >= room.gameQuestions.length) {
    room.phase = 'final';
    const finalScores = teamList(room).sort((a, b) => b.score - a.score);
    room.finalScores = finalScores;
    io.to(code).emit('game:over', finalScores);
    setTimeout(() => { delete rooms[code]; }, ROOM_TTL_AFTER_FINISH_MS);
    return;
  }

  const q = room.gameQuestions[room.questionIdx];
  const deadline = Date.now() + QUESTION_TIME_MS;
  room.deadline = deadline;
  room.phase = 'question';
  io.to(code).emit('question', {
    idx: room.questionIdx,
    total: room.gameQuestions.length,
    text: q.text,
    options: q.options,
    deadline
  });
  room.questionTimer = setTimeout(() => revealAnswer(code), QUESTION_TIME_MS + 300);
}

function revealAnswer(code) {
  const room = rooms[code];
  if (!room || room.revealed) return;
  room.revealed = true;
  room.phase = 'reveal';
  clearTimeout(room.questionTimer);

  const q = room.gameQuestions[room.questionIdx];
  const isLast = room.questionIdx === room.gameQuestions.length - 1;
  const nextDeadline = Date.now() + REVEAL_TIME_MS;
  room.revealDeadline = nextDeadline;

  // Pro Team eigene Reveal-Daten (GIF, Strafschluck) – einmal berechnen, in
  // room.lastReveal cachen, damit ein Reconnect denselben Stand bekommt.
  room.lastReveal = {};

  for (const token of Object.keys(room.teams)) {
    const team = room.teams[token];
    const ans = room.answers[token];
    const answered = ans !== undefined;
    const correct = answered && ans === q.correct;
    if (correct) team.score += 100;
    const strafschluck = !correct ? maybeStrafschluck() : null;
    const gif = correct ? pick(CORRECT_GIFS) : pick(WRONG_GIFS);

    room.lastReveal[token] = {
      answered, correct,
      correctChoice: q.correct,
      correctText: q.options[q.correct],
      explanation: q.explanation,
      gif, strafschluck,
      isLast
    };

    emitToTeam(team, 'reveal', {
      ...room.lastReveal[token],
      score: team.score,
      nextDeadline
    });
  }

  const scores = teamList(room).sort((a, b) => b.score - a.score);
  room.lastScores = scores;
  io.to(code).emit('reveal:scores', { scores, isLast, nextDeadline });

  const completed = room.questionIdx + 1;
  const isMilestone = !isLast && completed % MILESTONE_INTERVAL === 0;
  room.lastIsMilestone = isMilestone;

  room.revealTimer = setTimeout(() => {
    if (isMilestone) {
      const milestoneDeadline = Date.now() + MILESTONE_TIME_MS;
      const sortedScores = teamList(room).sort((a, b) => b.score - a.score);
      room.milestoneData = {
        scores: sortedScores,
        completed,
        total: room.gameQuestions.length,
        nextDeadline: milestoneDeadline
      };
      room.milestoneDeadline = milestoneDeadline;
      room.phase = 'milestone';
      io.to(code).emit('milestone:scoreboard', room.milestoneData);
      room.revealTimer = setTimeout(() => nextQuestion(code), MILESTONE_TIME_MS);
    } else {
      nextQuestion(code);
    }
  }, REVEAL_TIME_MS);
}

function sendCurrentState(socket, room, team) {
  // Nach Reconnect dem Client den aktuellen Bildschirm-Zustand zustellen.
  if (room.phase === 'lobby' || !room.started) return;

  if (room.phase === 'final') {
    socket.emit('game:over', room.finalScores || []);
    return;
  }

  if (room.phase === 'milestone') {
    socket.emit('milestone:scoreboard', room.milestoneData);
    return;
  }

  if (room.phase === 'reveal') {
    const cached = room.lastReveal && room.lastReveal[team.token];
    if (cached) {
      socket.emit('reveal', { ...cached, score: team.score, nextDeadline: room.revealDeadline });
    }
    if (room.lastScores) {
      socket.emit('reveal:scores', {
        scores: room.lastScores,
        isLast: cached ? cached.isLast : false,
        nextDeadline: room.revealDeadline
      });
    }
    return;
  }

  if (room.phase === 'question') {
    const q = room.gameQuestions[room.questionIdx];
    socket.emit('question', {
      idx: room.questionIdx,
      total: room.gameQuestions.length,
      text: q.text,
      options: q.options,
      deadline: room.deadline
    });
    if (room.answers[team.token] !== undefined) {
      socket.emit('answered');
    }
    const total = Object.keys(room.teams).length;
    const answered = Object.keys(room.answers).length;
    socket.emit('progress', { answered, total });
  }
}

io.on('connection', (socket) => {
  socket.on('room:create', ({ name, token }) => {
    name = (name || '').trim().slice(0, 20);
    if (!name) return socket.emit('errorMsg', 'Bitte gib einen Teamnamen ein.');
    if (!token) token = genToken();

    let code;
    do { code = genCode(); } while (rooms[code]);
    rooms[code] = {
      teams: {},
      questionIdx: -1,
      answers: {},
      started: false,
      revealed: false,
      gameQuestions: [],
      questionCount: DEFAULT_LENGTH,
      phase: 'lobby'
    };
    rooms[code].teams[token] = {
      token, name, score: 0,
      socketId: socket.id, offlineSince: null
    };
    socket.join(code);
    socket.data.room = code;
    socket.data.token = token;
    socket.emit('room:joined', {
      code, name, token,
      teams: teamList(rooms[code]),
      questionCount: rooms[code].questionCount
    });
    broadcastLobby(code);
  });

  socket.on('room:join', ({ code, name, token }) => {
    code = (code || '').toUpperCase().trim();
    name = (name || '').trim().slice(0, 20);
    const room = rooms[code];
    if (!room) return socket.emit('errorMsg', 'Raum nicht gefunden.');
    if (room.started) return socket.emit('errorMsg', 'Spiel läuft bereits – warte auf die nächste Runde.');
    if (!name) return socket.emit('errorMsg', 'Bitte gib einen Teamnamen ein.');
    if (Object.keys(room.teams).length >= MAX_TEAMS) {
      return socket.emit('errorMsg', `Raum voll – max. ${MAX_TEAMS} Teams.`);
    }
    const taken = Object.values(room.teams).some(t => t.name.toLowerCase() === name.toLowerCase());
    if (taken) return socket.emit('errorMsg', 'Teamname schon vergeben, nimm einen anderen.');

    if (!token) token = genToken();
    room.teams[token] = {
      token, name, score: 0,
      socketId: socket.id, offlineSince: null
    };
    socket.join(code);
    socket.data.room = code;
    socket.data.token = token;
    socket.emit('room:joined', {
      code, name, token,
      teams: teamList(room),
      questionCount: room.questionCount
    });
    broadcastLobby(code);
  });

  socket.on('room:reconnect', ({ token }) => {
    if (!token) return socket.emit('reconnect:fail');
    const found = findRoomByToken(token);
    if (!found) return socket.emit('reconnect:fail');
    const { code, room, team } = found;

    team.socketId = socket.id;
    team.offlineSince = null;
    socket.join(code);
    socket.data.room = code;
    socket.data.token = token;

    socket.emit('room:joined', {
      code,
      name: team.name,
      token,
      teams: teamList(room),
      questionCount: room.questionCount
    });
    broadcastLobby(code);
    sendCurrentState(socket, room, team);
  });

  socket.on('lobby:setLength', ({ count }) => {
    const code = socket.data.room;
    const room = rooms[code];
    if (!room || room.started) return;
    if (!ALLOWED_LENGTHS.includes(count)) return;
    room.questionCount = Math.min(count, QUESTIONS.length);
    io.to(code).emit('lobby:length', { count: room.questionCount });
  });

  socket.on('room:start', () => {
    const code = socket.data.room;
    const room = rooms[code];
    if (!room || room.started) return;
    if (Object.keys(room.teams).length < 1) {
      return socket.emit('errorMsg', 'Mindestens 1 Team wird benötigt.');
    }
    room.started = true;
    room.phase = 'question';
    room.gameQuestions = shuffleAndPick(QUESTIONS, room.questionCount);
    io.to(code).emit('game:start');
    setTimeout(() => nextQuestion(code), 1500);
  });

  socket.on('answer', ({ choice }) => {
    const code = socket.data.room;
    const token = socket.data.token;
    const room = rooms[code];
    if (!room || !token || !room.teams[token]) return;
    if (room.revealed) return;
    if (room.answers[token] !== undefined) return;
    if (typeof choice !== 'number' || choice < 0 || choice > 10) return;
    room.answers[token] = choice;
    socket.emit('answered');
    const total = Object.keys(room.teams).length;
    const answered = Object.keys(room.answers).length;
    io.to(code).emit('progress', { answered, total });
    if (answered >= total) revealAnswer(code);
  });

  socket.on('disconnect', () => {
    const code = socket.data.room;
    const token = socket.data.token;
    if (!code || !token || !rooms[code]) return;
    const room = rooms[code];
    const team = room.teams[token];
    if (!team) return;
    if (team.socketId !== socket.id) return; // bereits durch Reconnect ersetzt
    team.socketId = null;
    team.offlineSince = Date.now();
    broadcastLobby(code);
    // Falls alle übrigen Teams schon geantwortet haben, mit Reveal weitermachen.
    if (room.started && !room.revealed && room.questionIdx >= 0) {
      const onlineTokens = Object.values(room.teams).filter(t => t.socketId).map(t => t.token);
      if (onlineTokens.length > 0 && onlineTokens.every(t => room.answers[t] !== undefined)) {
        revealAnswer(code);
      }
    }
  });
});

// Periodische Aufräumung: Offline-Teams nach Ablauf entfernen, leere Räume schließen.
setInterval(() => {
  const now = Date.now();
  for (const code of Object.keys(rooms)) {
    const room = rooms[code];
    let removed = false;
    for (const token of Object.keys(room.teams)) {
      const team = room.teams[token];
      if (team.socketId === null && team.offlineSince &&
          now - team.offlineSince > OFFLINE_TEAM_TTL_MS) {
        delete room.teams[token];
        delete room.answers[token];
        if (room.lastReveal) delete room.lastReveal[token];
        removed = true;
      }
    }
    if (Object.keys(room.teams).length === 0) {
      clearTimeout(room.questionTimer);
      clearTimeout(room.revealTimer);
      delete rooms[code];
    } else if (removed) {
      broadcastLobby(code);
    }
  }
}, OFFLINE_CLEANUP_INTERVAL_MS);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Pub-Quiz läuft auf Port ${PORT}`);
  console.log(`Fragenpool: ${QUESTIONS.length}, wählbar ${ALLOWED_LENGTHS.join('/')} pro Spiel, max. ${MAX_TEAMS} Teams`);
});
