import axios from 'axios'
import { toast } from 'react-toastify'
import { backendURL } from '../App'
import { useEffect, useState } from 'react'
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
import {} from 'react-icons/fa'
import UpdateProductModal from '../components/UpdateProductModal'

const List = ({ token }) => {
  const [products, setProducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editProductId, setEditProductId] = useState('')

  const openModal = (id) => {
    setIsModalOpen(true)
    setEditProductId(id)
  }
  const closeModal = () => setIsModalOpen(false)

  const fetchAllProduct = async () => {
    try {
      const response = await axios.get(backendURL + '/api/product/all')
      if (response.data.success === true) {
        setProducts(response.data.products)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const deleteProduct = async (id) => {
    try {
      const response = await axios.post(
        backendURL + '/api/product/remove',
        { id },
        { headers: { token } }
      )
      if (response.data.success === true) {
        fetchAllProduct()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllProduct()
  }, [])
  return (
    <div>
      <h2 className="prata-regular font-medium text-xl mb-5">
        All Product List
      </h2>
      <div className="grid grid-cols-5 gap-3 items-center bg-gray-100 p-3">
        <div>
          <p>Product Name</p>
        </div>
        <div>
          <p>Category</p>
        </div>
        <div>
          <p>Stock</p>
        </div>
        <div>
          <p>Price</p>
        </div>
        <div className="text-center">
          <p>Action</p>
        </div>
      </div>
      <div>
        {products.map((product) => (
          <div
            key={product._id}
            className="grid grid-cols-5 gap-3 items-center p-3"
          >
            <div className="flex items-center gap-2">
              <img
                className="w-12 h-12 object-cover"
                src={product.image[0]}
                alt=""
              />
              <h2>{product.name}</h2>
            </div>
            <p>{product.category}</p>
            <p>{product.stock.S}</p>
            <p>{product.regularPrice}</p>
            <div className="flex justify-center gap-2">
              <FaRegEdit
                onClick={() => openModal(product._id)}
                className="w-5 h-5 cursor-pointer text-green-500 text-center"
              />
              <FaRegTrashAlt
                onClick={() => deleteProduct(product._id)}
                className="w-5 h-5 cursor-pointer hover:text-red-500 text-center"
              />
              {isModalOpen && (
                <UpdateProductModal
                  closeModal={closeModal}
                  products={products}
                  editProductId={editProductId}
                  token={token}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
