// 一键部署：构建 + 推送到 gh-pages（GitHub Pages）
import { execSync } from 'node:child_process';
import { existsSync, rmSync, cpSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

function run(cmd) {
  console.log('>', cmd);
  execSync(cmd, { stdio: 'inherit', cwd: ROOT });
}

// 1. 构建
run('npm run build');
if (!existsSync(DIST)) throw new Error('构建失败：dist 不存在');

// 2. 确认 gh 已登录并获取账号名
const login = execSync('gh api user --jq .login', { encoding: 'utf8' }).trim();
console.log('登录账号:', login);
const remote = `git@github.com:${login}/zhizhi-early-edu.git`;

// 3. 确保 main 分支已存在（首次部署时推送源码）
try {
  execSync('git rev-parse --verify main', { stdio: 'pipe', cwd: ROOT });
} catch {
  run('git init -b main');
  run('git add -A');
  run('git -c user.name="zhizhi-deploy" -c user.email="deploy@local" commit -m "zhizhi-early-edu: 之之早教台源码"');
  try { execSync(`git remote add origin ${remote}`, { stdio: 'pipe', cwd: ROOT }); } catch {}
  run('git push -u origin main');
  // 创建空 gh-pages 分支
  execSync('git checkout --orphan gh-pages', { cwd: ROOT });
  run('git rm -rf . >/dev/null 2>&1 || true');
  run('git -c user.name="zhizhi-deploy" -c user.email="deploy@local" commit --allow-empty -m "gh-pages init"');
  run('git push -u origin gh-pages');
  run('git checkout main');
}

// 4. 用临时 worktree 把 dist 内容推到 gh-pages
const WT = join(ROOT, '.gh-pages-worktree');
rmSync(WT, { recursive: true, force: true });
try { run('git worktree remove --force .gh-pages-worktree >/dev/null 2>&1 || true'); } catch {}
run('git fetch origin gh-pages');
run('git worktree add --detach .gh-pages-worktree origin/gh-pages');
// 清空旧文件（保留 .git）
for (const f of execSync('ls -A .gh-pages-worktree', { encoding: 'utf8' }).split('\n').filter(Boolean)) {
  rmSync(join(WT, f), { recursive: true, force: true });
}
cpSync(DIST, WT, { recursive: true });
execSync('touch .nojekyll', { cwd: WT });
run('git -C .gh-pages-worktree add -A');
run('git -C .gh-pages-worktree -c user.name="zhizhi-deploy" -c user.email="deploy@local" commit -m "deploy: ' + new Date().toISOString().slice(0, 16) + '"');
run('git -C .gh-pages-worktree push origin HEAD:gh-pages');
run('git worktree remove --force .gh-pages-worktree');

// 5. 开启 GitHub Pages
console.log('> 开启 GitHub Pages...');
execSync(
  `gh api --method POST repos/${login}/zhizhi-early-edu/pages -f "source[branch]=gh-pages" -f "source[path]=/" >/dev/null 2>&1 || true`,
  { stdio: 'pipe' }
);
console.log('\n✅ 部署完成！几分钟后访问: https://' + login + '.github.io/zhizhi-early-edu/');
