import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const NewArrival = () => {
  const { products } = useContext(ShopContext)
  const [newArrival, setNewArrival] = useState([])

  useEffect(() => {
    setNewArrival(products.slice(0, 20))
  }, [products])

  return (
    <div className="mb-10">
      <div>
        <div className="bg-gray-200 py-5 mt-10 mb-5">
          <h1 className="text-2xl prata-regular font-bold text-center">
            New Arrival
          </h1>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center">
            {newArrival.map((product) => (
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
    </div>
  )
}

export default NewArrival
