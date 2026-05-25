# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pageLogin.spec.ts >> Shopping Test >> Cart Items
- Location: tests\pageLogin.spec.ts:34:6

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Cart' })

```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test'
  2  | 
  3  | export default class CartPage{
  4  |     readonly page : Page
  5  |     readonly items : Locator
  6  |     readonly chkoutBtn : Locator
  7  |     readonly cartLink : Locator
  8  |     
  9  | 
  10 | 
  11 | 
  12 |     constructor(page: Page ){
  13 |         this.page = page
  14 |         this.cartLink = this.page.getByRole('link',{name:'Cart'})
  15 |         this.items = this.page.locator('#cart_info_table tbody tr')
  16 |         this.chkoutBtn = page.getByText('Proceed To Checkout')
  17 |       }
  18 |     
  19 |     async gotocart(){
> 20 |         await this.cartLink.click()
     |                             ^ Error: locator.click: Target page, context or browser has been closed
  21 |     }
  22 | 
  23 |     async checkout(){
  24 |         await this.chkoutBtn.click()
  25 |      }
  26 |      
  27 |     async getCartItemCount(): Promise<number> {
  28 |     return await this.items.count()
  29 | 
  30 |     
  31 |   }
  32 | 
  33 | 
  34 | }
  35 | 
```