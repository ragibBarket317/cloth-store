import reviewModel from '../models/reviewModel.js'
import mongoose from 'mongoose'

const addReview = async (req, res) => {
  try {
    const { userId, productId, rating, comment } = req.body
    const review = new reviewModel({
      userId,
      productId,
      rating,
      comment,
    })
    await review.save()
    res.json({ success: true, message: 'Review added' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
const productBasedReview = async (req, res) => {
  try {
    const { productId } = req.body

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.json({ success: false, message: 'Invalid product ID' })
    }

    const reviews = await reviewModel
      .find({ productId, status: 'approved' })
      .populate('userId', 'name')
    res.json({ success: true, reviews })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const getPendingReviews = async (req, res) => {
  try {
    const pendingReviews = await reviewModel
      .find({ status: 'pending' })
      .populate('userId', 'name')
      .populate('productId', 'name')
    res.json({ success: true, pendingReviews })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const approveReview = async (req, res) => {
  try {
    const { reviewId, status } = req.body

    await reviewModel.findByIdAndUpdate(reviewId, { status })

    res.json({ success: true, message: 'Review approved' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.body

    await reviewModel.findByIdAndDelete(reviewId)

    res.json({ success: true, message: 'Review deleted successfully' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export {
  addReview,
  productBasedReview,
  deleteReview,
  getPendingReviews,
  approveReview,
}
