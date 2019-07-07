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
  },
};
