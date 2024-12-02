import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'
import SSLCommerzPayment from 'sslcommerz-lts'

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

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId, { cartData: {} })
    res.json({ success: true, message: 'Order placed' })
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

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId, { cartData: {} })

    const sslcz = new SSLCommerzPayment(storeId, storePassWord, false) // Use false for sandbox mode
    sslcz.init(data).then((response) => {
      console.log(response)
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
    const successData = req.body
    if (successData.status !== 'VALID') {
      throw new Error('Invalid Payment')
    }
    const updatedOrder = await orderModel.findOneAndUpdate(
      { tran_id: successData.tran_id },
      { payment: true },
      { new: true }
    )

    if (!updatedOrder) {
      throw new Error('Order not found for this transaction ID')
    }
    res.redirect(`${process.env.FRONTEND_URL}/payment/success`)
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
