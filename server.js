const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const QUESTIONS = require('./questions');
const { CORRECT_GIFS, WRONG_GIFS } = require('./gifs');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(express.static(path.join(__dirname, 'public')));

const MAX_TEAMS = 6;
const ALLOWED_LENGTHS = [25, 50, 100];
const DEFAULT_LENGTH = 50;
const QUESTION_TIME_MS = 25_000;
const REVEAL_TIME_MS = 7_000;
const MILESTONE_INTERVAL = 10;
const MILESTONE_TIME_MS = 9_000;
const STRAFSCHLUCK_CHANCE = 0.35;
const ROOM_TTL_AFTER_FINISH_MS = 10 * 60 * 1000;

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
  return Object.values(room.teams).map(t => ({ name: t.name, score: t.score }));
}

function broadcastLobby(code) {
  const room = rooms[code];
  if (!room) return;
  io.to(code).emit('lobby:teams', teamList(room));
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
    const finalScores = teamList(room).sort((a, b) => b.score - a.score);
    io.to(code).emit('game:over', finalScores);
    setTimeout(() => { delete rooms[code]; }, ROOM_TTL_AFTER_FINISH_MS);
    return;
  }

  const q = room.gameQuestions[room.questionIdx];
  const deadline = Date.now() + QUESTION_TIME_MS;
  room.deadline = deadline;
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
  clearTimeout(room.questionTimer);

  const q = room.gameQuestions[room.questionIdx];
  const isLast = room.questionIdx === room.gameQuestions.length - 1;
  const nextDeadline = Date.now() + REVEAL_TIME_MS;

  for (const sid of Object.keys(room.teams)) {
    const team = room.teams[sid];
    const ans = room.answers[sid];
    const answered = ans !== undefined;
    const correct = answered && ans === q.correct;
    if (correct) team.score += 100;
    const strafschluck = !correct ? maybeStrafschluck() : null;
    io.to(sid).emit('reveal', {
      answered,
      correct,
      correctChoice: q.correct,
      correctText: q.options[q.correct],
      explanation: q.explanation,
      gif: correct ? pick(CORRECT_GIFS) : pick(WRONG_GIFS),
      score: team.score,
      isLast,
      nextDeadline,
      strafschluck
    });
  }

  const scores = teamList(room).sort((a, b) => b.score - a.score);
  io.to(code).emit('reveal:scores', { scores, isLast, nextDeadline });

  const completed = room.questionIdx + 1;
  const isMilestone = !isLast && completed % MILESTONE_INTERVAL === 0;

  room.revealTimer = setTimeout(() => {
    if (isMilestone) {
      const milestoneDeadline = Date.now() + MILESTONE_TIME_MS;
      const finalScores = teamList(room).sort((a, b) => b.score - a.score);
      io.to(code).emit('milestone:scoreboard', {
        scores: finalScores,
        completed,
        total: room.gameQuestions.length,
        nextDeadline: milestoneDeadline
      });
      room.revealTimer = setTimeout(() => nextQuestion(code), MILESTONE_TIME_MS);
    } else {
      nextQuestion(code);
    }
  }, REVEAL_TIME_MS);
}

io.on('connection', (socket) => {
  socket.on('room:create', ({ name }) => {
    name = (name || '').trim().slice(0, 20);
    if (!name) return socket.emit('errorMsg', 'Bitte gib einen Teamnamen ein.');
    let code;
    do { code = genCode(); } while (rooms[code]);
    rooms[code] = {
      teams: {},
      questionIdx: -1,
      answers: {},
      started: false,
      revealed: false,
      gameQuestions: [],
      questionCount: DEFAULT_LENGTH
    };
    rooms[code].teams[socket.id] = { name, score: 0 };
    socket.join(code);
    socket.data.room = code;
    socket.data.name = name;
    socket.emit('room:joined', {
      code, name,
      teams: teamList(rooms[code]),
      questionCount: rooms[code].questionCount
    });
    broadcastLobby(code);
  });

  socket.on('room:join', ({ code, name }) => {
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
    room.teams[socket.id] = { name, score: 0 };
    socket.join(code);
    socket.data.room = code;
    socket.data.name = name;
    socket.emit('room:joined', {
      code, name,
      teams: teamList(room),
      questionCount: room.questionCount
    });
    broadcastLobby(code);
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
    if (Object.keys(room.teams).length < 2) {
      return socket.emit('errorMsg', 'Mindestens 2 Teams werden benötigt.');
    }
    room.started = true;
    room.gameQuestions = shuffleAndPick(QUESTIONS, room.questionCount);
    io.to(code).emit('game:start');
    setTimeout(() => nextQuestion(code), 1500);
  });

  socket.on('answer', ({ choice }) => {
    const code = socket.data.room;
    const room = rooms[code];
    if (!room || !room.teams[socket.id]) return;
    if (room.revealed) return;
    if (room.answers[socket.id] !== undefined) return;
    if (typeof choice !== 'number' || choice < 0 || choice > 10) return;
    room.answers[socket.id] = choice;
    socket.emit('answered');
    const total = Object.keys(room.teams).length;
    const answered = Object.keys(room.answers).length;
    io.to(code).emit('progress', { answered, total });
    if (answered >= total) revealAnswer(code);
  });

  socket.on('disconnect', () => {
    const code = socket.data.room;
    if (!code || !rooms[code]) return;
    const room = rooms[code];
    if (!room.teams[socket.id]) return;
    delete room.teams[socket.id];
    delete room.answers[socket.id];
    if (Object.keys(room.teams).length === 0) {
      clearTimeout(room.questionTimer);
      clearTimeout(room.revealTimer);
      delete rooms[code];
      return;
    }
    broadcastLobby(code);
    if (room.started && !room.revealed && room.questionIdx >= 0) {
      const total = Object.keys(room.teams).length;
      const answered = Object.keys(room.answers).length;
      io.to(code).emit('progress', { answered, total });
      if (total > 0 && answered >= total) revealAnswer(code);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Pub-Quiz läuft auf Port ${PORT}`);
  console.log(`Fragenpool: ${QUESTIONS.length}, wählbar ${ALLOWED_LENGTHS.join('/')} pro Spiel, max. ${MAX_TEAMS} Teams`);
});
