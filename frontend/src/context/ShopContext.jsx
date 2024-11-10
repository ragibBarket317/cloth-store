import { createContext, useState } from 'react'
import { products } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [cartItems, setCartItems] = useState({})
  const currency = '৳'

  const addToCart = (productId, size) => {}

  const value = {
    products,
    currency,
    navigate,
    showSearch,
    setShowSearch,
    searchText,
    setSearchText,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export default ShopContextProvider
