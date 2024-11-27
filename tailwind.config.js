/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT( {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem', // 512px
        '144': '36rem', // 576px
        '160': '40rem', // 640px
        '192': '48rem', // 768px
        '256': '64rem', // 1024px
      },
      height: {
        '128': '32rem', // 512px
        '144': '36rem', // 576px
        '160': '40rem', // 640px
        '192': '48rem', // 768px
        '256': '64rem', // 1024px
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
});