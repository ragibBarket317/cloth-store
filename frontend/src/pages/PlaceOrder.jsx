import { useContext, useState } from 'react'
import TotalCart from '../components/TotalCart'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const PlaceOrder = () => {
  const {
    navigate,
    backendURL,
    token,
    cartItems,
    setCartItems,
    getTotalAmmount,
    delivery_fee,
    products,
  } = useContext(ShopContext)
  const [method, setMethod] = useState('COD')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    phone: '',
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData((data) => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let orderItems = []

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            )
            if (itemInfo) {
              ;(itemInfo.size = item),
                (itemInfo.quantity = cartItems[items][item])
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getTotalAmmount() + delivery_fee,
      }

      const codCall = async () => {
        try {
          const response = await axios.post(
            backendURL + '/api/order/cod',
            orderData,
            { headers: { token } }
          )
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }

      switch (method) {
        case 'COD':
          codCall()
          break

        default:
          break
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mt-10 mb-10">
        <div className="flex justify-between gap-3">
          <div className="w-[40%]">
            <h2 className="text-xl font-medium mb-5">Your Information</h2>

            <div className="space-y-5">
              <div className="flex gap-3">
                <input
                  type="text"
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={onChangeHandler}
                />
                <input
                  type="text"
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <input
                  type="email"
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={onChangeHandler}
                />
                <input
                  type="text"
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <input
                  type="number"
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
          </div>
          <div className="w-[35%]">
            <h2 className="text-xl font-medium mb-5">Total Cart</h2>
            <TotalCart />
            <h2 className="text-lg font-medium mt-5 mb-5">
              Select Payment Method
            </h2>
            <div className="flex gap-[2%]">
              <div
                onClick={() => setMethod('SSL')}
                className="w-[49%] border px-2 py-2 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-[10%]">
                    <p
                      className={`border w-3.5 h-3.5 rounded-full ${
                        method === 'SSL' ? 'bg-green-500' : ''
                      }`}
                    ></p>
                  </div>
                  <div className="w-[90%]">
                    <img
                      src="/sslcommerz1.png"
                      alt=""
                      className="w-full h-14 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div
                onClick={() => setMethod('COD')}
                className="w-[49%] border px-2 py-2 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-[10%]">
                    <p
                      className={`border w-3.5 h-3.5 rounded-full ${
                        method === 'COD' ? 'bg-green-500' : ''
                      }`}
                    ></p>
                  </div>
                  <div className="w-[90%]">
                    <img
                      src="/cod.jpg"
                      alt=""
                      className="w-full h-14 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full px-4 py-3 bg-black text-white active:bg-gray-700"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
