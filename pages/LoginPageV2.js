const {  expect, test } = require('@playwright/test');
// Page Object (The Hardware)
class LoginPageV2 
{
    constructor(page) 
    {
        this.page = page;
        // Locators (The "Where")
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async goto()
    {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user, pass)
    {
        // Safe login method that waits for the username input to be visible before interacting with it
        await this.usernameInput.waitFor({ state: 'visible', timeout: 5000 });

        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }
    
    //Screenshot function to capture the state of the page after login attempt
    async takeScreenshot(name)
    {
        const path = `screenshots/${name}.png`;
        await this.page.screenshot({ path:path, fullPage:true});

        console.log(`📸 Screenshot taken: ${path}`);

    }
}

module.exports = 
{
    LoginPageV2
};