import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// GitHub Pages 部署在 https://rachellee1117.github.io/zhizhi-early-edu/ 子路径下
export default defineConfig({
  base: '/zhizhi-early-edu/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/icon-192.png', 'icons/apple-touch-icon.png'],
      manifest: {
        name: '之之早教台',
        short_name: '之之',
        description: '之之的每日早教工作台：五大模块每日自动更新、每周主题轮换、发育观察记录',
        lang: 'zh-CN',
        start_url: '/zhizhi-early-edu/',
        scope: '/zhizhi-early-edu/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#FFF6EC',
        theme_color: '#FF8FAB',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      }
    })
  ]
});
