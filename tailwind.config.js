/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        pearl: {
          50: '#FCFBF9',
          100: '#F3F0E9',
        },
        gold: {
          500: '#D4AF37', // Royal Gold
          600: '#AA8C2C',
        },
        makhanaGreen: {
          800: '#1E3F20', // Organic Deep Green
          900: '#112412',
        }
      },
    },
  },
  plugins: [],
}
