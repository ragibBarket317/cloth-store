import { Link, NavLink } from 'react-router-dom'
import { IoSearchOutline, IoCartOutline, IoMenu } from 'react-icons/io5'
import { MdOutlineCancel } from 'react-icons/md'
import { LuUserCircle2 } from 'react-icons/lu'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { navigate, setShowSearch, getCartCount, token, setToken } =
    useContext(ShopContext)

  const handleSearch = () => {
    navigate('/collection')
    setShowSearch(true)
  }
  const handleLogout = () => {
    setToken('')
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div className="border-b border-gray-200 px-[3%] sm:px-[5%] py-5">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <h1 className="prata-regular text-lg sm:text-2xl font-extrabold">
              CLOTH_STORE
            </h1>
          </Link>
        </div>
        <div className="hidden sm:block">
          <ul className="flex gap-3">
            <NavLink to="/" className="text-gray-700 text-base uppercase">
              Home
              <hr className="w-1/2 h-[1.5px] mx-auto bg-gray-700 hidden" />
            </NavLink>
            <NavLink
              to="/collection"
              className="text-gray-700 text-base uppercase"
            >
              Collection
              <hr className="w-1/2 h-[1.5px] mx-auto  bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/about" className="text-gray-700 text-base uppercase">
              About
              <hr className="w-1/2 h-[1.5px] mx-auto  bg-gray-700 hidden" />
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 text-base uppercase"
            >
              Contact
              <hr className="w-1/2 h-[1.5px] mx-auto  bg-gray-700 hidden" />
            </NavLink>
          </ul>
        </div>
        <div className="flex gap-4">
          <IoSearchOutline
            onClick={handleSearch}
            className="w-5 h-5 cursor-pointer"
          />
          <div className="relative">
            <IoCartOutline
              onClick={() => navigate('/cart')}
              className="w-5 h-5 cursor-pointer"
            />
            <div className="absolute top-3 right-[-10px] bg-red-600 rounded-full w-5 h-5 text-white text-[12px] flex justify-center items-center">
              {getCartCount()}
            </div>
          </div>
          <div className="relative group">
            <LuUserCircle2
              onClick={() => navigate('/login')}
              className="w-5 h-5 cursor-pointer  "
            />
            {token && (
              <div className="absolute  px-4 py-3  top-[20px] right-[-5px] hidden group-hover:block">
                <div className="flex flex-col gap-3 w-36 bg-gray-200 rounded p-6">
                  <p className="cursor-pointer">My Profile</p>
                  <p
                    onClick={() => navigate('/orders')}
                    className="cursor-pointer"
                  >
                    Orders
                  </p>
                  <p onClick={handleLogout} className="cursor-pointer">
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
          <div>
            <IoMenu
              onClick={() => setVisible(true)}
              className="w-5 h-5 sm:hidden"
            />
          </div>
          <div
            className={`absolute top-0 bottom-0 right-0 overflow-hidden shadow-xl bg-white transition-all ${
              visible ? 'w-3/4' : 'w-0'
            }`}
          >
            <div className="px-2 py-3">
              <MdOutlineCancel
                onClick={() => setVisible(false)}
                className="w-6 h-6"
              />
              <div className="py-3 px-6">
                <ul className="flex flex-col gap-3">
                  <NavLink
                    to="/"
                    onClick={() => setVisible(false)}
                    className="text-gray-700 text-base uppercase p-2"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/collection"
                    onClick={() => setVisible(false)}
                    className="text-gray-700 text-base uppercase p-2"
                  >
                    Collection
                  </NavLink>
                  <NavLink
                    to="/about"
                    onClick={() => setVisible(false)}
                    className="text-gray-700 text-base uppercase p-2"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    onClick={() => setVisible(false)}
                    className="text-gray-700 text-base uppercase p-2"
                  >
                    Contact
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
