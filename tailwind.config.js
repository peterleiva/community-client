const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("input-color", 'input[type="color"]');
    }),
  ],
};
