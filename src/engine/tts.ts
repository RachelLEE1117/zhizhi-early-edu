let voices: SpeechSynthesisVoice[] = [];

function refresh() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    voices = window.speechSynthesis.getVoices();
  }
}
if (typeof window !== 'undefined') {
  refresh();
  window.speechSynthesis?.addEventListener?.('voiceschanged', refresh);
}

export function ttsSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function makeUtterance(text: string, rate: number): SpeechSynthesisUtterance {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = rate;
  u.pitch = 1.05;
  if (!voices.length) refresh();
  const v =
    voices.find((v) => /Google US English|Samantha|Microsoft (Aria|Jenny|Zira|Ana)|Natural/i.test(v.name)) ||
    voices.find((v) => v.lang === 'en-US') ||
    voices.find((v) => v.lang.startsWith('en'));
  if (v) u.voice = v;
  return u;
}

/** 播放一段英文（语速放慢，适合磨耳朵） */
export function speak(text: string, rate = 0.78) {
  if (!ttsSupported()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  synth.speak(makeUtterance(text, rate));
}

/** 顺序连播多段英文 */
export function speakSequence(texts: string[], rate = 0.78, onDone?: () => void) {
  if (!ttsSupported()) {
    onDone?.();
    return;
  }
  const synth = window.speechSynthesis;
  synth.cancel();
  let i = 0;
  const next = () => {
    if (i >= texts.length) {
      onDone?.();
      return;
    }
    const u = makeUtterance(texts[i], rate);
    u.onend = () => {
      i += 1;
      setTimeout(next, 400);
    };
    synth.speak(u);
  };
  next();
}

export function stopSpeak() {
  if (ttsSupported()) window.speechSynthesis.cancel();
}
