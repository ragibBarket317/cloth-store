import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Login = () => {
  const { navigate, backendURL, token, setToken } = useContext(ShopContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()

  const from = location?.state?.from?.pathname || '/'

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(backendURL + '/api/user/login', {
        email,
        password,
      })
      if (response.data.success === true) {
        console.log(response.data.token)
        toast.success('Login successfully')
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        navigate(from, { replace: true })
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  return (
    <div>
      <div className="flex justify-center min-h-[500px] items-center">
        <div className="w-[30%] shadow-md py-8 px-6">
          <h1 className="text-center text-xl prata-regular font-semibold mt-3 mb-5">
            Login
          </h1>
          <form onSubmit={handleSubmit} action="">
            <div className="space-y-5">
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
                  Login
                </button>
              </div>
              <div>
                <p className="text-[13px] text-center mt-[-10px]">
                  New to the website?{' '}
                  <span
                    onClick={() => navigate('/register')}
                    className="text-blue-800 cursor-pointer"
                  >
                    Please registration
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

export default Login
