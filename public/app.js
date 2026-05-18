const socket = io();

const TOKEN_KEY = 'pubquiz-token';
let myToken = localStorage.getItem(TOKEN_KEY);
let cachedTeams = [];
let myStreak = 0;
let canSabotage = false;
let myName = null;
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
  special: document.getElementById('screen-special'),
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
let specialTimerHandle = null;
let myJokers = { fiftyfifty: true, skip: true, doublepoints: true };
let pendingDoublepoints = false;

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

socket.on('room:joined', ({ code, name, token, teams, questionCount, jokers, pendingDoublepoints: pd }) => {
  myCode = code;
  myName = name || null;
  if (token) saveToken(token);
  if (jokers) myJokers = jokers;
  pendingDoublepoints = !!pd;
  if (teams) cachedTeams = teams;
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
  cachedTeams = teams;
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

socket.on('question', ({ idx, total, text, options, deadline, doublornix, hard }) => {
  document.getElementById('q-idx').textContent = idx + 1;
  document.getElementById('q-total').textContent = total;
  document.getElementById('q-text').textContent = text;
  document.getElementById('q-answered').textContent = '0';
  document.getElementById('q-total2').textContent = '?';
  document.getElementById('q-status').classList.add('hidden');

  // Quizmaster-Sprechblase und Antwort-Verteilung fürs nächste Reveal zurücksetzen
  const qmBubble = document.getElementById('r-quizmaster');
  if (qmBubble) qmBubble.classList.add('hidden');
  const distBox = document.getElementById('r-distribution');
  if (distBox) distBox.classList.add('hidden');

  // Doppelornix-Banner aus dem Server-Hinweis (per question payload optional)
  document.getElementById('doublornix-banner').classList.toggle('hidden', !doublornix);

  // Hard-Question-Banner (Sabotage-Frage mit 6 Optionen)
  const hardBanner = document.getElementById('hard-banner');
  if (hardBanner) hardBanner.classList.toggle('hidden', !hard);

  // Doppelpunkte-Anzeige je nach pendingDoublepoints
  document.getElementById('doublepoints-active').classList.toggle('hidden', !pendingDoublepoints);

  // Joker-Buttons rendern
  renderJokers();

  const ul = document.getElementById('q-options');
  ul.innerHTML = '';
  options.forEach((opt, i) => {
    const li = document.createElement('li');
    li.dataset.letter = String.fromCharCode(65 + i);
    li.dataset.idx = i;
    li.textContent = opt;
    li.addEventListener('click', () => {
      if (li.classList.contains('disabled') || li.classList.contains('removed')) return;
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

function renderJokers() {
  document.querySelectorAll('.joker-btn').forEach(btn => {
    const type = btn.dataset.joker;
    btn.disabled = !myJokers[type];
    btn.classList.toggle('used', !myJokers[type]);
  });
}

document.querySelectorAll('.joker-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.joker;
    if (!myJokers[type]) return;
    socket.emit('joker:use', { type });
  });
});

socket.on('sabotage:cast', ({ source, target }) => {
  showSabotageBanner(source, target);
  SoundFX.wrong();
});

socket.on('sabotage:used', ({ streak }) => {
  myStreak = streak || 0;
  canSabotage = false;
  const sabBox = document.getElementById('r-sabotage');
  if (sabBox) sabBox.classList.add('hidden');
  closeSabotageModal();
});

document.getElementById('btn-sabotage').addEventListener('click', () => {
  if (!canSabotage) return;
  openSabotageModal();
});
document.getElementById('btn-sabotage-cancel').addEventListener('click', closeSabotageModal);

function openSabotageModal() {
  const modal = document.getElementById('sabotage-modal');
  const list = document.getElementById('sabotage-team-list');
  list.innerHTML = '';

  // Zielliste: alle anderen Teams (nicht ich)
  const others = cachedTeams.filter(t => t.name !== myName);
  if (others.length === 0) {
    list.innerHTML = '<p class="hint">Keine Gegner zum Sabotieren da.</p>';
  }
  others.forEach(t => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'sabotage-target-btn' + (t.online === false ? ' offline' : '');
    btn.innerHTML = `<span class="target-avatar">${t.avatar || '🎲'}</span><span class="target-name">${escapeHtml(t.name)}</span><span class="target-pts">${t.score} Pkt</span>`;
    btn.addEventListener('click', () => {
      const targetToken = t.token || null;
      // Server identifiziert per Token; aber unser cachedTeams hat keinen Token.
      // Wir senden stattdessen den Namen, Server löst per Lookup auf.
      socket.emit('sabotage:cast', { targetName: t.name });
      closeSabotageModal();
    });
    list.appendChild(btn);
  });
  modal.classList.remove('hidden');
}
function closeSabotageModal() {
  document.getElementById('sabotage-modal').classList.add('hidden');
}


function showSabotageBanner(source, target) {
  const banner = document.createElement('div');
  banner.className = 'sabotage-banner';
  banner.innerHTML = `
    <div class="sabotage-label">⚡ Sabotage ⚡</div>
    <div class="sabotage-row">
      <span class="sabotage-source">${source.avatar} ${escapeHtml(source.name)}</span>
      <span class="sabotage-arrow">→</span>
      <span class="sabotage-target">${target.avatar} ${escapeHtml(target.name)}</span>
    </div>
    <div class="sabotage-hint">Nächste Frage wird brutal.</div>
  `;
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 4200);
}

socket.on('joker:applied', ({ type, removedIndices, jokers }) => {
  if (jokers) myJokers = jokers;
  renderJokers();

  if (type === 'fiftyfifty' && Array.isArray(removedIndices)) {
    const ul = document.getElementById('q-options');
    if (ul) {
      removedIndices.forEach(i => {
        const li = ul.children[i];
        if (li) {
          li.classList.add('removed', 'disabled');
        }
      });
    }
  } else if (type === 'doublepoints') {
    pendingDoublepoints = true;
    document.getElementById('doublepoints-active').classList.remove('hidden');
  } else if (type === 'skip') {
    const ul = document.getElementById('q-options');
    if (ul) [...ul.children].forEach(c => c.classList.add('disabled'));
    document.getElementById('q-status').classList.remove('hidden');
    document.getElementById('q-status').textContent = '⏭ Übersprungen.';
  }
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

socket.on('reveal', ({ answered, correct, skipped, pointsDelta, correctChoice, correctText, explanation, gif, score, isLast, nextDeadline, strafschluck, doublornixActive, streak, canSabotage: cs, distribution }) => {
  clearInterval(questionTimerHandle);

  // Doppelpunkte wurden mit dieser Frage verbraucht.
  pendingDoublepoints = false;
  myStreak = streak || 0;
  canSabotage = !!cs;

  // Sabotage-Karte ein-/ausblenden
  const sabBox = document.getElementById('r-sabotage');
  if (sabBox) sabBox.classList.toggle('hidden', !canSabotage);

  if (correct) SoundFX.correct(); else SoundFX.wrong();
  flashStage(correct ? 'correct' : 'wrong');
  if (correct && answered && !skipped) spawnConfetti();

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
  if (skipped) {
    headline.textContent = '⏭ Übersprungen';
    headline.className = '';
  } else if (!answered) {
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

  // Antwort-Verteilung
  renderDistribution(distribution, correctChoice);
  const scoreEl = document.getElementById('r-score');
  scoreEl.textContent = score;
  // Punkte-Delta als kleiner Floater anzeigen
  if (typeof pointsDelta === 'number' && pointsDelta !== 0) {
    const sign = pointsDelta > 0 ? '+' : '';
    scoreEl.dataset.delta = sign + pointsDelta;
    scoreEl.classList.remove('delta-pos', 'delta-neg', 'delta-show');
    void scoreEl.offsetWidth;
    scoreEl.classList.add(pointsDelta > 0 ? 'delta-pos' : 'delta-neg', 'delta-show');
  } else {
    scoreEl.classList.remove('delta-show');
  }

  startRevealCountdown(nextDeadline, isLast);
  show('reveal');
});

socket.on('quizmaster:comment', ({ text }) => {
  const bubble = document.getElementById('r-quizmaster');
  if (!bubble) return;
  bubble.querySelector('.quizmaster-text').textContent = text;
  bubble.classList.remove('hidden');
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

socket.on('special:round', ({ type, pickedTeam, schlucke, teams, nextDeadline }) => {
  clearInterval(milestoneTimerHandle);
  clearInterval(specialTimerHandle);

  const label = document.getElementById('special-label');
  const title = document.getElementById('special-title');
  const content = document.getElementById('special-content');

  if (type === 'saufroulette') {
    label.textContent = '🎰 Saufroulette';
    title.textContent = '';
    content.innerHTML = `
      <div class="roulette-stage">
        <div class="roulette-display"><span class="roulette-avatar">🎲</span></div>
        <div class="roulette-result"></div>
      </div>`;
    flashStage('wrong');
    spinSaufroulette(pickedTeam, schlucke, teams);
  } else if (type === 'alletrinken') {
    label.textContent = '🍺 Alle trinken';
    title.textContent = '1 Schluck für jedes Team!';
    content.innerHTML = `
      <div class="all-drink">
        ${(teams || []).map(t => `<span class="all-drink-avatar">${t.avatar}</span>`).join('')}
      </div>
      <p class="hint">Cheers! 🍻</p>`;
    SoundFX.wrong();
    flashStage('wrong');
  } else if (type === 'doublornix') {
    label.textContent = '💎 Doppelt oder Nix';
    title.textContent = 'Die nächste Frage';
    content.innerHTML = `
      <div class="risk-grid">
        <div class="risk-row good"><strong>✅ Richtig</strong><span>+200 Punkte</span></div>
        <div class="risk-row bad"><strong>❌ Falsch</strong><span>−100 Punkte</span></div>
      </div>`;
    SoundFX.questionStart();
    flashStage('correct');
  }

  startSpecialCountdown(nextDeadline);
  show('special');
});

function spinSaufroulette(picked, schlucke, allTeams) {
  const display = document.querySelector('.roulette-display');
  const result = document.querySelector('.roulette-result');
  if (!display || !result) return;
  const pool = (allTeams && allTeams.length) ? allTeams : [picked];
  let i = 0;
  let speed = 70;
  const tick = () => {
    const team = pool[i % pool.length];
    display.innerHTML = `<span class="roulette-avatar">${team.avatar}</span>`;
    SoundFX.tick();
    i++;
    speed += 22;
    if (speed > 600) {
      display.innerHTML = `<span class="roulette-avatar locked">${picked.avatar}</span>`;
      result.innerHTML = `<strong>${escapeHtml(picked.name)}</strong> muss <strong>${schlucke} Schlücke</strong> trinken!`;
      result.classList.add('show');
      SoundFX.wrong();
      return;
    }
    setTimeout(tick, speed);
  };
  setTimeout(tick, 400);
}

function startSpecialCountdown(deadline) {
  clearInterval(specialTimerHandle);
  const labelEl = document.getElementById('special-countdown');
  const update = () => {
    const remaining = Math.max(0, deadline - Date.now());
    if (labelEl) labelEl.textContent = Math.ceil(remaining / 1000);
    if (remaining <= 0) clearInterval(specialTimerHandle);
  };
  update();
  specialTimerHandle = setInterval(update, 250);
}

socket.on('milestone:scoreboard', ({ scores, completed, total, nextDeadline }) => {
  clearInterval(revealTimerHandle);

  const labelEl = document.getElementById('m-label');
  if (labelEl) {
    if (completed * 2 === total)         labelEl.textContent = 'Halbzeit-Stand';
    else if (total - completed <= 10)    labelEl.textContent = 'Endspurt-Stand';
    else                                 labelEl.textContent = 'Zwischenstand';
  }

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
  spawnConfetti(120);
  const ol = document.getElementById('final-scores');
  ol.innerHTML = '';
  for (const s of scores) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="score-avatar">${s.avatar || '🎲'}</span><span class="score-name">${escapeHtml(s.name)}</span><span class="pts">${s.score} Pkt</span>${renderTeamStats(s.stats)}`;
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

function renderTeamStats(stats) {
  if (!stats) return '';
  const parts = [];
  parts.push(`<span>✅ ${stats.correct}</span>`);
  if (stats.wrong > 0) parts.push(`<span>❌ ${stats.wrong}</span>`);
  if (stats.skipped > 0) parts.push(`<span>⏭ ${stats.skipped}</span>`);
  if ((stats.longestStreak || 0) >= 2) parts.push(`<span>🔥 ${stats.longestStreak}er-Serie</span>`);
  if (stats.strafschluecke > 0) {
    parts.push(`<span>🍺 ${stats.strafschluecke} Schluck${stats.strafschluecke === 1 ? '' : (stats.strafschluecke < 5 ? ' Schlücke' : ' Schlücke')}</span>`);
  }
  if (typeof stats.fastestCorrectMs === 'number' && stats.fastestCorrectMs > 0) {
    parts.push(`<span>⚡ ${(stats.fastestCorrectMs / 1000).toFixed(1)} s schnellste</span>`);
  }
  if (stats.sabotagesCast > 0) parts.push(`<span>🎯 ${stats.sabotagesCast}× sabotiert</span>`);
  if (stats.sabotagesReceived > 0) parts.push(`<span>☠️ ${stats.sabotagesReceived}× erwischt</span>`);
  if (Array.isArray(stats.jokersUsed) && stats.jokersUsed.length > 0) {
    const icons = stats.jokersUsed.map(j => j === 'fiftyfifty' ? '⚖️' : j === 'skip' ? '⏭' : j === 'doublepoints' ? '×2' : '?').join(' ');
    parts.push(`<span>🃏 ${icons}</span>`);
  }
  return `<div class="team-stats">${parts.join('')}</div>`;
}

function renderDistribution(distribution, correctChoice) {
  const distEl = document.getElementById('r-distribution');
  if (!distEl) return;
  if (!distribution || !Array.isArray(distribution.counts) || distribution.counts.length === 0 || distribution.total <= 0) {
    distEl.classList.add('hidden');
    distEl.innerHTML = '';
    return;
  }
  distEl.innerHTML = '';
  const header = document.createElement('div');
  header.className = 'dist-header';
  header.textContent = 'So haben die Teams geantwortet';
  distEl.appendChild(header);
  for (let i = 0; i < distribution.counts.length; i++) {
    const count = distribution.counts[i];
    const pct = Math.round((count / distribution.total) * 100);
    const isCorrect = i === correctChoice;
    const row = document.createElement('div');
    row.className = 'dist-row' + (isCorrect ? ' correct' : '');
    row.innerHTML = `
      <span class="dist-letter">${String.fromCharCode(65 + i)}</span>
      <div class="dist-bar"><div class="dist-fill" style="width: ${pct}%"></div></div>
      <span class="dist-pct">${pct}%</span>
    `;
    distEl.appendChild(row);
  }
  const extras = [];
  if (distribution.skipped > 0) extras.push(`${distribution.skipped}× Skip`);
  if (distribution.timeout > 0) extras.push(`${distribution.timeout}× keine Antwort`);
  if (extras.length > 0) {
    const meta = document.createElement('div');
    meta.className = 'dist-meta';
    meta.textContent = extras.join(' · ');
    distEl.appendChild(meta);
  }
  distEl.classList.remove('hidden');
}

function flashStage(type) {
  const flash = document.createElement('div');
  flash.className = 'stage-flash ' + type;
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 750);
}

const CONFETTI_COLORS = ['#ffd54a', '#ff9d3d', '#ff3d8b', '#34e3a4', '#3a8eff', '#fff3b0'];
function spawnConfetti(count = 60) {
  const container = document.createElement('div');
  container.className = 'confetti';
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    const size = 6 + Math.random() * 8;
    piece.style.left = (Math.random() * 100) + '%';
    piece.style.width = size + 'px';
    piece.style.height = (size * 1.5) + 'px';
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.animationDuration = (2.5 + Math.random() * 2) + 's';
    piece.style.animationDelay = (Math.random() * 0.4) + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);
  }
  document.body.appendChild(container);
  setTimeout(() => container.remove(), 5000);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  })[c]);
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
