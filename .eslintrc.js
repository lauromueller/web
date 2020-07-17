module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    quotes: 'off',
    'jsx-a11y/accessible-emoji': 'off',
    '@typescript-eslint/quotes': 'off',
    'import/prefer-default-export': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
