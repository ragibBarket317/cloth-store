import mongoose from 'mongoose'

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
  stock: { type: Map, of: Number },
  date: { type: Number, required: true },
})

const productModel =
  mongoose.models.product || mongoose.model('product', productSchema)

export default productModel
