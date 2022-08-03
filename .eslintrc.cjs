module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    semi: ['error', 'never'],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': ['off'],
    'no-plusplus': 'off',
    'react/jsx-filename-extension': [1,
      {
        extensions: [
          '.tsx',
        ],
      },
    ],
  },
}
