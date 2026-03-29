/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        arpanet: {
          bg: '#0a192f',
          accent: '#64ffda',
          text: '#8892b0',
        },
        dotcom: {
          bg: '#fafafa',
          accent: '#ff6b6b',
          blue: '#4facfe',
          yellow: '#f6d365',
          text: '#222222',
        },
        social: {
          bg: '#eef2f5',
          accent: '#1da1f2',
          blue: '#1877f2',
          text: '#1c1e21',
        },
        web3: {
          bg: '#050505',
          accent: '#b465da',
          cyan: '#00f2fe',
          text: '#e2e8f0',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
          '50%': { opacity: .5, filter: 'brightness(1.5)' },
        }
      },
    },
  },
  plugins: [],
}
