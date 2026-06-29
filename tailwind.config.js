/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F4',
        blush: {
          50: '#FCF3F4',
          100: '#F8E4E6',
          200: '#F2DDD4',
          300: '#E8B8BF',
          400: '#D88C9A',
          500: '#C46E7E',
          600: '#A85363',
        },
        graphite: '#3D3033',
        gold: '#C9A35D',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        organic: '2rem 0.5rem 2rem 0.5rem',
      },
    },
  },
  plugins: [],
}
