import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User should login successfully to SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // The Action (Driving the Browser)
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Asserts (The Checkpoints)
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('User should see error message with invalid credentials', async ({ page }) => {
const loginPage = new LoginPage(page);

await loginPage.goto();

//Wrong password 
await loginPage.login('standard_user', 'wrong_password');

//Verifies that error message is visible 
await expect(loginPage.errorMessage).toBeVisible();
await expect(loginPage.errorMessage).toContainText('do not match', { ignoreCase: true });
});