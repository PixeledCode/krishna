/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "var(--font-display)",
        lato: "var(--font-lato)",
        body: "var(--font-body)",
      },
      lineHeight: {
        display: "120%",
      },
      colors: {
        primary: "var(--color-primary)",
        bg: "var(--color-bg)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        text: "var(--color-text)",
        "text-on-bg": "var(--color-text-on-bg)",
      },
      maxWidth: {
        240: "992px",
      },
    },
    container: {
      center: true,
      padding: "16px",
      screens: {
        xl: "1312px",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "auto-fill": (value: string) => ({
            gridTemplateColumns: `repeat(auto-fill, minmax(min(${value}, 100%), 1fr))`,
          }),
          "auto-fit": (value: string) => ({
            gridTemplateColumns: `repeat(auto-fit, minmax(min(${value}, 100%), 1fr))`,
          }),
        },
        {
          values: theme("width", {}),
        }
      );
    }),
  ],
};
export default config;
