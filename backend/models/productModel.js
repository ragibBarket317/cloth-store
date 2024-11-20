import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  regularPrice: { type: Number, required: true },
  discountPrice: { type: Number },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  subSubCategory: { type: String, required: true },
  specification: { type: Array },
  image: { type: Array, required: true },
  sizes: { type: Array, required: true },
  reviews: [reviewSchema],
  stock: { type: Map, of: Number },
  date: { type: Number, required: true },
})

const productModel =
  mongoose.models.product || mongoose.model('product', productSchema)

export default productModel
