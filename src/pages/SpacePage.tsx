import { useStore } from '../store';
import { SPACE_ZONES, SPACE_PRINCIPLES, SAFETY_CHECKLIST } from '../data/space';
import { Checkbox, ProgressBar } from '../components/ui';

// 可爱的客厅分区示意图（SVG 手绘风）
function FloorPlan() {
  return (
    <svg className="space-svg" viewBox="0 0 560 340" role="img" aria-label="五大功能区示意图">
      {/* 房间轮廓 */}
      <rect x="10" y="10" width="540" height="320" rx="24" fill="#FFFDF8" stroke="#E8D5BC" strokeWidth="3" />
      {/* 门 */}
      <path d="M 90 330 L 90 260 A 70 70 0 0 1 160 330 Z" fill="#F5E9D8" stroke="#E8D5BC" strokeWidth="2" />
      <text x="100" y="320" fontSize="11" fill="#B09A80">🚪 门</text>
      {/* 窗户 */}
      <rect x="430" y="30" width="90" height="14" rx="7" fill="#D8EEF8" stroke="#B7D9EA" strokeWidth="2" />
      <text x="440" y="60" fontSize="11" fill="#8FB3C6">🪟 窗</text>

      {/* 运动区（左大片） */}
      <rect x="30" y="30" width="240" height="180" rx="18" fill="#ECF8E7" stroke="#7FCB6E" strokeWidth="2.5" strokeDasharray="6 4" />
      <text x="46" y="56" fontSize="14" fontWeight="700" fill="#4E8F3C">🏃 运动区</text>
      <rect x="46" y="70" width="208" height="120" rx="10" fill="#DFF2D8" />
      <text x="60" y="92" fontSize="11" fill="#5E9A4B">▦ 爬行垫 + 枕头小坡</text>
      <rect x="46" y="104" width="140" height="26" rx="13" fill="#C8E8BE" />
      <text x="54" y="121" fontSize="10" fill="#4E8F3C">🧱 扶站沙发沿（防撞条）</text>
      <text x="60" y="154" fontSize="11" fill="#5E9A4B">🎈 低挂气球 · 推重物箱</text>

      {/* 操作区（右上） */}
      <rect x="290" y="30" width="130" height="110" rx="18" fill="#FFE9EF" stroke="#FF8FAB" strokeWidth="2.5" strokeDasharray="6 4" />
      <text x="306" y="56" fontSize="14" fontWeight="700" fill="#C75070">🖐️ 操作区</text>
      <rect x="306" y="68" width="66" height="40" rx="8" fill="#FFD9E4" />
      <text x="312" y="92" fontSize="10" fill="#C75070">矮桌</text>
      <text x="384" y="82" fontSize="11" fill="#C75070">🧺</text>
      <text x="382" y="98" fontSize="10" fill="#C75070">托盘</text>
      <text x="306" y="128" fontSize="10" fill="#B05A6E">材料随玩随收</text>

      {/* 感官区（右中） */}
      <rect x="290" y="152" width="130" height="58" rx="18" fill="#FFF7DC" stroke="#FFC94D" strokeWidth="2.5" strokeDasharray="6 4" />
      <text x="306" y="172" fontSize="13" fontWeight="700" fill="#B38617">🎵 感官区</text>
      <text x="306" y="194" fontSize="10" fill="#B38617">感官瓶 · 全身镜 · 音响</text>

      {/* 阅读角（右下） */}
      <rect x="290" y="222" width="230" height="88" rx="18" fill="#E5F5FD" stroke="#62B6E8" strokeWidth="2.5" strokeDasharray="6 4" />
      <text x="306" y="248" fontSize="14" fontWeight="700" fill="#2E7CB0">📚 阅读角</text>
      <rect x="306" y="258" width="60" height="40" rx="6" fill="#CFEAF9" />
      <text x="312" y="282" fontSize="10" fill="#2E7CB0">低书架</text>
      <text x="380" y="266" fontSize="11" fill="#2E7CB0">🛋️ 懒人沙发</text>
      <text x="380" y="288" fontSize="10" fill="#2E7CB0">封面朝前 3-5 本</text>

      {/* 收纳区（左下） */}
      <rect x="30" y="222" width="240" height="88" rx="18" fill="#F1EAFB" stroke="#A78BDA" strokeWidth="2.5" strokeDasharray="6 4" />
      <text x="46" y="248" fontSize="14" fontWeight="700" fill="#7057A8">🧺 收纳区</text>
      <rect x="46" y="258" width="70" height="38" rx="8" fill="#E2D8F7" />
      <text x="52" y="282" fontSize="10" fill="#7057A8">玩具筐A</text>
      <rect x="124" y="258" width="70" height="38" rx="8" fill="#E2D8F7" />
      <text x="130" y="282" fontSize="10" fill="#7057A8">玩具筐B</text>
      <text x="206" y="282" fontSize="10" fill="#7057A8">照片标签</text>
    </svg>
  );
}

export default function SpacePage() {
  const safety = useStore((s) => s.safety);
  const toggleSafety = useStore((s) => s.toggleSafety);
  const doneCount = SAFETY_CHECKLIST.filter((s) => safety[s.id]).length;

  return (
    <div className="page">
      <h1 className="page-title">🏡 空间布置</h1>
      <div className="page-sub">五大功能区 · 低成本在家实现 · 按月龄分区 · 附安全检查清单</div>

      <div className="card">
        <div className="card-title">
          <span className="t-emoji">🗺️</span> 客厅一角改造示意（约 8-10㎡）
        </div>
        <FloorPlan />
        <div className="notice">💡 五大功能区可以互相融合：上图只是一个参考布局，用家里现有家具组合即可。</div>
      </div>

      {SPACE_ZONES.map((z) => (
        <div key={z.key} className="card">
          <div className="card-title" style={{ color: z.color }}>
            <span className="t-emoji">{z.emoji}</span> {z.name}
          </div>
          <div className="activity-item">
            <div className="ai-title">🛠️ 布置要点</div>
            <ul className="ai-steps">
              {z.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="activity-item">
            <div className="ai-title">⚠️ 本区安全检查</div>
            <ul className="ai-steps">
              {z.safety.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="card">
        <div className="card-title">
          <span className="t-emoji">✅</span> 全屋安全检查清单（打勾保存）
          <span className="chip gray" style={{ marginLeft: 'auto' }}>
            {doneCount}/{SAFETY_CHECKLIST.length}
          </span>
        </div>
        <div style={{ margin: '8px 0 12px' }}>
          <ProgressBar value={doneCount / SAFETY_CHECKLIST.length} color="#E58A8A" />
        </div>
        {SAFETY_CHECKLIST.map((s) => (
          <div key={s.id} className={`ms-item${safety[s.id] ? ' done' : ''}`}>
            <Checkbox checked={!!safety[s.id]} onToggle={() => toggleSafety(s.id)} />
            <div className="ms-text">
              {s.text}
              <span className="chip gray" style={{ marginLeft: 6, fontSize: 11 }}>
                {s.group}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
