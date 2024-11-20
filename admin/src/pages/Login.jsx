import { useState } from 'react'
import { backendURL } from '../App'
import axios from 'axios'

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(backendURL + '/api/user/admin', {
        email,
        password,
      })
      if (response.data.success === true) {
        setToken(response.data.token)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center w-full min-h-screen">
        <div className="w-[25%] bg-white rounded shadow-lg p-8">
          <h2 className="prata-regular font-semibold text-xl text-center">
            Admin Login
          </h2>
          <div className="mt-5">
            <form onSubmit={handleLogin} action="">
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="outline-none border px-4 py-2.5 w-full rounded-lg"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="outline-none border px-4 py-2.5 w-full rounded-lg"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-black text-white w-full px-4 py-2.5  rounded-lg"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
