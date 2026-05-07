const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(express.static(path.join(__dirname, 'public')));

const QUESTIONS = [
  {
    text: "Wie viele Herzen hat ein Oktopus?",
    options: [
      "1, ist doch ein Tier wie jedes andere",
      "3",
      "8 – eines pro Arm",
      "Keins. Oktopusse vergeben Herzen an niemanden."
    ],
    correct: 1,
    explanation: "Drei Herzen: zwei für die Kiemen, eines für den Rest des Körpers."
  },
  {
    text: "Was ist schwerer: 1 kg Federn oder 1 kg Blei?",
    options: [
      "Blei – ist halt Blei",
      "Federn – die wiegen schwer auf dem Gewissen",
      "Beides gleich schwer",
      "Hängt vom Wetter ab"
    ],
    correct: 2,
    explanation: "Ein Kilo bleibt ein Kilo. Aber zugegeben: ein Sack Federn sieht imposanter aus."
  },
  {
    text: "In welchem Jahr fand die deutsche Wiedervereinigung statt?",
    options: ["1989", "1990", "1991", "Letzten Dienstag"],
    correct: 1,
    explanation: "Am 3. Oktober 1990 wurde Deutschland offiziell wiedervereinigt."
  },
  {
    text: "Wie viele Streifen hat eine durchschnittliche Banane?",
    options: [
      "Bananen haben keine Streifen",
      "47",
      "Genau 9, das ist Bananen-Standard",
      "So viele wie ein Zebra Bananen hat"
    ],
    correct: 0,
    explanation: "Bananen haben keine Streifen. Glückwunsch, falls du nicht in die Falle getappt bist."
  },
  {
    text: "Welches Tier kann seine Zunge nicht herausstrecken?",
    options: ["Giraffe", "Frosch", "Krokodil", "Schwiegermutter"],
    correct: 2,
    explanation: "Krokodile haben ihre Zunge am Mundboden festgewachsen – Schluss mit Frechheiten."
  },
  {
    text: "Was bedeutet die Abkürzung „WLAN“?",
    options: [
      "Wahnsinnig Langsames Anti-Netzwerk",
      "Wireless Local Area Network",
      "Wo Lebt Andis Nachbar",
      "Wenn Lädt Alles Nicht"
    ],
    correct: 1,
    explanation: "Wireless Local Area Network. Und ja, manchmal stimmt auch die letzte Antwort."
  },
  {
    text: "Wie heißt die Hauptstadt von Australien?",
    options: [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Da, wo die Kängurus gerade sind"
    ],
    correct: 2,
    explanation: "Canberra. Sydney ist der berühmtere Bruder – aber den Titel hat Canberra."
  },
  {
    text: "Wie viele Zwerge begleiten Schneewittchen?",
    options: ["5", "7", "9", "Kommt auf den Tarifvertrag an"],
    correct: 1,
    explanation: "Sieben. Hatschi, Schlafmütz, Brummbär und Co."
  },
  {
    text: "Welche Farbe hat ein Schimmel (das Pferd, nicht das auf dem Brot)?",
    options: [
      "Schwarz",
      "Braun",
      "Weiß",
      "Grünlich, wenn er lange im Stall stand"
    ],
    correct: 2,
    explanation: "Schimmel sind weiße Pferde. Auf altem Brot allerdings …"
  },
  {
    text: "Wie viele Augen hat eine Biene?",
    options: [
      "2, klar",
      "4",
      "5",
      "Alle, die sie braucht, um deinen Kuchen zu finden"
    ],
    correct: 2,
    explanation: "Fünf: zwei große Komplexaugen plus drei Punktaugen auf dem Kopf."
  }
];

const CORRECT_GIFS = [
  "https://media.giphy.com/media/3o7TKr3nzbh5WgCFxe/giphy.gif",
  "https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif",
  "https://media.giphy.com/media/g9582DNuQppxC/giphy.gif",
  "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  "https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif",
  "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif"
];

const WRONG_GIFS = [
  "https://media.giphy.com/media/3o7TKsQ8gqVrxZZUw0/giphy.gif",
  "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif",
  "https://media.giphy.com/media/26gsspfbuhqdpwxva/giphy.gif",
  "https://media.giphy.com/media/14ut8PhnIwzros/giphy.gif",
  "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
  "https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif"
];

const QUESTION_TIME_MS = 25_000;
const REVEAL_TIME_MS = 7_000;
const ROOM_TTL_AFTER_FINISH_MS = 10 * 60 * 1000;

const rooms = {};

function genCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 4; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

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

  if (room.questionIdx >= QUESTIONS.length) {
    const finalScores = teamList(room).sort((a, b) => b.score - a.score);
    io.to(code).emit('game:over', finalScores);
    setTimeout(() => { delete rooms[code]; }, ROOM_TTL_AFTER_FINISH_MS);
    return;
  }

  const q = QUESTIONS[room.questionIdx];
  const deadline = Date.now() + QUESTION_TIME_MS;
  room.deadline = deadline;
  io.to(code).emit('question', {
    idx: room.questionIdx,
    total: QUESTIONS.length,
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

  const q = QUESTIONS[room.questionIdx];
  const isLast = room.questionIdx === QUESTIONS.length - 1;
  const nextDeadline = Date.now() + REVEAL_TIME_MS;

  for (const sid of Object.keys(room.teams)) {
    const team = room.teams[sid];
    const ans = room.answers[sid];
    const answered = ans !== undefined;
    const correct = answered && ans === q.correct;
    if (correct) team.score += 100;
    io.to(sid).emit('reveal', {
      answered,
      correct,
      correctChoice: q.correct,
      correctText: q.options[q.correct],
      explanation: q.explanation,
      gif: correct ? pick(CORRECT_GIFS) : pick(WRONG_GIFS),
      score: team.score,
      isLast,
      nextDeadline
    });
  }

  const scores = teamList(room).sort((a, b) => b.score - a.score);
  io.to(code).emit('reveal:scores', { scores, isLast, nextDeadline });

  room.revealTimer = setTimeout(() => nextQuestion(code), REVEAL_TIME_MS);
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
      revealed: false
    };
    rooms[code].teams[socket.id] = { name, score: 0 };
    socket.join(code);
    socket.data.room = code;
    socket.data.name = name;
    socket.emit('room:joined', { code, name, teams: teamList(rooms[code]) });
    broadcastLobby(code);
  });

  socket.on('room:join', ({ code, name }) => {
    code = (code || '').toUpperCase().trim();
    name = (name || '').trim().slice(0, 20);
    const room = rooms[code];
    if (!room) return socket.emit('errorMsg', 'Raum nicht gefunden.');
    if (room.started) return socket.emit('errorMsg', 'Spiel läuft bereits – warte auf die nächste Runde.');
    if (!name) return socket.emit('errorMsg', 'Bitte gib einen Teamnamen ein.');
    const taken = Object.values(room.teams).some(t => t.name.toLowerCase() === name.toLowerCase());
    if (taken) return socket.emit('errorMsg', 'Teamname schon vergeben, nimm einen anderen.');
    room.teams[socket.id] = { name, score: 0 };
    socket.join(code);
    socket.data.room = code;
    socket.data.name = name;
    socket.emit('room:joined', { code, name, teams: teamList(room) });
    broadcastLobby(code);
  });

  socket.on('room:start', () => {
    const code = socket.data.room;
    const room = rooms[code];
    if (!room || room.started) return;
    if (Object.keys(room.teams).length < 2) {
      return socket.emit('errorMsg', 'Mindestens 2 Teams werden benötigt.');
    }
    room.started = true;
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
});
