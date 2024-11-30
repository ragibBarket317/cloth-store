import axios from 'axios'
import { useEffect, useState } from 'react'
import { backendURL } from '../App'
import { toast } from 'react-toastify'

const UpdateProductModal = ({ closeModal, products, editProductId, token }) => {
  const product = products.find((product) => product._id === editProductId)
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [specification, setSpecification] = useState([])
  const [specificationString, setSpecificationString] = useState('')
  const [sizes, setSizes] = useState([])
  const [regularPrice, setRegularPrice] = useState('')
  const [percentage, setPercentage] = useState('')
  const [discountPrice, setDiscountPrice] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [subSubCategory, setSubSubCategory] = useState('')
  const [stock, setStock] = useState({})

  const percentCalculator = () => {
    const percentAmount = (Number(regularPrice) * Number(percentage)) / 100
    const disCountAmount = Number(regularPrice) - percentAmount
    if (Number(percentage) > 0) {
      setDiscountPrice(disCountAmount)
    }
  }
  useEffect(() => {
    if (typeof specification === 'string') {
      const specificationArray = specification
        .split('.')
        .map((item) => item.trim())
      setSpecification(specificationArray)
    }
  }, [specification])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const specificationArray = specificationString
        .split('.')
        .map((item) => item.trim())
        .filter((item) => item) // Remove empty items
      const formData = new FormData()

      images.forEach((image, index) => {
        if (image instanceof File) {
          formData.append(`image${index + 1}`, image)
        }
      })
      formData.append('productId', editProductId)
      formData.append('name', name)
      formData.append('description', description)
      formData.append('specification', JSON.stringify(specificationArray))
      formData.append('sizes', JSON.stringify(sizes))

      formData.append('stock', JSON.stringify(stock))
      formData.append('regularPrice', regularPrice)
      formData.append('discountPrice', discountPrice)
      formData.append('category', category)
      formData.append('subCategory', subCategory)
      formData.append('subSubCategory', subSubCategory)

      const response = await axios.post(
        backendURL + '/api/product/update',
        formData,
        { headers: { token } }
      )
      if (response.data.success === true) {
        setLoading(false)
        toast.success('Product updated successfully!')
        closeModal()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (product) {
      setName(product.name || '')
      setDescription(product.description || '')
      setSpecification(product.specification || [])
      setSpecificationString((product.specification || []).join('. '))
      setSizes(product.sizes || [])
      setRegularPrice(product.regularPrice || '')
      setDiscountPrice(product.discountPrice || '')
      setCategory(product.category || '')
      setSubCategory(product.subCategory || '')
      setSubSubCategory(product.subSubCategory || '')
      setStock(product.stock || {})
      setImages(product.image || [])
    }
  }, [product])

  useEffect(() => {
    percentCalculator()
  }, [regularPrice, percentage])
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-[70%] h-[95%] p-6 bg-white rounded shadow-lg overflow-y-scroll relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
        <div className="mb-5">
          <div>
            <div>
              <h2 className="prata-regular font-medium text-xl mb-5">
                Update Product
              </h2>
            </div>
            <div>
              <form onSubmit={handleSubmit} action="">
                <div className="flex gap-4">
                  <div className="w-[60%] flex flex-col gap-5">
                    <div className="bg-gray-100 rounded-md p-5 space-y-4">
                      <h2>General Information</h2>
                      <div className="space-y-2">
                        <p className="text-[14px]">Name Product</p>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="outline-none px-4 py-2.5 w-full rounded-lg"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <p className="text-[14px]">Description Product</p>
                        <textarea
                          type="text"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="outline-none px-4 py-2 w-full h-24 rounded-lg"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <p className="text-[14px]">Details Specification</p>
                        <textarea
                          type="text"
                          value={specificationString}
                          onChange={(e) =>
                            setSpecificationString(e.target.value)
                          }
                          className="outline-none px-4 py-2 w-full h-24 rounded-lg"
                          required
                        />
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-md p-5 space-y-4">
                      <div>
                        <p>Select Sizes</p>
                        {/* <div className="flex gap-3">
                          <p
                            className={`p-3 border  w-12 h-12 flex justify-center items-center mt-3 ${
                              product?.sizes.includes('S')
                                ? 'bg-orange-500'
                                : 'bg-white'
                            }`}
                            onClick={() =>
                              setSizes((prev) =>
                                prev.includes('S')
                                  ? prev.filter((item) => item !== 'S')
                                  : [...prev, 'S']
                              )
                            }
                          >
                            S
                          </p>
                          <p
                            className={`p-3 border w-12 h-12 flex justify-center items-center mt-3 ${
                              product?.sizes.includes('M')
                                ? 'bg-orange-500'
                                : 'bg-white'
                            }`}
                            onClick={() =>
                              setSizes((prev) =>
                                prev.includes('M')
                                  ? prev.filter((item) => item !== 'M')
                                  : [...prev, 'M']
                              )
                            }
                          >
                            M
                          </p>
                          <p
                            className={`p-3 border w-12 h-12 flex justify-center items-center mt-3 ${
                              product?.sizes.includes('L')
                                ? 'bg-orange-500'
                                : 'bg-white'
                            }`}
                            onClick={() =>
                              setSizes((prev) =>
                                prev.includes('L')
                                  ? prev.filter((item) => item !== 'L')
                                  : [...prev, 'L']
                              )
                            }
                          >
                            L
                          </p>
                          <p
                            className={`p-3 border w-12 h-12 flex justify-center items-center mt-3 ${
                              product?.sizes.includes('XL')
                                ? 'bg-orange-500'
                                : 'bg-white'
                            }`}
                            onClick={() =>
                              setSizes((prev) =>
                                prev.includes('XL')
                                  ? prev.filter((item) => item !== 'XL')
                                  : [...prev, 'XL']
                              )
                            }
                          >
                            XL
                          </p>
                          <p
                            className={`p-3 border w-12 h-12 flex justify-center items-center mt-3 ${
                              product?.sizes.includes('XXL')
                                ? 'bg-orange-500'
                                : 'bg-white'
                            }`}
                            onClick={() =>
                              setSizes((prev) =>
                                prev.includes('XXL')
                                  ? prev.filter((item) => item !== 'XXL')
                                  : [...prev, 'XXL']
                              )
                            }
                          >
                            XXL
                          </p>
                        </div> */}
                        <div className="flex gap-3">
                          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <p
                              key={size}
                              className={`p-3 border w-12 h-12 flex justify-center items-center mt-3 cursor-pointer ${
                                sizes.includes(size)
                                  ? 'bg-orange-500 text-white'
                                  : 'bg-white'
                              }`}
                              onClick={() =>
                                setSizes(
                                  (prev) =>
                                    prev.includes(size)
                                      ? prev.filter((item) => item !== size) // Remove size
                                      : [...prev, size] // Add size
                                )
                              }
                            >
                              {size}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-md p-5 space-y-4">
                      <div className="flex gap-3">
                        <div className="space-y-2">
                          <p>Regular Price</p>
                          <input
                            type="number"
                            value={regularPrice}
                            onChange={(e) => setRegularPrice(e.target.value)}
                            className="outline-none pl-4 py-2.5 w-full rounded-lg"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <p>Discount(%)</p>
                          <input
                            type="number"
                            onChange={(e) => setPercentage(e.target.value)}
                            className="outline-none pl-4 py-2.5 w-full rounded-lg"
                          />
                        </div>
                        <div className="space-y-2">
                          <p>Discount Price</p>
                          <input
                            type="number"
                            value={discountPrice}
                            className="outline-none pl-4 py-2.5 w-full rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex-col gap-5">
                    <div className="bg-gray-100 rounded-md p-5 space-y-4">
                      <div>
                        <p className="mb-3">Upload Image</p>
                        {/* <div className="flex gap-4">
                          <div className="border-dashed border-2 border-gray-300 p-2 relative">
                            <label htmlFor="image1">
                              <div className="flex flex-col items-center justify-center w-16 h-16">
                                <img
                                  src={
                                    !image1
                                      ? '/upload-icon.png'
                                      : URL.createObjectURL(image1)
                                  }
                                  alt=""
                                  className={`${
                                    image1 ? 'w-full object-cover h-16' : ''
                                  }`}
                                />
                                <input
                                  onChange={(e) => setImage1(e.target.files[0])}
                                  type="file"
                                  name=""
                                  id="image1"
                                  hidden
                                  required
                                />
                              </div>
                            </label>
                            {image1 && (
                              <p
                                onClick={() => setImage1(false)}
                                className="bg-gray-200 absolute top-[-5px] right-[-10px] rounded-full w-6 h-6 text-center cursor-pointer"
                              >
                                X
                              </p>
                            )}
                          </div>
                          <div className="border-dashed border-2 border-gray-300 p-2 relative">
                            <label htmlFor="image2">
                              <div className="flex flex-col items-center justify-center w-16 h-16">
                                <img
                                  src={
                                    !image2
                                      ? '/upload-icon.png'
                                      : URL.createObjectURL(image2)
                                  }
                                  alt=""
                                  className={`${
                                    image2 ? 'w-full object-cover h-16' : ''
                                  }`}
                                />
                                <input
                                  onChange={(e) => setImage2(e.target.files[0])}
                                  type="file"
                                  name=""
                                  id="image2"
                                  hidden
                                />
                              </div>
                            </label>
                            {image2 && (
                              <p
                                onClick={() => setImage2(false)}
                                className="bg-gray-200 absolute top-[-5px] right-[-10px] rounded-full w-6 h-6 text-center cursor-pointer"
                              >
                                X
                              </p>
                            )}
                          </div>
                          <div className="border-dashed border-2 border-gray-300 p-2 relative">
                            <label htmlFor="image3">
                              <div className="flex flex-col items-center justify-center w-16 h-16">
                                <img
                                  src={
                                    !image3
                                      ? '/upload-icon.png'
                                      : URL.createObjectURL(image3)
                                  }
                                  alt=""
                                  className={`${
                                    image3 ? 'w-full object-cover h-16' : ''
                                  }`}
                                />
                                <input
                                  onChange={(e) => setImage3(e.target.files[0])}
                                  type="file"
                                  name=""
                                  id="image3"
                                  hidden
                                />
                              </div>
                            </label>
                            {image3 && (
                              <p
                                onClick={() => setImage3(false)}
                                className="bg-gray-200 absolute top-[-5px] right-[-10px] rounded-full w-6 h-6 text-center cursor-pointer"
                              >
                                X
                              </p>
                            )}
                          </div>
                          <div className="border-dashed border-2 border-gray-300 p-2 relative">
                            <label htmlFor="image4">
                              <div className="flex flex-col items-center justify-center w-16 h-16">
                                <img
                                  src={
                                    !image4
                                      ? '/upload-icon.png'
                                      : URL.createObjectURL(image4)
                                  }
                                  alt=""
                                  className={`${
                                    image4 ? 'w-full object-cover h-16' : ''
                                  }`}
                                />
                                <input
                                  onChange={(e) => setImage4(e.target.files[0])}
                                  type="file"
                                  name=""
                                  id="image4"
                                  hidden
                                />
                              </div>
                            </label>
                            {image4 && (
                              <p
                                onClick={() => setImage4(false)}
                                className="bg-gray-200 absolute top-[-5px] right-[-10px] rounded-full w-6 h-6 text-center cursor-pointer"
                              >
                                X
                              </p>
                            )}
                          </div>
                        </div> */}
                        <div className="flex gap-4">
                          {images.map((image, index) => (
                            <div
                              key={index}
                              className="border-dashed border-2 border-gray-300 p-2 relative"
                            >
                              {/* Render either uploaded image or existing image */}
                              <img
                                src={
                                  image instanceof File
                                    ? URL.createObjectURL(image)
                                    : image
                                } // Check if image is a file or URL
                                alt={`Uploaded Preview ${index}`}
                                className="w-16 h-16 object-cover"
                              />
                              <p
                                onClick={() =>
                                  setImages((prev) =>
                                    prev.filter(
                                      (_, imgIndex) => imgIndex !== index
                                    )
                                  )
                                }
                                className="bg-gray-200 absolute top-[-5px] right-[-10px] rounded-full w-6 h-6 text-center cursor-pointer"
                              >
                                X
                              </p>
                            </div>
                          ))}

                          {/* File Input for New Image */}
                          <label className="border-dashed border-2 border-gray-300 p-2 relative cursor-pointer">
                            <div className="flex flex-col items-center justify-center w-16 h-16">
                              <img
                                src="/upload-icon.png"
                                alt="Upload Icon"
                                className="w-6 h-6"
                              />
                              <input
                                type="file"
                                onChange={(e) => {
                                  if (e.target.files[0]) {
                                    setImages((prev) => [
                                      ...prev,
                                      e.target.files[0],
                                    ])
                                  }
                                }}
                                hidden
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-md p-5 space-y-4 mt-5">
                      <div className="flex gap-[2%]">
                        <div className="w-[49%] space-y-3">
                          <p>Category</p>
                          <select
                            onChange={(e) => setCategory(e.target.value)}
                            className="outline-none pl-4 py-2.5 w-full rounded-lg"
                            value={category}
                            required
                          >
                            <option value="">Select category</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Kids">Kids</option>
                          </select>
                        </div>
                        <div className="w-[49%] space-y-3">
                          <p>Sub Category</p>
                          <select
                            onChange={(e) => setSubCategory(e.target.value)}
                            className="outline-none pl-4 py-2.5 w-full rounded-lg"
                            value={subCategory}
                            required
                          >
                            <option value="">Select category</option>
                            <option value="Topwear">Topwear</option>
                            <option value="Bottomwear">Bottomwear</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p>Sub Sub Category</p>
                        <select
                          onChange={(e) => setSubSubCategory(e.target.value)}
                          className="outline-none pl-4 py-2.5 w-full rounded-lg"
                          value={subSubCategory}
                          required
                        >
                          <option value="">Select category</option>
                          <option value="Full Sleeve T Shirt">
                            Full Sleeve T Shirt
                          </option>
                          <option value="Half Sleeve T Shirt">
                            Half Sleeve T Shirt
                          </option>
                          <option value="Hoodie">Hoodie</option>
                          <option value="Jaket">Jaket</option>
                          <option value="Jeans">Jeans</option>
                          <option value="Panjabi">Panjabi</option>
                          <option value="Polo T Shirt">Polo T Shirt</option>
                          <option value="Trouser">Trouser</option>
                        </select>
                      </div>
                    </div>
                    {sizes.length > 0 && (
                      <div className="bg-gray-100 rounded-md p-5 space-y-4 mt-5">
                        <div className="flex gap-[2%]">
                          <div className="w-full space-y-3">
                            <p>Manage Stock</p>
                            {sizes.map((size, index) => (
                              <div
                                className="flex justify-between items-center"
                                key={index}
                              >
                                <p className="w-[50%]">Size for {size}: </p>
                                <input
                                  type="number"
                                  value={stock[size] || ''}
                                  onChange={(e) =>
                                    setStock({
                                      ...stock,
                                      [size]: Number(e.target.value),
                                    })
                                  }
                                  className="outline-none pl-4 py-2.5 w-[30%] rounded-lg"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  {loading ? (
                    <button
                      type="submit"
                      className="bg-black text-white px-4 py-2.5 mt-8 rounded-lg flex items-center gap-2"
                      disabled
                    >
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="hds-flight-icon--animation-loading animate-spin"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <g fill="#fff" fillRule="evenodd" clipRule="evenodd">
                            {' '}
                            <path
                              d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                              opacity=".2"
                            ></path>{' '}
                            <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path>{' '}
                          </g>{' '}
                        </g>
                      </svg>
                      Processing...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-black text-white px-4 py-2.5 mt-8 rounded-lg"
                    >
                      Update Product
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProductModal
