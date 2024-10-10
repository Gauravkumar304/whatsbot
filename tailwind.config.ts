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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // sans: ['"sans-serif"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },

      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.1' },
          '50%': { transform: 'translateY(10px) translateX(10px)', opacity: '0.5' },
          '100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.1' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite', // Custom animation with smooth timing
      },
      
    },
  },
  plugins: [],
};
export default config;
