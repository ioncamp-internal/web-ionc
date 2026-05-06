/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper:     '#FCFCFE',
        iris:      '#A361DD',
        'iris-deep': '#4D5BDA',
        ink:       '#1D03F1',
        'iris-light': '#A864D8',
        mustard:   '#F2C955',
      },
      fontFamily: {
        sans:    ['Noto Sans TC', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['Caveat', 'cursive'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
