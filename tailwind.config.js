/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#eef4ff',
          100: '#dcebff',
          200: '#c0dcff',
          300: '#94c6ff',
          400: '#61a8ff',
          500: '#3b8aff',
          600: '#1869fc',
          700: '#1254e9',
          800: '#1544bd',
          900: '#173d94',
        },
        teal: {
          50: '#eefbfb',
          100: '#d5f6f6',
          200: '#aeeeef',
          300: '#76e0e3',
          400: '#39c8ce',
          500: '#19b1b9',
          600: '#128f9b',
          700: '#14727d',
          800: '#175c66',
          900: '#184c56',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};