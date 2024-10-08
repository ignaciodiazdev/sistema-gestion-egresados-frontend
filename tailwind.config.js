/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#1C2434",
        body: "#F1F5F9",
        grayDark: "#333a48",
        primary: "#3C50E0",
        secondary: "#10B981",
        third: "#E90066",
      },
      textColor: {
        bodyDark: "#DEE4EE",
        bodyDark2: "#8A99AF",
        black: "#1C2434",
        black2: "#64748B",
        primary: "#3C50E0",
        required: "#EF4444",
        third: "#E90066",
      },
      borderColor: {
        primary: "#e2e8f0",
        third: "#E90066",
        // primary: "#3C50E0",
      },
    },
  },
  plugins: [],
};
