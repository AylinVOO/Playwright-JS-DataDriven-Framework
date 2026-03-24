const { expect } = require('@playwright/test');
// Page Object (The Hardware)
class LoginPage 
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

  // Actions (The "How") 
  async goto() 
  {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(user, pass) 
  {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}

module.exports = 
{ 
    LoginPage 
};