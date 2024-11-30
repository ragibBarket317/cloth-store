import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Reviews from './pages/Reviews'
import Overview from './pages/Overview'
import Users from './pages/Users'
import { useEffect, useState } from 'react'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const backendURL = import.meta.env.VITE_BACKEND_URL

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem('token') ? localStorage.getItem('token') : ''
  )

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])
  return (
    <div>
      <ToastContainer />
      {token === '' ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[75%] mx-auto mt-4">
              <Routes>
                <Route path="/" element={<Overview token={token} />} />
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/users" element={<Users token={token} />} />
                <Route path="/reviews" element={<Reviews token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App
