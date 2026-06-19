/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0A0E14',
        surface: '#11161F',
        surface2: '#161C28',
        line: '#222A39',
        line2: '#2C3647',
        ink: '#E8ECF3',
        muted: '#8B97AC',
        faint: '#5C6880',
        accent: {
          DEFAULT: '#4C8DFF',
          dim: '#2F5FC4',
          glow: '#7FB0FF',
        },
        pass: {
          DEFAULT: '#36D399',
          dim: '#1F8F66',
          bg: 'rgba(54, 211, 153, 0.08)',
        },
        warn: {
          DEFAULT: '#F5B664',
          bg: 'rgba(245, 182, 100, 0.08)',
        },
        fail: {
          DEFAULT: '#F2545B',
          bg: 'rgba(242, 84, 91, 0.08)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(76, 141, 255, 0.15), transparent)',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 12px 30px -16px rgba(0,0,0,0.6)',
        glow: '0 0 0 1px rgba(76,141,255,0.4), 0 0 24px rgba(76,141,255,0.25)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scanline: 'scanline 3s linear infinite',
      },
    },
  },
  plugins: [],
};
