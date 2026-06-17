import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#151515",
        graphite: "#2a2a28",
        paper: "#f8f8f6",
        porcelain: "#ffffff",
        mist: "#eeeeeb",
        line: "#deded9",
        violet: "rgb(208, 255, 113)",
        slate: "#9b9c98",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        float: "0 18px 48px rgba(20, 20, 20, 0.10)",
        card: "0 14px 40px rgba(20, 20, 20, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
