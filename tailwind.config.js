/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#00BD4F",
        "custom-primary": "#00ED64",
        "primary-2": "#24FF7F",
        "primary-3": "#5CFFA0",
        "primary-4": "#5CFFA0",
        "primary-hover": "#12E1B9",
        "secondary-dark": "#171E3A",
        "custom-secondary": "#1D2549",
        "secondary-2": "#344383",
        "secondary-3": "#5063B9",
        "secondary-4": "#8A97D1",
      },
    },
    fontSize: {
      paragraph: `16px;`,
      h1: `32.4px;`,
      h2: `28.8px;`,
      h3: `25.6px;`,
      h4: `22.8px;`,
      h5: `20.3px;`,
      h6: `18px;`,
      small: `14.2px;`,
    },
    fontFamily: {
      aurora: ["aurora"],
      author: ["author-light"],
      authorRegular: ["author-regular"],
      clashDisplayLight: ["clash-display-light"],
      clashDisplayMedium: ["clash-display-medium"],
      clashDisplaySemibold: ["clash-display-semibold"],
    },
  },
  plugins: [],
};
