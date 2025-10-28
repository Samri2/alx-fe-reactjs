// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan all JS/TS/JSX/TSX files in src
    './public/index.html'          // Include the main HTML file
  ],
  darkMode: false, // or 'media' / 'class' if needed
  theme: {
    extend: {},
  },
  plugins: [],
};
