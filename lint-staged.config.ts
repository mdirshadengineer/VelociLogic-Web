import type { Configuration } from 'lint-staged';

const config: Configuration = {
  // Run ESLint on staged JavaScript and TypeScript files
  '*.{js,jsx,ts,tsx,mjs,cjs,mts}': filenames => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
    `npm run test:app`,
    `npm run test:e2e`,
  ],

  '*.stories.{js,jsx,ts,tsx,mjs,cjs,mts}': filenames => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
    `npm run test:storybook`,
  ],

  '*.{json,md,yml,yaml,css,scss}': filenames => [
    `prettier --write ${filenames.join(' ')}`,
  ],

  '.storybook/**/*.{ts,tsx,js,jsx}': filenames => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  'playwright.config.{ts,js}': filenames => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  'vitest.config.{ts,js}': filenames => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  '*.html': filenames => [`prettier --write ${filenames.join(' ')}`],
};

export default config;
