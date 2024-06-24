module.exports = {
    plugins: [
      'postcss-preset-env',
      require('tailwindcss'),
      require('postcss-import'),
      require('autoprefixer'),
      require('cssnano'),
      require('@fullhuman/postcss-purgecss')({
        content: [
          './build/**/*.{ts,tsx,html}',
          './src/**/*.{ts,tsx,html}',
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      })
    ],
  };
  