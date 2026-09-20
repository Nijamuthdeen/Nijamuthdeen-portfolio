/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        card: "#111111",
        primary: "#FF2D55",
        secondary: "#E50914",
        line: "#1F1F1F",
      },
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(255,45,85,0.45)",
        "glow-sm": "0 0 20px -6px rgba(255,45,85,0.5)",
      },
      backgroundImage: {
        "red-gradient": "linear-gradient(135deg, #FF2D55 0%, #E50914 100%)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(255,45,85,0.16), transparent 60%)",
      },
      keyframes: {
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floatY: "floatY 5s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
}

