// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier', // 👈 Ye sabse last me hi hona chahiye
  ],
  plugins: ['react', 'react-native', 'import'],
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // ❌ <Text> ke andar directly string likhne pe error
    // 'react-native/no-raw-text': ['error', { skip: ['Text'] }]
    'react-native/no-raw-text': 'error',

    // ⚠️ Inline style likhne par warning
    // 'react-native/no-inline-styles': 'warn',
    'react-native/no-inline-styles': 'off', // currently off

    // ❌ Unused styles likhne pe error
    'react-native/no-unused-styles': 'error',

    // ⚠️ Platform-specific file splitting (e.g., Button.ios.js)
    'react-native/split-platform-components': 'warn',

    // ❌ Agar variable declare karke use nahi hua
    'no-unused-vars': 'error',

    // ❌ Undefined variable use kiya toh error
    'no-undef': 'error',

    // ⚠️ Dev me allowed, production me console hata dega
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // ✅ PropTypes ka use mandatory nahi hai (TypeScript ya choti apps ke liye helpful)
    'react/prop-types': 'off',

    // ❌ Disable import/order errors like spacing issues between imports
    'import/order': 'off',

    // ✅ JSX me bina zarurat curly braces mat lagao
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'no-unused-expressions': 'error',
    // 'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react-native/no-color-literals': 'off',
    'react-native/sort-styles':'off',
    'no-unescaped-entities' :'off'

    // ✅ List render karte waqt har child ko unique "key" dena zaroori hai
    // Agar key nahi di toh ESLint error dega (ye tumhare team ko visible hoga)
    'react/jsx-key': 'error',
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['react-native'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'], // ✅ This line is crucial
      },
    },
  },
//   'react-native/sort-styles': [
//   'error',
//   'asc',
//   { ignoreClassNames: false, ignoreStyleProperties: false },
// ],
};
