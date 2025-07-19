/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vitest/config" />
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import reactSwc from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    reactSwc({
      jsxImportSource: 'react',
    }),
    tsconfigPaths(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**\/*.{test,spec}.?(c|m)[jt]s?(x)'],
    browser: {
      headless: true,
      provider: 'playwright',
      instances: [{ browser: 'chromium' }],
    },
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: [
        'src/**/*.{ts,tsx}',
        'src/__tests__/**/*.spec.{ts,tsx}',
        'src/__e2e__/**/*.e2e-spec.{ts,tsx}',
        'src/__integrations__/**/*.test.{ts,tsx}',
      ],
      exclude: ['src/**/*.stories.{ts,tsx}'],
    },
    projects: [
      {
        test: {
          name: 'app',
          include: ['src/__tests__/*.spec.{ts,tsx}'],
          exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/.{idea,git,cache,output,temp}/**',
          ],
          environment: 'jsdom',
          setupFiles: ['./vitest.setup.ts'],
        },
      },
      {
        test: {
          name: 'storybook',
          include: [], // Storybook uses .storybook/main.ts stories field
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
      },
    ],
  },
});
