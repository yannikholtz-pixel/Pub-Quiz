const socket = io();

const TOKEN_KEY = 'pubquiz-token';
let myToken = localStorage.getItem(TOKEN_KEY);
function saveToken(t) {
  myToken = t || null;
  if (t) localStorage.setItem(TOKEN_KEY, t);
  else localStorage.removeItem(TOKEN_KEY);
}

socket.on('connect', () => {
  if (myToken) socket.emit('room:reconnect', { token: myToken });
});

socket.on('reconnect:fail', () => {
  saveToken(null);
});

const AVATARS = [
  '🍺','🍻','🥂','🐙','🦄','🐸','🦖','🦥','🐢','🐺','🦊','🐼',
  '🦁','🐬','🐝','🦔','🦅','🐯','🤖','👽','👻','🎃','🤡','🦸',
  '🥷','🧙','😎','🤓','🥸','🤠','🍕','🌭','🍿','🚀','⚡','🔥',
  '🏆','🎸'
];
const AVATAR_KEY = 'pubquiz-avatar';
let selectedAvatar = localStorage.getItem(AVATAR_KEY);
if (!selectedAvatar || !AVATARS.includes(selectedAvatar)) {
  selectedAvatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];
}

function renderAvatarGrid() {
  const grid = document.getElementById('avatar-grid');
  if (!grid) return;
  grid.innerHTML = '';
  for (const av of AVATARS) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'avatar-btn' + (av === selectedAvatar ? ' selected' : '');
    btn.textContent = av;
    btn.setAttribute('aria-label', 'Avatar ' + av);
    btn.addEventListener('click', () => {
      selectedAvatar = av;
      localStorage.setItem(AVATAR_KEY, av);
      renderAvatarGrid();
      const display = document.getElementById('selected-avatar');
      if (display) display.textContent = av;
    });
    grid.appendChild(btn);
  }
  const display = document.getElementById('selected-avatar');
  if (display) display.textContent = selectedAvatar;
}
renderAvatarGrid();

document.addEventListener('click', () => SoundFX.init(), { once: true });

const muteBtn = document.getElementById('mute-toggle');
function refreshMuteBtn() {
  muteBtn.textContent = SoundFX.isMuted() ? '🔇' : '🔊';
}
refreshMuteBtn();
muteBtn.addEventListener('click', () => {
  SoundFX.toggleMuted();
  SoundFX.init();
  refreshMuteBtn();
});

const screens = {
  start: document.getElementById('screen-start'),
  lobby: document.getElementById('screen-lobby'),
  question: document.getElementById('screen-question'),
  reveal: document.getElementById('screen-reveal'),
  milestone: document.getElementById('screen-milestone'),
  final: document.getElementById('screen-final')
};

function show(name) {
  for (const k of Object.keys(screens)) screens[k].classList.add('hidden');
  screens[name].classList.remove('hidden');
}

const errorEl = document.getElementById('error');
function showError(msg) {
  errorEl.textContent = msg;
  setTimeout(() => { if (errorEl.textContent === msg) errorEl.textContent = ''; }, 4000);
}

let myCode = null;
let questionTimerHandle = null;
let revealTimerHandle = null;
let milestoneTimerHandle = null;

const params = new URLSearchParams(location.search);
if (params.get('room')) {
  document.getElementById('join-code').value = params.get('room').toUpperCase();
}

document.getElementById('btn-create').addEventListener('click', () => {
  const name = document.getElementById('create-name').value.trim();
  if (!name) return showError('Bitte Teamnamen eingeben.');
  saveToken(null);  // frischer Token bei neuem Spiel
  socket.emit('room:create', { name, avatar: selectedAvatar });
});

document.getElementById('btn-join').addEventListener('click', () => {
  const code = document.getElementById('join-code').value.trim().toUpperCase();
  const name = document.getElementById('join-name').value.trim();
  if (!code || !name) return showError('Bitte Raumcode und Teamname eingeben.');
  saveToken(null);
  socket.emit('room:join', { code, name, avatar: selectedAvatar });
});

document.getElementById('join-code').addEventListener('input', (e) => {
  e.target.value = e.target.value.toUpperCase();
});

document.getElementById('btn-start').addEventListener('click', () => {
  socket.emit('room:start');
});

document.getElementById('btn-share').addEventListener('click', async () => {
  const url = `${location.origin}${location.pathname}?room=${myCode}`;
  try {
    await navigator.clipboard.writeText(url);
    document.getElementById('btn-share').textContent = '✓ Link kopiert';
    setTimeout(() => {
      document.getElementById('btn-share').textContent = '🔗 Link kopieren';
    }, 2000);
  } catch {
    prompt('Kopier den Link:', url);
  }
});

