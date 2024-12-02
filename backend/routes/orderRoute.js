import express from 'express'
import authUser from '../middleware/auth.js'
import {
  allOrders,
  paymentCancelSSLCommerz,
  paymentFailSSLCommerz,
  placeOrderByCod,
  placeOrderBySSLCommerz,
  successSSLCommerz,
  updateStatus,
  userOrders,
} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'

const orderRouter = express.Router()

orderRouter.post('/cod', authUser, placeOrderByCod)
orderRouter.post('/user-orders', authUser, userOrders)
orderRouter.post('/initiate-payment', authUser, placeOrderBySSLCommerz)
orderRouter.post('/success', successSSLCommerz)
orderRouter.post('/fail', paymentFailSSLCommerz)
orderRouter.post('/cancel', paymentCancelSSLCommerz)
// Admin route
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

export default orderRouter
