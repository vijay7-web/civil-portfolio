module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(),
    require('autoprefixer')(),
  ]
}
// module.exports = {
//   plugins: [
//     require('tailwindcss'), // Make sure you're using 'tailwindcss' here, not '@tailwindcss/postcss'
//     require('autoprefixer'),
//   ],
// };