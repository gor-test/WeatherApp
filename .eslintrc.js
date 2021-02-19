module.exports = {
  root: true,
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': ['error', { functions: false }],
    'import/prefer-default-export': 'off',
  },
};
