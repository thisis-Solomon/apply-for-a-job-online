/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-mobile": "url(/images/bg-header-desktop.svg)",
      },
      colors: {
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "light-rayish-cyan--background": "hsl(180, 52%, 96%)",
        "light-grayish-cyan--filter-tablets": "hsl(180, 31%, 95%)",
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
