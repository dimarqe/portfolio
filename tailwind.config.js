/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:           '#0f172a',
        surface:      '#1e293b',
        'surface-2':  '#0f172a',
        border:       '#1e293b',
        'border-2':   '#334155',
        accent:       '#2dd4bf',
        'accent-dim': '#0d9488',
        'accent-2':   '#818cf8',
        primary:      '#e2e8f0',
        muted:        '#94a3b8',
        'muted-2':    '#64748b',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Manrope', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
