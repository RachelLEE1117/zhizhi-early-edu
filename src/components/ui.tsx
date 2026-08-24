import { useEffect, useRef, useState } from 'react';
import { speak, speakSequence, stopSpeak, ttsSupported } from '../engine/tts';

// ---------- 可爱勾选框 ----------
export function Checkbox({ checked, onToggle }: { checked: boolean; onToggle?: () => void }) {
  return (
    <button
      className={`checkbox${checked ? ' checked' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onToggle?.();
      }}
      aria-label={checked ? '已完成' : '未完成'}
    >
      {checked ? '✓' : ''}
    </button>
  );
}

// ---------- 英文语音播放按钮 ----------
export function SpeakButton({ text, rate = 0.78, small = false }: { text: string; rate?: number; small?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  if (!ttsSupported()) return null;
  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    stopSpeak();
    speak(text, rate);
    setPlaying(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setPlaying(false), Math.min(4000, text.length * 140 + 700));
  };
  return (
    <button className={`speak-btn${playing ? ' playing' : ''}${small ? ' small' : ''}`} onClick={onClick} aria-label="播放">
      🔊
    </button>
  );
}

// ---------- 连播按钮 ----------
export function PlayAllButton({ texts, label = '连播全部' }: { texts: string[]; label?: string }) {
  const [playing, setPlaying] = useState(false);
  if (!ttsSupported()) return null;
  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (playing) {
      stopSpeak();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    speakSequence(texts, 0.78, () => setPlaying(false));
  };
  return (
    <button className="btn ghost small" onClick={onClick}>
      {playing ? '⏹ 停止' : `▶ ${label}`}
    </button>
  );
}

// ---------- 进度条 ----------
export function ProgressBar({ value, color }: { value: number; color?: string }) {
  return (
    <div className="pbar">
      <i style={{ width: `${Math.round(value * 100)}%`, background: color || 'var(--pink)' }} />
    </div>
  );
}

// ---------- Tab 切换 ----------
export function TabRow({ tabs, on, setOn }: { tabs: { key: string; label: string }[]; on: string; setOn: (k: string) => void }) {
  return (
    <div className="tab-row">
      {tabs.map((t) => (
        <button key={t.key} className={`tab${on === t.key ? ' on' : ''}`} onClick={() => setOn(t.key)}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

// ---------- 筛选 chips ----------
export function FilterChips({ options, on, setOn, color }: { options: { key: string; label: string }[]; on: string; setOn: (k: string) => void; color?: string }) {
  return (
    <div className="filter-row">
      {options.map((o) => (
        <button
          key={o.key}
          className={`filter-chip${on === o.key ? ' on' : ''}`}
          style={on === o.key && color ? { borderColor: color, color, background: `${color}18` } : undefined}
          onClick={() => setOn(o.key)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
