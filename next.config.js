/** @type {import('next').NextConfig} */

// next.config.js
const withTM = require('next-transpile-modules')([
  '@algolia/autocomplete-core',
  // '@algolia/autocomplete-js',
  '@algolia/autocomplete-plugin-recent-searches',
  '@algolia/autocomplete-plugin-query-suggestions',
  '@algolia/autocomplete-preset-algolia',
  '@algolia/autocomplete-shared',
  '@algolia/autocomplete-theme-classic',
]) // pass the modules you would like to see transpiled

module.exports = {
  reactStrictMode: true,
}
module.exports = withTM({})
