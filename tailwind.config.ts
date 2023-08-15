import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["FLF", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {},
} satisfies Config;
