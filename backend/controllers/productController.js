import { v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'

// function for add product

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      regularPrice,
      discountPrice,
      category,
      subCategory,
      subSubCategory,
      sizes,
      specification,
      stock,
    } = req.body

    console.log(req.body)
    console.log(req.files)

    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    )

    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: 'image',
        })
        return result.secure_url
      })
    )

    const productData = {
      name,
      description,
      category,
      subCategory,
      subSubCategory,
      regularPrice: Number(regularPrice),
      discountPrice: Number(discountPrice),
      sizes: JSON.parse(sizes),
      specification: JSON.parse(specification),
      stock: JSON.parse(stock),
      image: imageUrl,
      date: Date.now(),
    }

    const product = new productModel(productData)
    await product.save()
    res.json({ success: true, message: 'Product Added' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const updateProduct = async (req, res) => {
  try {
    const {
      productId,
      name,
      description,
      regularPrice,
      discountPrice,
      category,
      subCategory,
      subSubCategory,
      sizes,
      spacification,
      stock,
    } = req.body

    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    )

    let imageUrl = []

    if (images.length > 0) {
      imageUrl = await Promise.all(
        images.map(async (item) => {
          const result = await cloudinary.uploader.upload(item.path, {
            resource_type: 'image',
          })
          return result.secure_url
        })
      )
    }

    // find the product and update

    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      {
        ...(name && { name }),
        ...(description && { description }),
        ...(category && { category }),
        ...(subCategory && { subCategory }),
        ...(subSubCategory && { subSubCategory }),
        ...(regularPrice && { regularPrice: Number(regularPrice) }),
        ...(discountPrice && { discountPrice: Number(discountPrice) }),
        ...(sizes && { sizes: JSON.parse(sizes) }),
        ...(spacification && { spacification: JSON.parse(spacification) }),
        ...(stock && { stock: JSON.parse(stock) }),
        ...(imageUrl.length > 0 && { image: imageUrl }),
        date: Date.now(),
      },
      { new: true }
    )

    if (!updatedProduct) {
      return res.json({ success: false, message: 'Product not found' })
    }

    res.json({
      success: true,
      message: 'Product updated',
      product: updatedProduct,
    })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const allProduct = async (req, res) => {
  try {
    const products = await productModel.find({})
    res.json({ success: true, products })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id)
    res.json({ success: true, message: 'Product removed' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body
    const product = await productModel.findById(productId)
    res.json({ success: true, product })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export { addProduct, updateProduct, allProduct, removeProduct, singleProduct }
