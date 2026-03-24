![Playwright Tests](https://github.com/AylinVOO/Playwright-JS-DataDriven-Framework/actions/workflows/playwright.yml/badge.svg)

# SauceDemo E2E Automation Suite

Technical repository for an E2E automation suite focused on **Page Object Model (POM)** and **Data-Driven Testing (DDT)**.

## 🏗️ Architecture
The framework is structured to separate test logic from page locators:
* **`pages/`**: Includes `LoginPageV2.js`. Logic is centralized here to handle locators and UI interactions.
* **`tests/`**: Contains the test execution files.
* **`testData.json`**: Separates user credentials and expected outcomes.

## 💡 Implementation Details
* **Logic**: Using a `forEach` loop in the spec file to iterate through multiple user personas (standard, locked, glitch) defined in JSON.
* **Stability**: Implemented explicit waits to ensure the application state is ready before interaction.
* **Reports**: Built-in Playwright HTML reporting with screenshots on failure.

## 🛠️ Commands
* **Install**: `npm install`
* **Test**: `npx playwright test`
* **UI**: `npx playwright test --ui`
