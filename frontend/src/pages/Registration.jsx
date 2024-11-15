import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Registration = () => {
  const { navigate } = useContext(ShopContext)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, password)
  }
  return (
    <div>
      <div className="flex justify-center min-h-[500px] items-center">
        <div className="w-[30%] shadow-md py-8 px-6">
          <h1 className="text-center text-xl prata-regular font-semibold mt-3 mb-5">
            Register
          </h1>
          <form onSubmit={handleSubmit} action="">
            <div className="space-y-5">
              <div>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-none border py-2 px-4 rounded-lg w-full"
                  placeholder="Password"
                />
              </div>

              <div>
                <button className="bg-black text-white w-full px-4 py-2.5 active:bg-gray-700">
                  Register
                </button>
              </div>
              <div>
                <p className="text-[13px] text-center mt-[-10px]">
                  Already have an account?{' '}
                  <span
                    onClick={() => navigate('/login')}
                    className="text-blue-800 cursor-pointer"
                  >
                    Please Login
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration
