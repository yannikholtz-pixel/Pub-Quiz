const express = require('express');
const http = require('http');
const path = require('path');
const crypto = require('crypto');
const { Server } = require('socket.io');

const QUESTIONS = require('./questions');
const HARD_QUESTIONS = require('./hardQuestions');
const QUIZMASTER_COMMENTS = require('./quizmasterComments');
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
const MILESTONE_TIME_MS = 6_500;
const SPECIAL_ROUND_TIME_MS = 9_000;
const STRAFSCHLUCK_CHANCE = 0.35;
const STREAK_FOR_SABOTAGE = 5;
const ROOM_TTL_AFTER_FINISH_MS = 10 * 60 * 1000;
const OFFLINE_TEAM_TTL_MS = 10 * 60 * 1000;       // 10 Min Reconnect-Fenster
const OFFLINE_CLEANUP_INTERVAL_MS = 60 * 1000;

const AVATARS = [
  '🍺','🍻','🥂','🐙','🦄','🐸','🦖','🦥','🐢','🐺','🦊','🐼',
  '🦁','🐬','🐝','🦔','🦅','🐯','🤖','👽','👻','🎃','🤡','🦸',
  '🥷','🧙','😎','🤓','🥸','🤠','🍕','🌭','🍿','🚀','⚡','🔥',
  '🏆','🎸'
];
const DEFAULT_AVATAR = '🎲';

function sanitizeAvatar(av) {
  if (typeof av !== 'string') return DEFAULT_AVATAR;
  return AVATARS.includes(av) ? av : DEFAULT_AVATAR;
}

const STRAFSCHLUCK_MESSAGES = {
  1: ["Klein-Strafe – nur einer!", "Nicht so wild: 1 Schluck.", "Anwärmen für die nächste Runde!", "Ein kleiner Schluck zur Beruhigung."],
  2: ["Doppelte Strafe!", "Zwei Schlücke. Gönn dir.", "2 Schlücke – passt schon.", "Doppelt hält besser."],
  3: ["Maxi-Strafe! 3 Schlücke!", "Drei Schlücke – Au.", "Voll daneben, voll bestraft: 3 Schlücke!", "Zeit, die Leber zu testen: 3 Schlücke!"]
};

const QUIZMASTER_CHANCE = 0.30;

function pickQuizmasterComment(room) {
  if (Math.random() > QUIZMASTER_CHANCE) return null;
  const teams = Object.values(room.teams);
  if (teams.length === 0) return null;

  const sorted = teams.slice().sort((a, b) => b.score - a.score);
  const leader = sorted[0];
  const loser = sorted.length > 1 ? sorted[sorted.length - 1] : null;

  // Spezifische Situationen sammeln (passen zur aktuellen Spiellage).
  const specific = [];

  for (const team of teams) {
    if ((team.streak || 0) >= 3) {
      specific.push({ pool: 'hotStreak', team });
    }
    if (team.lastStreakWasBroken) {
      specific.push({ pool: 'streakBroken', team });
      team.lastStreakWasBroken = false;
    }
    if (team.justSurvivedSabotage) {
      specific.push({ pool: 'sabotageSurvived', team });
      team.justSurvivedSabotage = false;
    }
    if (team.justFailedSabotage) {
      specific.push({ pool: 'sabotageFailed', team });
      team.justFailedSabotage = false;
    }
    if (team.justGotStrafschluck) {
      specific.push({ pool: 'drink', team });
      team.justGotStrafschluck = false;
    }
  }

  if (sorted.length >= 2) {
    const gap = sorted[0].score - sorted[1].score;
    if (gap >= 300) specific.push({ pool: 'bigLead', team: leader });
    if (gap > 0 && gap < 100 && sorted[0].score > 0) specific.push({ pool: 'tightRace' });
  }

  // Fallback-Pool: generisches und Standard-Team-/Leader-/Loser-Bezugnahmen.
  const fallback = [{ pool: 'generic' }];
  fallback.push({
    pool: 'team',
    team: teams[Math.floor(Math.random() * teams.length)]
  });
  if (sorted.length >= 2) {
    fallback.push({ pool: 'leader', team: leader });
    if (loser && loser.token !== leader.token) {
      fallback.push({ pool: 'loser', team: loser });
    }
  }

  // Wenn was Spezifisches passiert ist, mit 70% Wahrscheinlichkeit darauf
  // eingehen, sonst aus dem Fallback ziehen.
  let chosen;
  if (specific.length > 0 && Math.random() < 0.7) {
    chosen = specific[Math.floor(Math.random() * specific.length)];
  } else {
    chosen = fallback[Math.floor(Math.random() * fallback.length)];
  }

  const pool = QUIZMASTER_COMMENTS[chosen.pool] || [];
  if (pool.length === 0) return null;

  let template = pool[Math.floor(Math.random() * pool.length)];
  if (chosen.team) {
    template = template.replace(/\{team\}/g, chosen.team.name);
  }
  return template;
}

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
    avatar: t.avatar || DEFAULT_AVATAR,
    score: t.score,
    online: t.socketId !== null
  }));
}

function freshJokers() {
  return { fiftyfifty: true, skip: true, doublepoints: true };
}

function pickSpecialRound(room) {
  const r = Math.random();
  const hasNextQuestion = room.questionIdx + 1 < room.gameQuestions.length;
  if (r < 0.5) return 'saufroulette';
  if (r < 0.75) return 'alletrinken';
  return hasNextQuestion ? 'doublornix' : 'alletrinken';
}

function startSpecialRound(code) {
  const room = rooms[code];
  if (!room) return;
  const type = pickSpecialRound(room);
  const deadline = Date.now() + SPECIAL_ROUND_TIME_MS;
  room.phase = 'special';
  room.specialDeadline = deadline;

  const onlineTokens = Object.values(room.teams)
    .filter(t => t.socketId)
    .map(t => t.token);

  const teams = Object.values(room.teams).map(t => ({
    name: t.name, avatar: t.avatar || DEFAULT_AVATAR
  }));

  const payload = { type, nextDeadline: deadline, teams };

  if (type === 'saufroulette') {
    const candidates = onlineTokens.length ? onlineTokens : Object.keys(room.teams);
    if (candidates.length === 0) {
      nextQuestion(code);
      return;
    }
    const pickedToken = candidates[Math.floor(Math.random() * candidates.length)];
    const t = room.teams[pickedToken];
    payload.pickedTeam = { name: t.name, avatar: t.avatar || DEFAULT_AVATAR };
    payload.schlucke = 2;
  } else if (type === 'alletrinken') {
    payload.schlucke = 1;
  } else if (type === 'doublornix') {
    room.doublornixActive = true;
  }

  room.specialData = payload;
  io.to(code).emit('special:round', payload);
  room.specialTimer = setTimeout(() => nextQuestion(code), SPECIAL_ROUND_TIME_MS);
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
  clearTimeout(room.specialTimer);
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

  const baseQuestion = room.gameQuestions[room.questionIdx];
  const deadline = Date.now() + QUESTION_TIME_MS;
  room.deadline = deadline;
  room.phase = 'question';
  room.baseQuestion = baseQuestion;

  // Pro Team eigene Frage zuweisen (Sabotage-Opfer kriegt eine harte mit 6 Optionen).
  for (const team of Object.values(room.teams)) {
    let q = baseQuestion;
    let isHard = false;
    if (team.pendingHardQuestion && HARD_QUESTIONS.length > 0) {
      q = HARD_QUESTIONS[Math.floor(Math.random() * HARD_QUESTIONS.length)];
      isHard = true;
      team.pendingHardQuestion = false;
    }
    team.currentQuestion = q;
    team.currentQuestionHard = isHard;
    emitToTeam(team, 'question', {
      idx: room.questionIdx,
      total: room.gameQuestions.length,
      text: q.text,
      options: q.options,
      deadline,
      doublornix: !!room.doublornixActive,
      hard: isHard
    });
  }
  room.questionTimer = setTimeout(() => revealAnswer(code), QUESTION_TIME_MS + 300);
}

function revealAnswer(code) {
  const room = rooms[code];
  if (!room || room.revealed) return;
  room.revealed = true;
  room.phase = 'reveal';
  clearTimeout(room.questionTimer);

  const isLast = room.questionIdx === room.gameQuestions.length - 1;
  const nextDeadline = Date.now() + REVEAL_TIME_MS;
  room.revealDeadline = nextDeadline;

  // Pro Team eigene Reveal-Daten (GIF, Strafschluck) – einmal berechnen, in
  // room.lastReveal cachen, damit ein Reconnect denselben Stand bekommt.
  room.lastReveal = {};
  const otherTeamsCount = Math.max(0, Object.keys(room.teams).length - 1);

  for (const token of Object.keys(room.teams)) {
    const team = room.teams[token];
    const q = team.currentQuestion || room.baseQuestion;
    const ans = room.answers[token];
    const skipped = ans === 'skip';
    const answered = ans !== undefined && !skipped;
    const correct = answered && ans === q.correct;

    let pointsDelta = 0;
    if (correct) {
      pointsDelta = 100;
      if (team.pendingDoublepoints) pointsDelta += 100;
      if (room.doublornixActive) pointsDelta += 100;
    } else if (answered && room.doublornixActive) {
      pointsDelta = -100;
    }
    team.score += pointsDelta;
    team.pendingDoublepoints = false;

    // Streak-Tracking: bei richtiger Antwort hochzählen, sonst zurücksetzen.
    // Skip und Timeout brechen den Streak nicht (zumindest beim Skip nicht).
    if (correct) {
      team.streak = (team.streak || 0) + 1;
    } else if (!skipped) {
      if ((team.streak || 0) >= 3) team.lastStreakWasBroken = true;
      team.streak = 0;
    }
    const canSabotage = team.streak >= STREAK_FOR_SABOTAGE && otherTeamsCount > 0;

    // Sabotage-Ausgang merken (für Quizmaster-Sprüche)
    if (team.currentQuestionHard) {
      if (correct) team.justSurvivedSabotage = true;
      else if (answered) team.justFailedSabotage = true;
    }

    // Strafschluck nur bei aktiv falscher Antwort, nicht bei Skip oder Timeout.
    const strafschluck = (answered && !correct) ? maybeStrafschluck() : null;
    if (strafschluck) team.justGotStrafschluck = true;
    const gif = correct ? pick(CORRECT_GIFS) : pick(WRONG_GIFS);

    room.lastReveal[token] = {
      answered: answered || skipped,
      correct,
      skipped,
      pointsDelta,
      correctChoice: q.correct,
      correctText: q.options[q.correct],
      explanation: q.explanation,
      gif, strafschluck,
      isLast,
      doublornixActive: !!room.doublornixActive,
      hard: !!team.currentQuestionHard,
      streak: team.streak,
      canSabotage
    };

    emitToTeam(team, 'reveal', {
      ...room.lastReveal[token],
      score: team.score,
      nextDeadline
    });
  }
  // Doppelornix-Modifier verbraucht
  room.doublornixActive = false;

  const scores = teamList(room).sort((a, b) => b.score - a.score);
  room.lastScores = scores;
  io.to(code).emit('reveal:scores', { scores, isLast, nextDeadline });

  // Quizmaster-Kommentar (~30% pro Auflösung)
  const comment = pickQuizmasterComment(room);
  room.lastQuizmaster = comment;
  if (comment) {
    io.to(code).emit('quizmaster:comment', { text: comment });
  }

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
      room.revealTimer = setTimeout(() => startSpecialRound(code), MILESTONE_TIME_MS);
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

  if (room.phase === 'special') {
    socket.emit('special:round', room.specialData);
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
    if (room.lastQuizmaster) {
      socket.emit('quizmaster:comment', { text: room.lastQuizmaster });
    }
    return;
  }

  if (room.phase === 'question') {
    const q = team.currentQuestion || room.baseQuestion;
    if (!q) return;
    socket.emit('question', {
      idx: room.questionIdx,
      total: room.gameQuestions.length,
      text: q.text,
      options: q.options,
      deadline: room.deadline,
      doublornix: !!room.doublornixActive,
      hard: !!team.currentQuestionHard
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
  socket.on('room:create', ({ name, token, avatar }) => {
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
      token, name, avatar: sanitizeAvatar(avatar), score: 0,
      socketId: socket.id, offlineSince: null,
      jokers: freshJokers(), pendingDoublepoints: false,
      streak: 0, pendingHardQuestion: false, currentQuestion: null,
      lastStreakWasBroken: false,
      justSurvivedSabotage: false,
      justFailedSabotage: false,
      justGotStrafschluck: false
    };
    socket.join(code);
    socket.data.room = code;
    socket.data.token = token;
    socket.emit('room:joined', {
      code, name, token,
      teams: teamList(rooms[code]),
      questionCount: rooms[code].questionCount,
      jokers: rooms[code].teams[token].jokers
    });
    broadcastLobby(code);
  });

  socket.on('room:join', ({ code, name, token, avatar }) => {
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
      token, name, avatar: sanitizeAvatar(avatar), score: 0,
      socketId: socket.id, offlineSince: null,
      jokers: freshJokers(), pendingDoublepoints: false,
      streak: 0, pendingHardQuestion: false, currentQuestion: null,
      lastStreakWasBroken: false,
      justSurvivedSabotage: false,
      justFailedSabotage: false,
      justGotStrafschluck: false
    };
    socket.join(code);
    socket.data.room = code;
    socket.data.token = token;
    socket.emit('room:joined', {
      code, name, token,
      teams: teamList(room),
      questionCount: room.questionCount,
      jokers: room.teams[token].jokers
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
      questionCount: room.questionCount,
      jokers: team.jokers,
      pendingDoublepoints: !!team.pendingDoublepoints
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
    const team = room.teams[token];
    const q = team.currentQuestion;
    if (!q) return;
    if (typeof choice !== 'number' || choice < 0 || choice >= q.options.length) return;
    room.answers[token] = choice;
    socket.emit('answered');
    const total = Object.keys(room.teams).length;
    const answered = Object.keys(room.answers).length;
    io.to(code).emit('progress', { answered, total });
    if (answered >= total) revealAnswer(code);
  });

  socket.on('sabotage:cast', ({ targetToken, targetName }) => {
    const code = socket.data.room;
    const sourceToken = socket.data.token;
    const room = rooms[code];
    if (!room || !sourceToken) return;
    const source = room.teams[sourceToken];
    if (!source) return;
    if ((source.streak || 0) < STREAK_FOR_SABOTAGE) return;

    // Ziel per Token oder per (in-Room eindeutigem) Namen auflösen.
    let targetTok = targetToken;
    if (!targetTok && targetName) {
      const found = Object.values(room.teams).find(t => t.name === targetName);
      if (found) targetTok = found.token;
    }
    if (!targetTok || !room.teams[targetTok]) return;
    if (targetTok === sourceToken) return;
    const target = room.teams[targetTok];

    target.pendingHardQuestion = true;
    source.streak = 0;

    io.to(code).emit('sabotage:cast', {
      source: { name: source.name, avatar: source.avatar || DEFAULT_AVATAR },
      target: { name: target.name, avatar: target.avatar || DEFAULT_AVATAR }
    });
    // Sender bekommt die aktualisierte Streak-Info, damit der Button verschwindet.
    emitToTeam(source, 'sabotage:used', { streak: 0 });
  });

  socket.on('joker:use', ({ type }) => {
    const code = socket.data.room;
    const token = socket.data.token;
    const room = rooms[code];
    if (!room || !token || !room.teams[token]) return;
    if (room.phase !== 'question' || room.revealed) return;
    const team = room.teams[token];
    if (!['fiftyfifty', 'skip', 'doublepoints'].includes(type)) return;
    if (!team.jokers[type]) return;                       // schon verbraucht
    if (room.answers[token] !== undefined) return;        // schon geantwortet

    team.jokers[type] = false;

    if (type === 'fiftyfifty') {
      const q = team.currentQuestion;
      if (!q) return;
      const wrongIndices = [];
      q.options.forEach((_, i) => { if (i !== q.correct) wrongIndices.push(i); });
      for (let i = wrongIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wrongIndices[i], wrongIndices[j]] = [wrongIndices[j], wrongIndices[i]];
      }
      // Bei harten Fragen (6 Optionen) entfernt 50:50 etwas mehr (3),
      // sonst die üblichen 2.
      const removeCount = q.options.length >= 6 ? 3 : 2;
      const removedIndices = wrongIndices.slice(0, removeCount);
      socket.emit('joker:applied', { type, removedIndices, jokers: team.jokers });
      return;
    }

    if (type === 'skip') {
      room.answers[token] = 'skip';
      socket.emit('joker:applied', { type, jokers: team.jokers });
      socket.emit('answered');
      const total = Object.keys(room.teams).length;
      const answered = Object.keys(room.answers).length;
      io.to(code).emit('progress', { answered, total });
      if (answered >= total) revealAnswer(code);
      return;
    }

    if (type === 'doublepoints') {
      team.pendingDoublepoints = true;
      socket.emit('joker:applied', { type, jokers: team.jokers });
      return;
    }
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
