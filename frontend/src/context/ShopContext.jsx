import { createContext } from 'react'
import { products } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const currency = '৳'
  const value = {
    products,
    currency,
    navigate,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export default ShopContextProvider
