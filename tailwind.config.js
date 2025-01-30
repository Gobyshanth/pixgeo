/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '1999': '1999',
      },
      
      blur: {
        'custom': '349.63px', // Define a custom blur value
      },

      colors: {
        'icon-text': '#565656',
        customGray: 'rgb(86 86 86 / var(--tw-text-opacity, 1))',
        black12: 'rgba(0, 0, 0, 0.12)',
        black24: 'rgba(0, 0, 0, 0.24)',
        black35: 'rgba(0, 0, 0, 0.35)',
        black:'#000',
        blue:'rgba(28, 0, 207, 0.12)',
        purple:'#E959D8'
      },
      backgroundImage: {
       'custom-gradient': 'linear-gradient(to top left, rgba(90, 4, 81, 0.31),  rgba(90, 4, 81, 0.31), rgba(28, 0, 207, 0.29))',
       'custom-start': 'linear-gradient(to top left, rgba(28, 0, 207, 0.12), #000, rgba(90, 4, 82, 0.12))',
       'custom-end': 'linear-gradient(to bottom left, rgba(28, 0, 207, 0.12), #000, rgba(90, 4, 82, 0.12))',
       'custom-why': 'linear-gradient(to top left, rgba(28, 0, 207, 0.31), rgba(0, 0, 0, 0), rgba(90, 4, 82, 0.12))',
       'custom-mstart': 'linear-gradient(to top left, #6736C1 ,#0005E9)',
       'custom-mdend': 'linear-gradient(to top right, #0005E9, #6736C1)',
       'custom-mdwhy': 'linear-gradient(to bottom left, #0005E9, #6736C1)',
      },
    },
    fontFamily: {
      courier: ['Courier New', 'Courier', 'monospace'], // Add Courier font family
      roboto:['Roboto'],
     
    }
  },
  plugins: [],
}

