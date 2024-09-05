const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/src/assets/ct-4.jpg')",
        'cv-header-image': "url('/src/assets/cv-header.jpg')",
        'ob-header-image': "url('/src/assets/ob-header.jpg')",
      },
      fontFamily: { 
        "suse": ["SUSE", 'system-ui'] 
    },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
)

