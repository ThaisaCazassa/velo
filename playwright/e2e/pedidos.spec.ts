import { test, expect } from '@playwright/test';

test('deve consultar um pedido aprovado', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');

  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-RC0PLJ');
  await page.getByRole('button', { name: 'Buscar Pedido' }).click();

  await expect(page.getByText('VLO-RC0PLJ')).toBeVisible();
  await expect(page.getByText('APROVADO')).toBeVisible();

});