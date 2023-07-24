/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'black': '#201F1F',
      'pink': '#CD6DEA',
      'purple': '#4651B6',
      'red': '#ED596E',
      'white': '#F1F1F1',
      'gray': '#434343'
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.625rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      colors: {
        'darkgray': '#333334'
      },
      fontFamily: {
        sans: ['var(--font-goldman)'],
        mono: ['var(--font-play)'],
      },
    },
  },
  plugins: [],
}