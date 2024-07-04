module.exports = {
    plugins: [
      'postcss-preset-env',
      require('tailwindcss'),
      require('postcss-import'),
      process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
      process.env.NODE_ENV === 'production' ? require('cssnano') : null,
      require('@fullhuman/postcss-purgecss')({
        content: [
          './build/**/*.{js,html}',
          './src/**/*.{ts,tsx,html}',
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      })
    ],
  };
  