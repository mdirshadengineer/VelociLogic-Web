import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'src/__e2e__',
  testMatch: '**/*.e2e-spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  timeout: 30000,
  use: {
    headless: process.env.CI ? true : false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    navigationTimeout: 20000,
    baseURL: 'http://localhost:3000', // Adjust based on your dev server
    trace: 'on-first-retry', // Collect trace for debugging
    video: 'retain-on-failure', // Record video on failure
    screenshot: 'only-on-failure', // Take screenshots on failure
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
