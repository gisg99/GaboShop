/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gabo: 'linear-gradient(45deg, rgba(51,0,180,1) 0%, rgba(1,1,45,1) 25%, rgba(32,9,68,1) 75%, rgba(4,25,128,1) 100%);',
      },
    },
  },
  plugins: [],
}

