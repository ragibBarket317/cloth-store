import productModel from '../models/productModel.js'

const updateStock = async (productId, size, quantity) => {
  try {
    const product = await productModel.findById(productId)

    if (!product) {
      throw new Error('Product not found')
    }
    if (!product.stock.has(size)) {
      throw new Error(`Size ${size} not available in stock`)
    }

    const currentStock = product.stock.get(size)
    if (currentStock < quantity) {
      throw new Error(`Size ${size} not available in stock`)
    }

    product.stock.set(size, currentStock - quantity)

    await product.save()

    return { success: true, message: 'Stock updated successfully' }
  } catch (error) {
    console.log(error)
    return { success: false, message: error.message }
  }
}

export default updateStock
