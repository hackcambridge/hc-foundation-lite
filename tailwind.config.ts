import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        // 'animate-logos': 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
    },
  },
  plugins: [],
}
export default config
