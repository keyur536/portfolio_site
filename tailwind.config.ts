/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary':    '#0A0A0B',
        'bg-secondary':  '#111113',
        'bg-tertiary':   '#17181B',
        'border-subtle': '#232326',
        'text-primary':  '#F2F2F0',
        'text-secondary':'#A1A1A6',
        'text-muted':    '#6B6B70',
        'accent':        '#7CFF6B',
        'accent-dim':    '#4E9A45',
      },
      fontFamily: {
        sans:  ['var(--font-inter)', 'sans-serif'],
        head:  ['var(--font-space-grotesk)', 'sans-serif'],
        mono:  ['var(--font-jetbrains-mono)', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'blink':   'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
