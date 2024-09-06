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
        'temp-header-image': "url('/src/assets/ct-8.jpg')",
        'cv-header-image': "url('/src/assets/cv-header.jpg')",
        'temp-cv-header-image': "url('/src/assets/mh1.jpg')",
        'ob-header-image': "url('/src/assets/ob-header.jpg')",
        'ol-header-image': "url('/src/assets/ol-header.jpg')",
        'e-header-image': "url('/src/assets/e-header.jpg')",
        'm-header-image': "url('/src/assets/m-header.jpg')",
      },
      fontFamily: { 
        "suse": ["SUSE", 'system-ui'] 
    },
    boxShadow: {
      'custom': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
)

