/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      kaushan: ['Kaushan Script', 'serif'],
      courier: ['Courier New', 'Courier', 'monospace'], // Add Courier font family
    }
  },
  plugins: [],
}

