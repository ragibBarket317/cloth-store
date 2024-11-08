import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext)
  return (
    <Link to={`/product/${id}`}>
      <div className="hidden sm:block relative group">
        <img src={image[0]} alt="" />
        <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%]">
          <div className="bg-gray-50 py-2">
            <h2 className="text-center text-[14px]">{name}</h2>
            <p className="text-center text-[12px]">
              {currency} {price}
            </p>
          </div>
        </div>
      </div>
      <div className="sm:hidden relative">
        <img src={image[0]} alt="" />
        <div className="w-[60%] text-center absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white py-1 rounded-tl-lg rounded-tr-lg">
            <p className="text-center text-[12px]">
              {currency} {price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
