# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pageLogin.spec.ts >> Shopping Test >> Cart Items
- Location: tests\pageLogin.spec.ts:34:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 2
Received: 3
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as Sherwin R
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "Home" [ref=e48] [cursor=pointer]:
          - /url: /
      - listitem [ref=e49]: Shopping Cart
    - generic [ref=e54] [cursor=pointer]: Proceed To Checkout
    - table [ref=e56]:
      - rowgroup [ref=e57]:
        - row "Item Description Price Quantity Total" [ref=e58]:
          - cell "Item" [ref=e59]
          - cell "Description" [ref=e60]
          - cell "Price" [ref=e61]
          - cell "Quantity" [ref=e62]
          - cell "Total" [ref=e63]
          - cell [ref=e64]
      - rowgroup [ref=e65]:
        - row "Product Image Blue Top Women > Tops Rs. 500 3 Rs. 1500 " [ref=e66]:
          - cell "Product Image" [ref=e67]:
            - link "Product Image" [ref=e68] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e69]
          - cell "Blue Top Women > Tops" [ref=e70]:
            - heading "Blue Top" [level=4] [ref=e71]:
              - link "Blue Top" [ref=e72] [cursor=pointer]:
                - /url: /product_details/1
            - paragraph [ref=e73]: Women > Tops
          - cell "Rs. 500" [ref=e74]:
            - paragraph [ref=e75]: Rs. 500
          - cell "3" [ref=e76]:
            - button "3" [ref=e77] [cursor=pointer]
          - cell "Rs. 1500" [ref=e78]:
            - paragraph [ref=e79]: Rs. 1500
          - cell "" [ref=e80]:
            - generic [ref=e82] [cursor=pointer]: 
        - row "Product Image Men Tshirt Men > Tshirts Rs. 400 2 Rs. 800 " [ref=e83]:
          - cell "Product Image" [ref=e84]:
            - link "Product Image" [ref=e85] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e86]
          - cell "Men Tshirt Men > Tshirts" [ref=e87]:
            - heading "Men Tshirt" [level=4] [ref=e88]:
              - link "Men Tshirt" [ref=e89] [cursor=pointer]:
                - /url: /product_details/2
            - paragraph [ref=e90]: Men > Tshirts
          - cell "Rs. 400" [ref=e91]:
            - paragraph [ref=e92]: Rs. 400
          - cell "2" [ref=e93]:
            - button "2" [ref=e94] [cursor=pointer]
          - cell "Rs. 800" [ref=e95]:
            - paragraph [ref=e96]: Rs. 800
          - cell "" [ref=e97]:
            - generic [ref=e99] [cursor=pointer]: 
        - row "Product Image Stylish Dress Women > Dress Rs. 1500 2 Rs. 3000 " [ref=e100]:
          - cell "Product Image" [ref=e101]:
            - link "Product Image" [ref=e102] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e103]
          - cell "Stylish Dress Women > Dress" [ref=e104]:
            - heading "Stylish Dress" [level=4] [ref=e105]:
              - link "Stylish Dress" [ref=e106] [cursor=pointer]:
                - /url: /product_details/4
            - paragraph [ref=e107]: Women > Dress
          - cell "Rs. 1500" [ref=e108]:
            - paragraph [ref=e109]: Rs. 1500
          - cell "2" [ref=e110]:
            - button "2" [ref=e111] [cursor=pointer]
          - cell "Rs. 3000" [ref=e112]:
            - paragraph [ref=e113]: Rs. 3000
          - cell "" [ref=e114]:
            - generic [ref=e116] [cursor=pointer]: 
  - contentinfo [ref=e117]:
    - generic [ref=e122]:
      - heading "Subscription" [level=2] [ref=e123]
      - generic [ref=e124]:
        - textbox "Your email address" [ref=e125]
        - button "" [ref=e126] [cursor=pointer]:
          - generic [ref=e127]: 
        - paragraph [ref=e128]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e132]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import ProductPage from '../pages/ProductPage'
  3  | import {items} from '../testdata/items.json'
  4  | import CartPage from '../pages/CartPage'
  5  | import CheckoutPage from '../pages/CheckoutPage'
  6  | import PaymentPage from '../pages/PaymentPage'
  7  | import OrderConfirmationPage from '../pages/OrderConfirmationPage'
  8  | import paymentData from '../testData/address.json'
  9  | 
  10 | test.describe('Shopping Test',()=>{
  11 | 
  12 |   let productPage:ProductPage
  13 |   let cartPage:CartPage
  14 |   let checkoutPage:CheckoutPage
  15 |   let paymentPage:PaymentPage
  16 |   let orderConfirmationPage:OrderConfirmationPage
  17 |   
  18 | 
  19 | test.beforeEach(async({page})=>{
  20 |   await page.goto('/')
  21 |   productPage=new ProductPage(page)
  22 |   cartPage=new CartPage(page)
  23 |   checkoutPage=new CheckoutPage(page)
  24 |   paymentPage=new PaymentPage(page)
  25 |   orderConfirmationPage=new OrderConfirmationPage(page)
  26 | })
  27 | 
  28 |   items.forEach((item,index)=>{
  29 |   test(` Adding Item ${index+1} in cart and Item name is ${item.name}`,async({page}) => {
  30 |   await productPage.viewandaddProduct(item.name)
  31 |   })
  32 | })
  33 |  
  34 |  test('Cart Items',async({page})=>{
  35 |   await cartPage.gotocart()
  36 |   const count = await cartPage.getCartItemCount()
  37 |   console.log(`Total items in cart: ${count}`)
  38 |   expect(count).toBe(3)
  39 |   const deleteButton = page.locator('tr',{hasText:'Blue Top'}).locator('a.cart_quantity_delete')
  40 |   await deleteButton.click()
  41 |   const count2 = await cartPage.getCartItemCount()
  42 |   console.log(`Total items in cart: ${count2}`)
> 43 |   expect(count2).toBe(2)
     |                  ^ Error: expect(received).toBe(expected) // Object.is equality
  44 |   page.waitForTimeout(5000)
  45 |   await cartPage.checkout()
  46 |   await checkoutPage.verifyAddresses()
  47 |   await paymentPage.placeorder()
  48 |   await paymentPage.fillPaymentDetails(
  49 |     paymentData.cardName,
  50 |     paymentData.cardNumber,
  51 |     paymentData.cvv,
  52 |     paymentData.month,
  53 |     paymentData.year
  54 |   )
  55 |   await orderConfirmationPage.confirmorder()
  56 |   await orderConfirmationPage.orderplaced()
  57 |   await orderConfirmationPage.downloadInvoice()
  58 | 
  59 |   
  60 |  })
  61 | 
  62 |  
  63 | 
  64 | 
  65 | 
  66 | })
```