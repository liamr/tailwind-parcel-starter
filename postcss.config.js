module.exports = {
  plugins: {
    tailwindcss: "./tailwind.config.js",
    "postcss-nested": {},
    "@fullhuman/postcss-purgecss": process.env.NODE_ENV === "production",
    autoprefixer: {}
  }
};
