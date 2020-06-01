'use strict';

module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.js'],
  testMatch: ['**/*.test.js'],
  setupFiles: ['./test.config.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/mocks/fileMock.js',
  },
};
