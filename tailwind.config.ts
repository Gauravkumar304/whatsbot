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
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)', opacity: '0' },
          '50%': { transform: 'translateY(10px)', opacity: '0.5' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        fadeLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': {  transform: 'translateY(100%)', opacity: '0' },
          '100%': {  transform: 'translateY(0)' , opacity: '1' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite', // Floating effect for continuous smooth animation
        'fade-left': 'fadeLeft 1s ease-out forwards', // Set 'forwards' to retain the final animation state
        'fade-right': 'fadeRight 1s ease-out forwards', // Same as above, to retain final state
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
