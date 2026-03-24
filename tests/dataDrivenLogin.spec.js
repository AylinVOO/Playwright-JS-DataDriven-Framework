import { test, expect } from '@playwright/test';
//const { LoginPage } = require('../pages/loginPage'); 
const { LoginPageV2 } = require('../pages/LoginPageV2'); 

const testData = require('./testData.json'); 

/**
 * @description DATA-DRIVEN SUITE
 */
for (const user of testData) 
{
    test(`Validation for User Role: ${user.desc}`, async ({ page }) => 
    {
        // The Action (Driving the Browser)
        //const loginPage = new LoginPage(page); 
        const loginPage = new LoginPageV2(page);

        await loginPage.goto();
        await loginPage.login(user.username, user.password); 
        console.log(await page.content());

        // Asserts (The Checkpoints)
        if (user.username === 'standard_user' || user.username === 'problem_user') 
        {
            await expect(page).toHaveURL(/.*inventory.html/);
            await loginPage.takeScreenshot(user.desc);
            console.log(`✅ ${user.desc} logged in successfully.`);
        } 
        else if (user.username === 'locked_out_user') 
        {
            await expect(loginPage.errorMessage).toBeVisible();
            await expect(loginPage.errorMessage).toContainText('locked out', { ignoreCase: true });
            await loginPage.takeScreenshot(user.desc);
            console.log(`🔒 ${user.desc} was correctly blocked.`);
        }
    });
}
