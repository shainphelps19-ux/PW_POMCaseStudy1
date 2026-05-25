import {Page,Locator} from '@playwright/test'

export default class OrderConfirmationPage{
    readonly page : Page
    readonly confirmOrder : Locator
    readonly orderPlaced : Locator
    readonly invoice : Locator

    constructor(page: Page ){
        this.page = page
        this.confirmOrder = page.getByRole('button', { name: 'Pay and Confirm Order' })
        this.orderPlaced = page.getByText('Congratulations! Your order has been confirmed!')
        this.invoice = page.getByRole('link', { name: 'Download Invoice' })
    }

    async confirmorder(){
        await this.confirmOrder.click()
    }

    async orderplaced(){
        await this.orderPlaced.isVisible()
    }

    async downloadInvoice(){
        await this.invoice.click()
    }

}