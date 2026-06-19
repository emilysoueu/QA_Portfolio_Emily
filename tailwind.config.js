/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#FBF8FC',
        surface: '#FFFFFF',
        surface2: '#F7F1FA',
        line: '#ECE2F2',
        line2: '#E1D2EC',
        ink: '#2E2A45',
        muted: '#6E6680',
        faint: '#9C93AD',
        accent: {
          DEFAULT: '#9B85D6',
          dim: '#7C63B8',
          glow: '#8A6FCB',
        },
        pink: {
          DEFAULT: '#F0A8C9',
          bg: 'rgba(240, 168, 201, 0.16)',
        },
        sky: {
          DEFAULT: '#9DC4EC',
          bg: 'rgba(157, 196, 236, 0.18)',
        },
        sun: {
          DEFAULT: '#F0C45E',
          bg: 'rgba(240, 196, 94, 0.18)',
        },
        pass: {
          DEFAULT: '#4FAE82',
          dim: '#3C8C68',
          bg: 'rgba(79, 174, 130, 0.12)',
        },
        warn: {
          DEFAULT: '#D9A23B',
          bg: 'rgba(217, 162, 59, 0.14)',
        },
        fail: {
          DEFAULT: '#DD6E7C',
          bg: 'rgba(221, 110, 124, 0.12)',
        },
        ink2: '#1C1830',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'mesh-pastel':
          'radial-gradient(38% 55% at 12% 18%, rgba(240,168,201,0.55), transparent 60%), radial-gradient(42% 50% at 88% 12%, rgba(157,196,236,0.5), transparent 60%), radial-gradient(48% 55% at 50% 95%, rgba(155,133,214,0.38), transparent 60%), radial-gradient(28% 38% at 92% 85%, rgba(240,196,94,0.32), transparent 60%)',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.7) inset, 0 14px 28px -18px rgba(123,99,184,0.28)',
        glow: '0 0 0 1px rgba(155,133,214,0.4), 0 10px 24px -8px rgba(155,133,214,0.45)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
