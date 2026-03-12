/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:           '#050508',
        surface:      '#0d0d14',
        'surface-2':  '#141420',
        border:       '#1e1e2e',
        'border-2':   '#2a2a3e',
        accent:       '#22d3ee',
        'accent-dim': '#0e7490',
        'accent-2':   '#818cf8',
        primary:      '#e2e8f0',
        muted:        '#64748b',
        'muted-2':    '#475569',
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
