import {Page,Locator} from '@playwright/test'

export default class CartPage{
    readonly page : Page
    readonly items : Locator
    readonly chkoutBtn : Locator
    readonly cartLink : Locator
    readonly deleteBtn : Locator
    



    constructor(page: Page ){
        this.page = page
        this.cartLink = this.page.getByRole('link',{name:'Cart'})
        this.items = this.page.locator('#cart_info_table tbody tr')
        this.chkoutBtn = page.getByText('Proceed To Checkout')
        this.deleteBtn = page.locator('tr',{hasText:'Blue Top'}).locator('a.cart_quantity_delete')
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

  async deleteBlueTopItem (){
    await this.deleteBtn.click()
    await this.page.waitForTimeout(10000)
  }


}


  