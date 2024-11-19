import { v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'

// function for add product

const addProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
const allProduct = async (req, res) => {
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
      spacification,
    } = req.body

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
      spacification: JSON.parse(spacification),
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
const removeProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
const singleProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export { addProduct, allProduct, removeProduct, singleProduct }
