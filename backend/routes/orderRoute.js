import express from 'express'
import authUser from '../middleware/auth.js'
import {
  allOrders,
  placeOrderByCod,
  updateStatus,
  userOrders,
} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'

const orderRouter = express.Router()

orderRouter.post('/cod', authUser, placeOrderByCod)
orderRouter.post('/user-orders', authUser, userOrders)
// Admin route
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

export default orderRouter
