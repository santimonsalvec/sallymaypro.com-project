tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "var(--text-primary)",
        muted: "var(--text-muted)",
        accent: "var(--accent)",
        glass: {
          fill: "var(--glass-fill)",
          stroke: "var(--glass-stroke)",
        },
      },
      fontFamily: {
        display: ["Prata", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        glass: "0 24px 60px color-mix(in oklab, var(--shadow) 34%, transparent)",
      },
      transitionTimingFunction: {
        expoout: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};
