/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        slideInLeft: 'slideInLeft 0.7s ease-out forwards',
        slideInRight: 'slideInRight 0.7s ease-out forwards'
      },
      transitionProperty: {
        'transform': 'transform',
        'opacity': 'opacity',
      },
      transitionDuration: {
        '700': '700ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}; 