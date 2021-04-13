const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname),
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  // moduleNameMapper: {
  //   '@/(.*)$': '<rootDir>/src/components/$1'
  // },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // testMatch: ['<rootDir>/tests/unit/*.spec.ts?(x)'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.(t|j)sx?$': 'ts-jest'
  }
}
