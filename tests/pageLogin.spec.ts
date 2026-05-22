import { test, expect } from '@playwright/test'



test('get started link', async ({ page }) => {
   await page.goto('https://www.automationexercise.com')
  
  // await page.getByRole('link', { name: ' Signup / Login' }).click()
  // await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('sherwin@gmail.com')
  // await page.getByRole('textbox', { name: 'Password' }).fill('P@ssw0rd')
  // await page.getByRole('button', { name: 'Login' }).click()
  // const Loggedinuser = page.locator('#header')
  // await expect(Loggedinuser).toContainText('Sherwin')


  await page.getByText('Add to cart').first().click()
  //await page.getByText('Add to cart').nth(3).click()
 
 await page.getByRole('link', { name: 'View Cart' }).click()
  //await page.getByRole('listitem').filter({ hasText: 'Cart' }).click()
  
  await page.getByText('Proceed To Checkout').click()
  await page.getByRole('link', { name: 'Place Order' }).click()
  await page.locator('input[name="name_on_card"]').fill('Sherwin')
  await page.locator('input[name="card_number"]').fill('123456789123456')
  await page.getByRole('textbox', { name: 'ex.' }).fill('123')
  await page.getByRole('textbox', { name: 'MM' }).fill('12')
  await page.getByRole('textbox', { name: 'YYYY' }).fill('2026')
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click()

  await page.waitForTimeout(5000)





})
