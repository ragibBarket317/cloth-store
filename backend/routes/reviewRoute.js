import express from 'express'
import {
  addReview,
  approveReview,
  deleteReview,
  getPendingReviews,
  productBasedReview,
} from '../controllers/reviewController.js'
import authUser from '../middleware/auth.js'
import adminAuth from '../middleware/adminAuth.js'

const reviewRouter = express.Router()

reviewRouter.post('/add', authUser, addReview)
reviewRouter.post('/get-approved', productBasedReview)

reviewRouter.get('/pending', adminAuth, getPendingReviews)
reviewRouter.post('/approve', adminAuth, approveReview)
reviewRouter.post('/delete', adminAuth, deleteReview)

export default reviewRouter
