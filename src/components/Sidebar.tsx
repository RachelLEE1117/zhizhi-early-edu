import { useStore, type PageKey } from '../store';

const NAV: { key: PageKey; label: string; emoji: string; color: string }[] = [
  { key: 'today', label: '今日', emoji: '🏠', color: '#FF8FAB' },
  { key: 'library', label: '活动库', emoji: '🧩', color: '#FFA94D' },
  { key: 'themes', label: '主题', emoji: '🌈', color: '#A78BDA' },
  { key: 'english', label: '英文', emoji: '🔤', color: '#62B6E8' },
  { key: 'records', label: '发育', emoji: '📝', color: '#7FCB6E' },
  { key: 'materials', label: '教具', emoji: '🧺', color: '#C99A6B' },
  { key: 'space', label: '空间', emoji: '🏡', color: '#5BA85B' },
  { key: 'principles', label: '原则', emoji: '🌱', color: '#8FBF7F' },
  { key: 'settings', label: '设置', emoji: '⚙️', color: '#9A8A7C' }
];

export default function Sidebar() {
  const page = useStore((s) => s.page);
  const setPage = useStore((s) => s.setPage);
  const name = useStore((s) => s.settings.name);

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-egg">🐣</span>
        <span className="logo-name">{name}</span>
      </div>
      {NAV.map((n) => (
        <button
          key={n.key}
          className={`nav-item${page === n.key ? ' active' : ''}`}
          onClick={() => setPage(n.key)}
        >
          <span className="nav-icon" style={{ background: `${n.color}1F` }}>
            {n.emoji}
          </span>
          <span className="nav-label" style={page === n.key ? { color: n.color } : undefined}>
            {n.label}
          </span>
        </button>
      ))}
    </aside>
  );
}
