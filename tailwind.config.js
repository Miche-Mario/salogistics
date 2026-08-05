/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E0E9F5",
          100: "#B3C9E8",
          200: "#80A3D4",
          300: "#4D7DC0",
          400: "#1A57AC",
          500: "#0047AB",
          600: "#003A8F",
          700: "#002D73",
          800: "#002057",
          900: "#00133B",
        },
        brand: {
          blue: "#0047AB",
          blueHover: "#003A8F",
          blueSoft: "#E0E9F5",
          light: "#F8FAFB",
          dark: "#1A1D21",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
