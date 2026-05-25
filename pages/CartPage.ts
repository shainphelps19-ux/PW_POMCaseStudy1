import {Page,Locator} from '@playwright/test'

export default class CartPage{
    readonly page : Page
    readonly items : Locator
    readonly chkoutBtn : Locator
    readonly cartLink : Locator
    



    constructor(page: Page ){
        this.page = page
        this.cartLink = this.page.getByRole('link',{name:'Cart'})
        this.items = this.page.locator('#cart_info_table tbody tr')
        this.chkoutBtn = page.getByText('Proceed To Checkout')
      }
    
    async gotocart(){
        await this.cartLink.click()
    }

    async checkout(){
        await this.chkoutBtn.click()
     }
     
    async getCartItemCount(): Promise<number> {
    return await this.items.count()

    
  }


}
