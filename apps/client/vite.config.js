import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import tailwindcssPostcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: 'src/pages', // 페이지들이 위치할 폴더
      extensions: ['jsx', 'js'], // 지원할 파일 확장자
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcssPostcss({
          config: path.resolve(__dirname, '../../packages/ui/tailwind.config.js'),
        }),
        autoprefixer,
      ],
    },
  },
  alias: {
    '@': path.resolve(__dirname, './src'),           // 클라이언트 src
    '@tt/ui': path.resolve(__dirname, '../../packages/ui/src'), // UI 패키지
  },
})
