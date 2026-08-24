import { useStore } from '../store';
import { ageInMonths, stageLabel, stageOf, themeOfWeek } from '../engine/daily';

export default function SettingsPage() {
  const settings = useStore((s) => s.settings);
  const setSettings = useStore((s) => s.setSettings);
  const resetAll = useStore((s) => s.resetAll);
  const months = ageInMonths(settings.birth, new Date());

  const exportData = () => {
    const raw = localStorage.getItem('zhizhi-early-edu');
    const blob = new Blob([raw || '{}'], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zhizhi-early-edu-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="page">
      <h1 className="page-title">⚙️ 设置</h1>
      <div className="page-sub">宝宝资料 · 数据管理 · 安装说明</div>

      <div className="card">
        <div className="card-title">
          <span className="t-emoji">👶</span> 宝宝资料
        </div>
        <div className="field">
          <label>宝宝昵称</label>
          <input value={settings.name} onChange={(e) => setSettings({ name: e.target.value })} />
        </div>
        <div className="field">
          <label>出生日期（用于月龄适配与发育记录切换）</label>
          <input type="date" value={settings.birth} onChange={(e) => setSettings({ birth: e.target.value })} />
        </div>
        <div className="notice">
          🎂 当前：之之 <b>{months} 个月</b> · {stageLabel(stageOf(months))} · 本周主题：{themeOfWeek(new Date()).emoji}{' '}
          {themeOfWeek(new Date()).name}
          <br />
          📈 发育记录和每日内容会随月龄自动调整。
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <span className="t-emoji">💾</span> 数据管理
        </div>
        <div className="notice">
          🔒 所有数据（打勾记录、观察备注）都存在<b>本机浏览器</b>里，不上传服务器。换手机或清除浏览器数据会丢失，建议定期导出备份。
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn" onClick={exportData}>
            ⬇️ 导出数据备份
          </button>
          <button
            className="btn ghost"
            onClick={() => {
              if (confirm('确定清空所有打勾记录和备注吗？此操作不可恢复（建议先导出备份）。')) resetAll();
            }}
          >
            🗑️ 清空所有记录
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <span className="t-emoji">📲</span> 添加到手机桌面（当 APP 用）
        </div>
        <ol className="ai-steps" style={{ marginTop: 6 }}>
          <li>用手机浏览器打开本应用的链接</li>
          <li>
            <b>小米 15 用户</b>：右上角 ⋮ 菜单 → 「<b>添加到桌面</b>」或「安装应用」
          </li>
          <li>桌面会出现 🐣 图标，点开就是全屏 APP 体验</li>
          <li>首次打开后，APP 会自动缓存到手机，之后没网也能看今日内容</li>
        </ol>
        <div className="notice">
          🔤 英文语音播放使用手机自带语音引擎（Web Speech API），小米 15 自带中文/英文语音，点击 🔊 即可播放；如无声请确认媒体音量已打开。
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <span className="t-emoji">🐣</span> 关于
        </div>
        <div className="page-sub">
          之之早教台 v1.0 · 为 19 月龄爬行期宝宝定制 · 五大模块每日自动更新 · 每周主题自动轮换 · 数据保存在本机
        </div>
      </div>
    </div>
  );
}
