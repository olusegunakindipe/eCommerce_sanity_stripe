const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        isDevelopment ? 'development' : 'production'
      ),
      'process.env': JSON.stringify(dotenv.parsed),
    }),
  ],
  rules: {
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
