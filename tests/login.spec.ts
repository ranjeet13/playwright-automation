import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { loginData } from '../fixtures/testData';

test('Verify Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate();

    await login.login(
        loginData.username,
        loginData.password
    );

    await login.verifyLogin();

});