import {test as setup,expect} from '@playwright/test'
import {STORAGE_STATE} from '../playwright.config'



 setup('Login Test', async ({page}) => {
        
        // await page.goto('https://www.demoblaze.com')
        // await page.getByRole('link',{name: 'Log in'}).click()
        // const username = page.locator('#loginusername')
        // await username.fill('Sherwin')
        // const password = page.locator('#loginpassword')
        // await password.fill('Password')
        // await page.getByRole('button',{name: 'Log in'}).click()
        // const Loggedinuser = page.locator('#nameofuser')
        // await expect(Loggedinuser).toHaveText('Welcome Sherwin')
        // await page.context().storageState({path:STORAGE_STATE})

        await page.goto('https://www.automationexercise.com')
  
  await page.getByRole('link', { name: ' Signup / Login' }).click()
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('sherwin@gmail.com')
  await page.getByRole('textbox', { name: 'Password' }).fill('P@ssw0rd')
  await page.getByRole('button', { name: 'Login' }).click()
  const Loggedinuser = page.locator('#header')
  await expect(Loggedinuser).toContainText('Sherwin')
  await page.context().storageState({path:STORAGE_STATE})
    })