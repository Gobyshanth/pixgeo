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
      },
    },
    fontFamily: {
      courier: ['Courier New', 'Courier', 'monospace'], // Add Courier font family
     
    }
  },
  plugins: [],
}

