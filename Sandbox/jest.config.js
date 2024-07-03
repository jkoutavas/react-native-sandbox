// Moved jest config into separate file because of known issue https://github.com/facebook/jest/issues/12889
module.exports = {
  moduleDirectories: ['node_modules', __dirname],
  preset: 'react-native',
  transformIgnorePatterns: ['/node_modules/(?!react-native)/.+', 'jest-runner'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  transform: {
    '\\.ts?$': 'ts-jest',
    '\\.jsx?$': 'babel-jest',
  },

  testPathIgnorePatterns: ['\\.snap$', 'e2e', '<rootDir>/node_modules/'],
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/**/*.d.ts',
    '!src/**/*.tsx',
    '!src/**/*.jsx',
    '!src/**/__stubs__/*.ts',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  cacheDirectory: '.jest/cache',
  setupFiles: ['./jest.setup.js'],
};
