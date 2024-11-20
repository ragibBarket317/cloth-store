import axios from 'axios'
import { toast } from 'react-toastify'
import { backendURL } from '../App'
import { useEffect, useState } from 'react'

const List = ({ token }) => {
  const [products, setProducts] = useState([])
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
        <div>
          <p>Action</p>
        </div>
      </div>
      <div>
        {products.map((product) => (
          <div
            key={product._id}
            className="grid grid-cols-5 gap-3 items-center p-3"
          >
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{product.stock.S}</p>
            <p>{product.regularPrice}</p>
            <p
              onClick={() => deleteProduct(product._id)}
              className="cursor-pointer"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
