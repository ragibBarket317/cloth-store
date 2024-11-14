import { createContext, useEffect, useState } from 'react'
import { products } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [cartItems, setCartItems] = useState({})
  const currency = '৳'
  const delivery_fee = 10

  const addToCart = (itemId, size) => {
    let cartData = structuredClone(cartItems)

    if (!size) {
      return toast.error('Please select size!')
    }

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1
      } else {
        cartData[itemId][size] = 1
      }
    } else {
      cartData[itemId] = {}
      cartData[itemId][size] = 1
    }
    setCartItems(cartData)
  }

  const getCartCount = () => {
    let totalCartItem = 0
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        totalCartItem += cartItems[items][item]
      }
    }
    return totalCartItem
  }

  const updateCart = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems)

    cartData[itemId][size] = quantity
    setCartItems(cartData)
  }

  const getTotalAmmount = () => {
    let totalAmmount = 0
    for (const items in cartItems) {
      const productData = products.find((product) => product._id === items)
      for (const item in cartItems[items]) {
        totalAmmount += productData.regularPrice * cartItems[items][item]
      }
    }

    return totalAmmount
  }

  useEffect(() => {
    getCartCount()
  }, [cartItems])

  const value = {
    products,
    currency,
    navigate,
    showSearch,
    setShowSearch,
    searchText,
    setSearchText,
    addToCart,
    getCartCount,
    cartItems,
    updateCart,
    delivery_fee,
    getTotalAmmount,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export default ShopContextProvider