document.getElementById('btn-restart').addEventListener('click', () => {
  saveToken(null);
  location.href = location.pathname;
});

socket.on('errorMsg', showError);

socket.on('room:joined', ({ code, name, token, teams, questionCount }) => {
  myCode = code;
  if (token) saveToken(token);
  document.getElementById('room-code').textContent = code;
  renderQR(code);
  renderTeams(teams);
  if (questionCount) setLengthButtons(questionCount);
  show('lobby');
});

function renderQR(code) {
  const url = `${location.origin}${location.pathname}?room=${code}`;
  const target = document.getElementById('qr-code');
  if (!target || typeof qrcode === 'undefined') return;
  try {
    const qr = qrcode(0, 'M');
    qr.addData(url);
    qr.make();
    target.innerHTML = qr.createImgTag(5, 8);
  } catch (e) {
    target.innerHTML = '';
  }
}

socket.on('lobby:length', ({ count }) => {
  setLengthButtons(count);
});

function setLengthButtons(len) {
  document.querySelectorAll('.len-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.len, 10) === len);
  });
}

document.querySelectorAll('.len-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const len = parseInt(btn.dataset.len, 10);
    socket.emit('lobby:setLength', { count: len });
  });
});

socket.on('lobby:teams', (teams) => {
  renderTeams(teams);
});

function renderTeams(teams) {
  const list = document.getElementById('team-list');
  list.innerHTML = '';
  for (const t of teams) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="team-avatar">${t.avatar || '🎲'}</span><span class="team-name">${escapeHtml(t.name)}</span>`;
    if (t.online === false) li.classList.add('offline');
    list.appendChild(li);
  }
  const startBtn = document.getElementById('btn-start');
  const status = document.getElementById('lobby-status');
  startBtn.disabled = teams.length < 1;
  if (teams.length === 0) {
    status.textContent = 'Warten auf das erste Team…';
  } else if (teams.length === 1) {
    status.textContent = '1 Team – du kannst auch alleine starten.';
  } else {
    status.textContent = `${teams.length} Teams – jeder kann starten. (max. 99)`;
  }
}

socket.on('game:start', () => {
  // brief countdown vor erster Frage – aber Server sendet "question" sowieso bald
});

socket.on('question', ({ idx, total, text, options, deadline }) => {
  document.getElementById('q-idx').textContent = idx + 1;
  document.getElementById('q-total').textContent = total;
  document.getElementById('q-text').textContent = text;
  document.getElementById('q-answered').textContent = '0';
  document.getElementById('q-total2').textContent = '?';
  document.getElementById('q-status').classList.add('hidden');

  const ul = document.getElementById('q-options');
  ul.innerHTML = '';
  options.forEach((opt, i) => {
    const li = document.createElement('li');
    li.dataset.letter = String.fromCharCode(65 + i);
    li.textContent = opt;
    li.addEventListener('click', () => {
      if (li.classList.contains('disabled')) return;
      [...ul.children].forEach(c => c.classList.add('disabled'));
      li.classList.add('selected');
      socket.emit('answer', { choice: i });
    });
    ul.appendChild(li);
  });

  startCountdown(deadline, document.getElementById('q-timer'), document.getElementById('timer-fill'));
  SoundFX.questionStart();
  show('question');
});

socket.on('progress', ({ answered, total }) => {
  const a = document.getElementById('q-answered');
  const t = document.getElementById('q-total2');
  if (a) a.textContent = answered;
  if (t) t.textContent = total;
});

socket.on('answered', () => {
  document.getElementById('q-status').classList.remove('hidden');
});

socket.on('reveal', ({ answered, correct, correctChoice, correctText, explanation, gif, score, isLast, nextDeadline, strafschluck }) => {
  clearInterval(questionTimerHandle);

  if (correct) SoundFX.correct(); else SoundFX.wrong();

  const strafBox = document.getElementById('r-strafschluck');
  if (strafschluck) {
    strafBox.classList.remove('hidden');
    document.getElementById('r-strafschluck-count').textContent =
      strafschluck.count + (strafschluck.count === 1 ? ' Schluck' : ' Schlücke');
    document.getElementById('r-strafschluck-msg').textContent = strafschluck.message;
  } else {
    strafBox.classList.add('hidden');
  }

  const headline = document.getElementById('r-headline');
  if (!answered) {
    headline.textContent = '⏰ Zu spät!';
    headline.className = 'headline-wrong';
  } else if (correct) {
    headline.textContent = pick(['🎉 Richtig!', '✨ Volltreffer!', '🔥 Perfekt!', '💯 Bravo!', '🍻 Prost auf dich!']);
    headline.className = 'headline-correct';
  } else {
    headline.textContent = pick(['😬 Daneben!', '🙈 Knapp daneben', '💀 Nope.', '🤡 Lächerlich.', '🥴 Au weia.']);
    headline.className = 'headline-wrong';
  }

  const img = document.getElementById('r-gif');
  img.style.display = '';
  img.src = gif;
  img.alt = correct ? 'Richtige Antwort' : 'Falsche Antwort';

  document.getElementById('r-correct').textContent =
    'Richtig: ' + String.fromCharCode(65 + correctChoice) + ') ' + correctText;
  document.getElementById('r-explanation').textContent = explanation || '';
  document.getElementById('r-score').textContent = score;

  startRevealCountdown(nextDeadline, isLast);
  show('reveal');
});

socket.on('reveal:scores', ({ scores }) => {
  const ol = document.getElementById('r-scores');
  ol.innerHTML = '';
  for (const s of scores) {
    const li = document.createElement('li');
    if (s.online === false) li.classList.add('offline');
    li.innerHTML = `<span class="score-avatar">${s.avatar || '🎲'}</span><span class="score-name">${escapeHtml(s.name)}</span><span class="pts">${s.score} Pkt</span>`;
    ol.appendChild(li);
  }
});

socket.on('milestone:scoreboard', ({ scores, completed, total, nextDeadline }) => {
  clearInterval(revealTimerHandle);
  document.getElementById('m-progress').textContent =
    `Frage ${completed} / ${total} geschafft`;
  const ol = document.getElementById('m-scores');
  ol.innerHTML = '';
  for (const s of scores) {
    const li = document.createElement('li');
    if (s.online === false) li.classList.add('offline');
    li.innerHTML = `<span class="score-avatar">${s.avatar || '🎲'}</span><span class="score-name">${escapeHtml(s.name)}</span><span class="pts">${s.score} Pkt</span>`;
    ol.appendChild(li);
  }
  startMilestoneCountdown(nextDeadline);
  SoundFX.finale();
  show('milestone');
});

function startMilestoneCountdown(deadline) {
  clearInterval(milestoneTimerHandle);
  const labelEl = document.getElementById('m-countdown');
  const update = () => {
    const remaining = Math.max(0, deadline - Date.now());
    if (labelEl) labelEl.textContent = Math.ceil(remaining / 1000);
    if (remaining <= 0) clearInterval(milestoneTimerHandle);
  };
  update();
  milestoneTimerHandle = setInterval(update, 250);
}

socket.on('game:over', (scores) => {
  clearInterval(revealTimerHandle);
  clearInterval(milestoneTimerHandle);
  SoundFX.finale();
  const ol = document.getElementById('final-scores');
  ol.innerHTML = '';
  for (const s of scores) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="score-avatar">${s.avatar || '🎲'}</span><span class="score-name">${escapeHtml(s.name)}</span><span class="pts">${s.score} Pkt</span>`;
    ol.appendChild(li);
  }
  const winner = scores[0];
  const comment = document.getElementById('final-comment');
  if (!winner) {
    comment.textContent = '';
  } else if (scores.length > 1 && scores[0].score === scores[1].score) {
    comment.textContent = 'Unentschieden! Stichkampf an der Theke. 🍻';
  } else {
    comment.textContent = `🏆 ${winner.avatar || ''} ${winner.name} gewinnt – die nächste Runde geht aufs Haus!`;
  }
  show('final');
});

