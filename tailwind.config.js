/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1rem",
      },
      boxShadow: {
        card: "0 2px 10px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        flipNumber: {
          '0%': { 
            transform: 'rotateX(0deg)',
            opacity: 1 
          },
          '50%': { 
            transform: 'rotateX(90deg)',
            opacity: 0.2 
          },
          '100%': { 
            transform: 'rotateX(0deg)',
            opacity: 1 
          }
        }
      },
      animation: {
        'number-flip': 'flipNumber 0.4s ease-in-out'
      }
    },
  },
  plugins: [],
};
