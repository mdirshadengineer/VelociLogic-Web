import { expect, test } from '@playwright/test';

test('Home page has welcome heading', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await expect(
    page.getByRole('heading', { level: 1, name: /welcome/i })
  ).toBeVisible();
});
