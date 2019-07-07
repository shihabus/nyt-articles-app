module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      classes: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',"prettier"
  ],
  rules: {
    "react/jsx-filename-extension":0,
    "import/prefer-default-export":0,
    "import/no-cycle":0,
    "react/require-default-props":0,
    "no-shadow":0
}}
