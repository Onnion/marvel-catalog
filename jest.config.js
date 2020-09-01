// jest.config.js
const { defaults } = require('jest-config');
module.exports = {
    collectCoverageFrom: ["src/__tests__/*.test.tsx"],
    moduleFileExtensions: ["tsx"],
    coverageReporters: ["lcov"],
    collectCoverage: true,
    moduleFileExtensions: ['tsx'],
};