import { Page, Locator, expect } from '@playwright/test'

export default class CheckoutPage {
readonly page : Page
readonly deliveryAddress : Locator
readonly billingAddress: Locator


constructor(page: Page) {

this.page = page

  this.deliveryAddress = this.page.locator('#address_delivery')
  this.billingAddress = this.page.locator('#address_invoice')
  }

  async verifyAddresses() {
    await expect(this.deliveryAddress).toContainText('Mr. Sherwin Vishaal')
    await expect(this.deliveryAddress).toContainText('23 Springfield Ave')
    await expect(this.deliveryAddress).toContainText('India')

    await expect(this.billingAddress).toContainText('Mr. Sherwin Vishaal')
    await expect(this.billingAddress).toContainText('23 Springfield Ave')
    await expect(this.billingAddress).toContainText('India')
  }
}