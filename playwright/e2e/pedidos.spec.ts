import { test, expect } from '@playwright/test';

test('deve consultar um pedido aprovado', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');

  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading', { name: 'Consultar Pedido' })).toBeVisible();

  await page.getByTestId('search-order-id').click();
  await page.getByTestId('search-order-id').fill('VLO-RC0PLJ');
  await page.getByTestId('search-order-button').click();

  await expect(page.getByTestId('order-result-id')).toBeVisible();
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-RC0PLJ');
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');

});