import {Page,Locator} from '@playwright/test'

export default class PaymentPage{
    readonly page : Page
    readonly placeOrder : Locator
    readonly nameOnCard : Locator
    readonly cardNumber : Locator
    readonly cvv : Locator
    readonly month: Locator
    readonly year: Locator



    constructor(page: Page ){
        this.page = page
        this.placeOrder = this.page.getByRole('link', { name: 'Place Order' })
        this.nameOnCard = page.locator('input[name="name_on_card"]')
        this.cardNumber = page.locator('input[name="card_number"]')
        this.cvv = page.getByRole('textbox', { name: 'ex.' })
        this.month = page.getByRole('textbox', { name: 'MM' })
        this.year = page.getByRole('textbox', { name: 'YYYY' })
    }

    async placeorder(){
        await this.placeOrder.click()
    }

    async fillPaymentDetails(cardName: string,cardNumber:string,cvv:string,month:string,year:string) {
    await this.nameOnCard.fill(cardName)
    await this.cardNumber.fill(cardNumber)
    await this.cvv.fill(cvv)
    await this.month.fill(month)
    await this.year.fill(year)
    }
}