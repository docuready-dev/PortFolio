/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: {
          DEFAULT: '#F4F3EF',
          surface: 'rgba(255, 255, 255, 0.65)',
        },
        ink: {
          DEFAULT: '#111115',
          muted: '#686870',
        },
      },
      fontFamily: {
        sans: ['Delight', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        delight: ['Delight', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
