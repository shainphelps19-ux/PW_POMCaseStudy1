import {Page,Locator} from '@playwright/test'


export default class ProductPage{
    readonly page: Page
    readonly addtoBtn: Locator
    readonly cntShop: Locator
    readonly homeLink: Locator

     constructor(page: Page){
        this.page = page
        this.addtoBtn = this.page.getByRole('button',{name:'Add to cart'})
        this.cntShop = this.page.getByRole('button',{name:'Continue Shopping'})
        this.homeLink = this.page.getByRole('link',{name:'Home'})

     }

    async viewandaddProduct(productName: string) {
    const productCard = this.page.locator('.col-sm-4', {hasText: productName})
    await productCard.getByRole('link', { name: 'View Product' }).click()
    await this.addtoBtn.click()
    await this.cntShop.click()
    await this.homeLink.click()
    }
}
