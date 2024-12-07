import sendOrderConfirmationEmail from '../config/nodemailer.js'
import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'
import SSLCommerzPayment from 'sslcommerz-lts'
import axios from 'axios'

const placeOrderByCod = async (req, res) => {
  try {
    const { userId, items, address, amount } = req.body
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'COD',
      payment: 'false',
      date: Date.now(),
    }

    if (!address.email || !address || !items || !amount) {
      return res.json({ success: false, message: 'Incomplete order details' })
    }

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await sendOrderConfirmationEmail(address.email, address, items, amount)

    await userModel.findByIdAndUpdate(userId, { cartData: {} })
    res.json({ success: true, message: 'Order confirmed and email sent!' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const placeOrderBySSLCommerz = async (req, res) => {
  try {
    const { userId, items, address, amount } = req.body

    const storeId = `${process.env.STORE_ID}`
    const storePassWord = `${process.env.STORE_PASSWORD}`

    const tran_id = `TRAN_${Date.now()}`

    const data = {
      total_amount: amount, // Payment amount
      currency: 'BDT',
      tran_id, // Unique transaction ID
      success_url: `${process.env.BACKEND_URL}/api/order/success`, // Success URL
      fail_url: `${process.env.BACKEND_URL}/api/order/fail`, // Fail URL
      cancel_url: `${process.env.BACKEND_URL}/api/order/cancel`,

      product_name: items[0].name,
      product_category: items[0].category || 'General',
      product_profile: 'general',
      cus_name: address.firstName,
      cus_email: address.email,
      cus_add1: address.address || 'Dhaka',
      cus_phone: address.phone,
      ship_name: address.firstName,
      ship_add1: address.address || 'Dhaka',
      shipping_method: 'NO',
    }

    const orderData = {
      userId,
      items,
      address,
      amount,
      tran_id,
      paymentMethod: 'SSLCommerz',
      payment: 'false',
      date: Date.now(),
    }

    if (!address.email || !address || !items || !amount) {
      return res.json({ success: false, message: 'Incomplete order details' })
    }

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId, { cartData: {} })

    const sslcz = new SSLCommerzPayment(storeId, storePassWord, false) // Use false for sandbox mode
    sslcz.init(data).then((response) => {
      if (response?.GatewayPageURL) {
        res.json({ success: true, url: response.GatewayPageURL })
      } else {
        res.json({
          success: false,
          message: 'Payment session initialization failed',
        })
      }
    })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const successSSLCommerz = async (req, res) => {
  try {
    const { tran_id, val_id } = req.body

    // Validate the payment with SSLCommerz
    const storeId = `${process.env.STORE_ID}`
    const storePassWord = `${process.env.STORE_PASSWORD}`
    const validationURL = `https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=${val_id}&store_id=${storeId}&store_passwd=${storePassWord}&v=1&format=json`

    const response = await axios.get(validationURL)
    const { status, currency_amount } = response.data

    if (status === 'VALID') {
      // Update the order to mark payment as complete
      const order = await orderModel.findOneAndUpdate(
        { tran_id },
        { payment: true },
        { new: true }
      )

      if (order) {
        // Send the order confirmation email
        await sendOrderConfirmationEmail(
          order.address.email,
          order.address,
          order.items,
          order.amount
        )

        res.redirect(`${process.env.FRONTEND_URL}/payment/success`)
      } else {
        res.json({ success: false, message: 'Order not found.' })
      }
    } else {
      res.json({ success: false, message: 'Payment validation failed.' })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
const paymentFailSSLCommerz = async (req, res) => {
  try {
    res.redirect(`${process.env.FRONTEND_URL}/payment/fail`)
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
const paymentCancelSSLCommerz = async (req, res) => {
  try {
    res.redirect(`${process.env.FRONTEND_URL}/payment/cancel`)
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const userOrders = async (req, res) => {
  try {
    const { userId } = req.body
    const orders = await orderModel.find({ userId })
    res.json({ success: true, orders })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// All orders for admin
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({})
    res.json({ success: true, orders })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body
    await orderModel.findByIdAndUpdate(orderId, { status })
    res.json({ success: true, message: 'Status updated' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
export {
  placeOrderByCod,
  placeOrderBySSLCommerz,
  successSSLCommerz,
  paymentFailSSLCommerz,
  paymentCancelSSLCommerz,
  userOrders,
  allOrders,
  updateStatus,
}
