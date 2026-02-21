/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#00318b',
        },
        destructive: {
          DEFAULT: '#e6483d',
        },
        border: {
          normal: '#dee0e3',
        },
        text: {
          primary: '#14151a',
          secondary: 'rgba(13,17,38,0.7)',
          tertiary: 'rgba(13,17,38,0.4)',
          quaternary: 'rgba(10,15,41,0.25)',
        },
        background: {
          input: '#ffffff',
          disabled: '#e9eaec',
        }
      },
      borderRadius: {
        'xl': '12px',
        'lg': '10px',
        'xs': '4px',
      },
      spacing: {
        '2': '2px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
      },
      boxShadow: {
        'xs': '0px 1px 2px 0px rgba(20,21,26,0.05)',
      },
    },
  },
  plugins: [],
}
