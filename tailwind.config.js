/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        blurReveal: {
          '0%': { filter: 'blur(20px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' }
        }
      },
      animation: {
        slideDown: 'slideDown 1s ease-out',
        blurReveal: 'blurReveal 1.3s ease-out forwards'
      }
    }
  },
  plugins: [],
}