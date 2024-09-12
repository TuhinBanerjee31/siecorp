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
        'card1-image': "url('/src/assets/heroImage/card1.jpg')",
        'card2-image': "url('/src/assets/heroImage/card2.jpg')",
        'card3-image': "url('/src/assets/heroImage/card3.jpg')",
        'card4-image': "url('/src/assets/heroImage/card4.jpg')",
        'header-image': "url('/src/assets/ct-4.jpg')",
        'temp-header-image': "url('/src/assets/ct-8.jpg')",
        'cv-header-image': "url('/src/assets/coreValueImages/cv-header.jpg')",
        'temp-cv-header-image': "url('/src/assets/mh1.jpg')",
        'ob-header-image': "url('/src/assets/ourBrandImages/ob-header.jpg')",
        'ol-header-image': "url('/src/assets/ol-header.jpg')",
        'e-header-image': "url('/src/assets/e-header.jpg')",
        'm-header-image': "url('/src/assets/m-header.jpg')",
        'i-header-image': "url('/src/assets/i-header.jpg')",
        'c-header-image': "url('/src/assets/c-header.jpg')",
        'p-header-image': "url('/src/assets/projectImages/p-header.jpg')",
        'cu-header-image': "url('/src/assets/cu-1.jpg')",
        'test-image': "url('/src/assets/ob2.png')",
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

