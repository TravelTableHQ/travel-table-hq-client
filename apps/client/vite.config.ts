import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: 'src/pages', // 페이지들이 위치할 폴더
      extensions: ['ts', 'tsx'], // 지원할 파일 확장자 (ts, tsx로 변경)
      importMode: 'async', // 코드 스플리팅을 위해 비동기 import
      routeStyle: 'next', // 동적 라우트에 Next.js 스타일([bracket]) 적용
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 클라이언트 src
      '@tt/ui': path.resolve(__dirname, '../../packages/ui/src'), // UI 패키지
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
