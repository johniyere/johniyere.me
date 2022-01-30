module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      './layouts/**/*.html',
      './content/**/*.md',
      './content/**/*.html',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        honey_yellow: '#FFB703',
        prussian_blue: '#023047',
      },
      fontFamily: {
        display: ['"Abril Fatface"', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
