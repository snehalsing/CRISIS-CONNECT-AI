/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brand: {
        clay: '#BE8F87',
        blush: '#DEB9AD',
        sand: '#DEC9BF',
        coolGray: '#B5B7BB',
        sageGray: '#9BADAF',
      },
      semantic: {
        critical: '#EF4444',
        high: '#F97316',
        medium: '#F59E0B',
        safe: '#22C55E',
      },
      neutral: {
        primary: '#17191C',
        secondary: '#5F6368',
        surface: '#FFFFFF',
        graphite: '#16181D',
      },
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        editorial: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
}
