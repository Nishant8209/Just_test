import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/mocks/fileMock.ts',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/mocks/fileMock.ts',
  },
};

export default config;
