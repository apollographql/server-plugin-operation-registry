// To be used / extended by all projects in the monorepo.
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['src'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  testRegex: '/__tests__/.*\\.test\\.(js|ts)$',
  verbose: true,
  setupFiles: ['<rootDir>/src/__tests__/jestSetup.ts'],
};

export default config;
