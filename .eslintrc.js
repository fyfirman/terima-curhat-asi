module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'airbnb',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', 'react-native', 'prettier', 'jest'],
  rules: {
    'global-require': 0,
    'no-use-before-define': ['error', { variables: false }],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react/jsx-filename-extension': 0,
    'prettier/prettier': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        prop: 'ignore'
      }
    ]
  }
};
