import { test, expect } from '@playwright/test'
import ProductPage from '../pages/ProductPage'
import {items} from '../testdata/items.json'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import PaymentPage from '../pages/PaymentPage'
import OrderConfirmationPage from '../pages/OrderConfirmationPage'
import paymentData from '../testData/address.json'

test.describe('Shopping Test',()=>{

  let productPage:ProductPage
  let cartPage:CartPage
  let checkoutPage:CheckoutPage
  let paymentPage:PaymentPage
  let orderConfirmationPage:OrderConfirmationPage
  

test.beforeEach(async({page})=>{
  await page.goto('/')
  productPage=new ProductPage(page)
  cartPage=new CartPage(page)
  checkoutPage=new CheckoutPage(page)
  paymentPage=new PaymentPage(page)
  orderConfirmationPage=new OrderConfirmationPage(page)
})

  items.forEach((item,index)=>{
  test(` Adding Item ${index+1} in cart and Item name is ${item.name}`,async({page}) => {
  await productPage.viewandaddProduct(item.name)
  })
})
 
 test('Cart Items',async({page})=>{
  await cartPage.gotocart()
  const count = await cartPage.getCartItemCount()
  console.log(`Total items in cart: ${count}`)
  expect(count).toBe(3)
  await cartPage.checkout()
  await checkoutPage.verifyAddresses()
  await paymentPage.placeorder()
  await paymentPage.fillPaymentDetails(
    paymentData.cardName,
    paymentData.cardNumber,
    paymentData.cvv,
    paymentData.month,
    paymentData.year
  )
  await orderConfirmationPage.confirmorder()
  await orderConfirmationPage.orderplaced()
  await orderConfirmationPage.downloadInvoice()

  
 })

 



})