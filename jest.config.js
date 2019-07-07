module.exports = {
    preset: "react-native",
    collectCoverage: true,
    moduleDirectories: ["node_modules", "src"],
    transform: {
      "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
    },
    setupFiles: ["<rootDir>/jest/setup.js"],
    transformIgnorePatterns: ["node_modules/(?!(jest-)?react-native)"],
    coveragePathIgnorePatterns: ["/node_modules/", "/jest"],
    testResultsProcessor: "jest-sonar-reporter",
    coverageThreshold: {
      "global": {
        "statements": 80
      }
    },
    collectCoverageFrom: [
      "**/src/**/*.{js,jsx}",
      "!**/src/**/style.js",
      "!**/src/**/index.js",
      "!**/src/theme/**",
      "!**/android/**",
      "!**/ios/**",
      "!**/node_modules/**",
      "!**/scripts/**",
      "!**/__test__/**"
    ],
    verbose: true,
  };
  