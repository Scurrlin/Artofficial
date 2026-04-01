import { test, expect } from '@playwright/test';

test('user can generate an image with a mocked response', async ({ page }) => {
  const mockBase64 = 'mockBase64ImageData';

  await page.route('**/api/v1/image', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ photo: mockBase64 }),
    });
  });

  // Catch-all for other backend requests so they don't hang
  await page.route('**/api/v1/**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ data: [] }),
    });
  });

  await page.goto('/create-post');

  await page.getByPlaceholder(/enter your prompt/i).fill('A glowing owl');
  await page.getByRole('button', { name: /^generate$/i }).click();

  await expect(page.getByAltText('A glowing owl')).toHaveAttribute(
    'src',
    `data:image/png;base64,${mockBase64}`,
  );
});
