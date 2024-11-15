import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FaRegTrashAlt } from 'react-icons/fa'
import TotalCart from '../components/TotalCart'
import { toast } from 'react-toastify'

const Cart = () => {
  const {
    products,
    cartItems,
    currency,
    updateCart,
    navigate,
    getTotalAmmount,
  } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  const getCartData = () => {
    let tempData = []
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        tempData.push({
          _id: items,
          size: item,
          quantity: cartItems[items][item],
        })
      }
    }
    setCartData(tempData)
  }

  const handleProccedToCheckout = () => {
    if (getTotalAmmount() === 0) {
      return toast.error('Please add some product!')
    } else {
      navigate('/place-order')
    }
  }

  useEffect(() => {
    getCartData()
  }, [cartItems])
  return (
    <div className="mt-10 mb-10">
      <div>
        <h2 className="text-2xl font-medium">Your Cart</h2>
        <div className="mt-5">
          {cartData?.map((item, index) => {
            const productData = products?.find(
              (product) => product._id === item._id
            )

            return (
              <div key={productData._id} className="">
                <div className="flex flex-col sm:flex-row justify-between items-center border-t border-b p-4">
                  <div className="flex gap-3 w-full sm:w-[40%]">
                    <img
                      src={productData.image[0]}
                      alt=""
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h2>{productData.name}</h2>
                      <p>
                        {currency} {productData.regularPrice}
                      </p>
                      <p>Size: {item.size}</p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center gap-5 sm:flex-col sm:w-[20%] space-y-2">
                    <h2>Quantity</h2>
                    <input
                      type="number"
                      onChange={(e) =>
                        updateCart(item._id, item.size, Number(e.target.value))
                      }
                      defaultValue={item.quantity}
                      className="w-14 flex justify-between items-center gap-5 sm:flex-col sm:w-14 pl-2 space-y-2 outline-none border"
                    />
                  </div>
                  <div className="w-full flex justify-between items-center gap-5 sm:flex-col sm:w-[20%] space-y-2">
                    <h2>Subtotal</h2>
                    <p>
                      {currency} {productData.regularPrice * item.quantity}
                    </p>
                  </div>
                  <div>
                    <FaRegTrashAlt
                      onClick={() => updateCart(productData._id, item.size, 0)}
                      className="w-5 h-5 text-red-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-16 flex justify-between">
        <div></div>
        <div className="w-full sm:w-[30%]">
          <TotalCart />
          <button
            onClick={handleProccedToCheckout}
            className="px-4 py-2 bg-black text-white mt-10 active:bg-gray-700"
          >
            Procced To Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
