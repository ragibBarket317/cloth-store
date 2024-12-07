import { createContext, useEffect, useState } from 'react'
// import { products } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [token, setToken] = useState('')
  const [products, setProducts] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [cartItems, setCartItems] = useState({})
  const backendURL = import.meta.env.VITE_BACKEND_URL
  const currency = '৳'
  const delivery_fee = 60

  console.log(token)

  const addToCart = async (itemId, size) => {
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
    if (token) {
      try {
        await axios.post(
          backendURL + '/api/cart/add',
          { itemId, size },
          { headers: { token } }
        )
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
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

  const updateCart = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems)

    cartData[itemId][size] = quantity
    setCartItems(cartData)
    if (token) {
      try {
        await axios.post(
          backendURL + '/api/cart/update',
          { itemId, size, quantity },
          { headers: { token } }
        )
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
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

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendURL + '/api/product/all')
      if (response.data.success) {
        setProducts(response.data.products)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendURL + '/api/cart/get',
        {},
        {
          headers: { token },
        }
      )

      if (response.data.success === true) {
        setCartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
      getUserCart(localStorage.getItem('token'))
    }
  }, [token])

  useEffect(() => {
    getProductsData()
  }, [])
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
    setCartItems,
    updateCart,
    delivery_fee,
    getTotalAmmount,
    backendURL,
    token,
    setToken,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export default ShopContextProvider
