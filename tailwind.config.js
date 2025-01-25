/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'icon-padding': '40px',
      },
      colors: {
        'icon-color': '#565656',
        black12: 'rgba(0, 0, 0, 0.12)',
        black24: 'rgba(0, 0, 0, 0.24)',
        black35: 'rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
       'custom-gradient': 'linear-gradient(to top left, rgba(90, 4, 81, 0.31),  rgba(90, 4, 81, 0.31), rgba(28, 0, 207, 0.29))',
       'custom-start': 'linear-gradient(to top left, rgba(28, 0, 207, 0.12), #000, rgba(90, 4, 82, 0.12))',
       'custom-end': 'linear-gradient(to bottom left, rgba(28, 0, 207, 0.12), #000, rgba(90, 4, 82, 0.12))',
       'custom-why': 'linear-gradient(to top left, rgba(28, 0, 207, 0.31), rgba(0, 0, 0, 0), rgba(90, 4, 82, 0.12))',
      },
    },
    fontFamily: {
      courier: ['Courier New', 'Courier', 'monospace'], // Add Courier font family
      roboto:['Roboto'],
     
    }
  },
  plugins: [],
}

