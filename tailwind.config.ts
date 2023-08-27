import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["FLF", "sans-serif"],
    },
    colors: {
      blue: {
        light: "#9cd3be",
        dark: "#7eac91",
      },
      green: {
        light: "#c8e3b3",
        olive: "#d7df22",
      },
      peach: {
        light: "#fed8b8",
      },
      offblack: "#191919",
      offwhite: "#f5f6f6",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {},
} satisfies Config;
