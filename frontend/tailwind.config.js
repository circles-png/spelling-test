/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{tsx,ts}'
  ],
  plugins: [],
  theme  : { extend: { fontFamily: { sans: 'MartianMono' } } }
}
