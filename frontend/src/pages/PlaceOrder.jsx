import { useState } from 'react'
import TotalCart from '../components/TotalCart'

const PlaceOrder = () => {
  const [method, setMethod] = useState('COD')
  return (
    <div className="mt-10 mb-10">
      <div className="flex justify-between gap-3">
        <div className="w-[40%]">
          <h2 className="text-xl font-medium mb-5">Your Information</h2>
          <form action="">
            <div className="space-y-5">
              <div className="flex gap-3">
                <input
                  type="text"
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="First name"
                />
                <input
                  type="text"
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="Last name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="Email"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="Address"
                />
                <input
                  type="text"
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="City"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="Phone"
                />
              </div>
            </div>
          </form>
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
            <button className="w-full px-4 py-3 bg-black text-white active:bg-gray-700">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
