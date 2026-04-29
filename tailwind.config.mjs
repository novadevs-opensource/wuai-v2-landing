/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#232323',
          light: '#71717A',
          dark: '#1a1a1a',
        },
        purple: {
          50: '#f3eafc',
          100: '#e7d5f9',
          200: '#cfacf3',
          300: '#b783ed',
          400: '#9f5ae7',
          500: '#6E1FCE',
          600: '#5819a5',
          700: '#42137c',
          800: '#2c0c53',
          900: '#16062a',
        },
        blue: {
          50: '#f0fdff',
          100: '#e1fbff',
          200: '#c3f7ff',
          300: '#a3f3ff',
          400: '#82EAFF',
          500: '#68bbcc',
          600: '#4e8c99',
          700: '#345d66',
          800: '#1a2f33',
          900: '#0d1719',
        },
        green: {
          50: '#f4fff9',
          100: '#e9fff3',
          200: '#d3ffe7',
          300: '#bcffdb',
          400: '#9BFFD4',
          500: '#7cccaa',
          600: '#5d997f',
          700: '#3e6655',
          800: '#1f332a',
          900: '#0f1915',
        },
        primary: {
          '500': '#5335FC'
        },
        secondary: {
          '500': '#CEFC35'
        }
      },
      gradients: {
        'primary': 'linear-gradient(90deg, #6E1FCE 0%, #82EAFF 100%)',
        'secondary': 'linear-gradient(90deg, #82EAFF 0%, #9BFFD4 100%)',
      },
      fontFamily: {
        "anek-latin": ['var(--font-anek-latin)', 'sans-serif'],
        "space": ['var(--font-space-grotesk)', 'sans-serif'],
        "anon": ['var(--font-anonymous-pro)', 'serif'],
        "afacad": ['var(--font-afacad)', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const gradients = theme('gradients', {})
      const utilities = Object.entries(gradients).reduce((acc, [name, value]) => {
        return {
          ...acc,
          [`.bg-gradient-${name}`]: {
            backgroundImage: value,
          },
        }
      }, {})

      addUtilities(utilities)
    }
  ],
}
