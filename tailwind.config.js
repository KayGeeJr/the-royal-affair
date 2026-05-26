/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-black': '#0a0a0a',
        'royal-cream': '#F5F0E8',
        'royal-gold': '#C9A84C',
        'royal-gold-light': '#E8C97A',
        'royal-gold-dark': '#A07C28',
        'royal-burgundy': '#6B1E2E',
        'royal-burgundy-light': '#8B2A42',
        'royal-burgundy-dark': '#4A1420',
        'royal-muted': '#7A7268',
        'royal-border': '#E0D8CC',
        'royal-dark-border': '#2a2a2a',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['Courier Prime', 'monospace'],
      },
    },
  },
  plugins: [],
}
