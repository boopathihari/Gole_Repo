/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  'node_modules/flowbite-react/**/*.{jsx,js,ts,tsx}',
  'node_modules/preline/dist/*.js'
],
  theme: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin') , require('preline/plugin') ],
}

// module.exports = {
//   content: [
//     // './src/**/*.{html,js}',
//       'node_modules/preline/dist/*.js',
//   ],
//   plugins: [
//     // require('@tailwindcss/forms'),
//       require('preline/plugin'),
//   ],
// }