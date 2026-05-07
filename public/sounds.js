// Synthetisierte Sounds via Web Audio API. Keine Audio-Dateien nötig.
// Mute-State wird in localStorage gespeichert.

const SoundFX = (() => {
  let ctx = null;
  let muted = localStorage.getItem('pubquiz-muted') === '1';

  function init() {
    if (!ctx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) ctx = new Ctx();
    }
    if (ctx && ctx.state === 'suspended') ctx.resume();
  }

  function setMuted(v) {
    muted = v;
    localStorage.setItem('pubquiz-muted', v ? '1' : '0');
  }

  function toggleMuted() {
    setMuted(!muted);
    return muted;
  }

  function isMuted() { return muted; }

  function play(notes, type = 'sine', masterGain = 0.18) {
    if (muted || !ctx) return;
    const now = ctx.currentTime;
    notes.forEach(([freq, start, dur, gain = masterGain]) => {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq;
      const env = ctx.createGain();
      env.gain.setValueAtTime(0.0001, now + start);
      env.gain.exponentialRampToValueAtTime(gain, now + start + 0.02);
      env.gain.exponentialRampToValueAtTime(0.0001, now + start + dur);
      osc.connect(env).connect(ctx.destination);
      osc.start(now + start);
      osc.stop(now + start + dur + 0.05);
    });
  }

  return {
    init,
    setMuted,
    toggleMuted,
    isMuted,

    questionStart() {
      play([
        [523.25, 0,    0.10],
        [659.25, 0.08, 0.18]
      ], 'triangle');
    },

    correct() {
      play([
        [523.25, 0.00, 0.12],
        [659.25, 0.10, 0.12],
        [783.99, 0.20, 0.18],
        [1046.5, 0.32, 0.35]
      ], 'triangle', 0.20);
    },

    wrong() {
      play([
        [392.00, 0.00, 0.20],
        [311.13, 0.18, 0.25],
        [196.00, 0.40, 0.50]
      ], 'sawtooth', 0.16);
    },

    tick() {
      play([[1100, 0, 0.05, 0.08]], 'square');
    },

    finale() {
      play([
        [523.25, 0.00, 0.18],
        [659.25, 0.18, 0.18],
        [783.99, 0.36, 0.18],
        [1046.5, 0.54, 0.5]
      ], 'triangle', 0.22);
    }
  };
})();
