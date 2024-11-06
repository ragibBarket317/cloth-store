import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="border-b border-gray-200 px-[5%] py-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="prata-regular text-2xl font-extrabold">CLOTH_STORE</h1>
        </div>
        <div>
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
      </div>
    </div>
  )
}

export default Navbar
