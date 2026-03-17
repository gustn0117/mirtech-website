import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"', 'sans-serif'],
        figtree: ['"Figtree"', 'sans-serif'],
        noto: ['"Noto Sans KR"', 'sans-serif'],
      },
      colors: {
        'mir-orange': '#E8731A',
        'mir-dark': '#1a1a1a',
        'mir-gray': '#666666',
        'mir-light': '#f5f5f5',
      },
    },
  },
  plugins: [],
};

export default config;
