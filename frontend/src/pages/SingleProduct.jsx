import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'

const SingleProduct = () => {
  const { products, currency, navigate, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState('')
  const [image, setImage] = useState('')
  const [selectSize, setSelectSize] = useState('')
  const { id } = useParams()

  const relatedProducts = products.filter(
    (product) => product.subSubCategory === productData.subSubCategory
  )
  console.log(relatedProducts)

  const getSingleProduct = () => {
    products.map((product) => {
      if (product._id === id) {
        setProductData(product)
        setImage(product.image[0])
        return null
      }
    })
  }
  console.log(productData)
  useEffect(() => {
    getSingleProduct()
  }, [id, products])

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-3 mt-10 mb-10">
        <div className="w-full sm:w-[54%] flex flex-col-reverse sm:flex-row gap-2">
          <div className="w-[20%] flex sm:flex-col  gap-3">
            {productData?.image?.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                alt=""
                className="w-20 h-20 object-cover"
              />
            ))}
          </div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="flex-1 mt-10 sm:mt-0">
          <div className="flex flex-col gap-3">
            <h2 className="prata-regular font-semibold text-2xl">
              {productData.name}
            </h2>
            <p className="text-lg font-semibold">
              {currency} {productData.regularPrice}
            </p>
            <p className="text-gray-700">{productData.description}</p>
            <div className="flex  gap-3 mt-3">
              {productData?.sizes?.map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSelectSize(item)}
                  className={`p-3 border w-12 h-12 flex justify-center items-center ${
                    item === selectSize ? 'border-orange-500' : ''
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-5">
              <button
                onClick={() => addToCart(productData._id, selectSize)}
                className="px-4 py-3 bg-black text-white rounded-sm active:bg-gray-700"
              >
                ADD TO CART
              </button>
            </div>
            <hr />
            <div className="mt-3">
              <h2>Details Specification: </h2>
              {productData?.spacification?.map((item, index) => (
                <li key={index} className="ml-2 mt-3">
                  {item}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-5 text-xl">Reviews</h2>
        <div className="flex ">
          <div className="w-full sm:w-[50%]">
            {productData?.reviews?.map((review, index) => (
              <div key={index} className="border-y py-4">
                <h2 className="text-base font-semibold">{review.name}</h2>
                <p>{review.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl text-center mt-10 mb-10">Related Products</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center mt-10">
          {relatedProducts.map((product) => (
            <ProductItem
              key={product._id}
              id={product._id}
              name={product.name}
              image={product.image}
              price={product.regularPrice}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
