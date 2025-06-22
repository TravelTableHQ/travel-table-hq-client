import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: 'src/pages', // 페이지들이 위치할 폴더
      extensions: ['jsx', 'js'], // 지원할 파일 확장자
    }),
  ],
})
