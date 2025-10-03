module.exports = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
  ],
  tailwindConfig: './tailwind.config.js',
  importOrder: ['^react$', '^react-native$', '^[./]'],
  importOrderSeparation: false, // 👈 spacing between imports DISABLED
  importOrderSortSpecifiers: true,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  proseWrap: 'never',
  bracketSameLine: false,
};