function startCountdown(deadline, labelEl, fillEl) {
  clearInterval(questionTimerHandle);
  const total = Math.max(1, deadline - Date.now());
  let lastSecond = -1;
  const update = () => {
    const remaining = Math.max(0, deadline - Date.now());
    const seconds = Math.ceil(remaining / 1000);
    if (seconds !== lastSecond && seconds > 0 && seconds <= 5) {
      SoundFX.tick();
    }
    lastSecond = seconds;
    if (labelEl) labelEl.textContent = seconds;
    if (fillEl) fillEl.style.width = (remaining / total * 100) + '%';
    if (remaining <= 0) clearInterval(questionTimerHandle);
  };
  update();
  questionTimerHandle = setInterval(update, 100);
}

function startRevealCountdown(deadline, isLast) {
  clearInterval(revealTimerHandle);
  const labelEl = document.getElementById('r-countdown');
  const update = () => {
    const remaining = Math.max(0, deadline - Date.now());
    const seconds = Math.ceil(remaining / 1000);
    if (labelEl) {
      labelEl.textContent = seconds;
      labelEl.parentElement.firstChild.textContent =
        isLast ? 'Endstand in ' : 'Nächste Frage in ';
    }
    if (remaining <= 0) clearInterval(revealTimerHandle);
  };
  update();
  revealTimerHandle = setInterval(update, 250);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  })[c]);
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
