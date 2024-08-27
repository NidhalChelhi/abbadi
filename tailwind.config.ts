import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19c1b6",
        secondary: "#fea439",
        tertiary: "#fe6788",
        accent: "#f7f9f2",
        dark: "#333333",
      },
      backgroundImage: {
        "banner-image": "url('/images/banner.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
