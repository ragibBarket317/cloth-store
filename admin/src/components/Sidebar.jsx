import { NavLink } from 'react-router-dom'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { CiCircleList } from 'react-icons/ci'
import { LuUsers2 } from 'react-icons/lu'
import { GoCodeReview } from 'react-icons/go'
import { BsBox2 } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen pl-8 pr-4 border-r-2">
      <div className="flex flex-col gap-4 mt-4">
        <NavLink to="/" className="px-3 py-1.5 flex items-center gap-2">
          <HiOutlineSquares2X2 className="w-5 h-5" />
          Overview
        </NavLink>
        <NavLink to="/add" className="px-3 py-1.5 flex items-center gap-2 ">
          <AiOutlinePlusCircle className="w-5 h-5" />
          Add Product
        </NavLink>
        <NavLink to="/list" className="px-3 py-1.5 flex items-center gap-2">
          <CiCircleList className="w-5 h-5" />
          Product List
        </NavLink>
        <NavLink to="/users" className="px-3 py-1.5 flex items-center gap-2">
          <LuUsers2 className="w-5 h-5" />
          Users
        </NavLink>
        <NavLink to="/reviews" className="px-3 py-1.5 flex items-center gap-2">
          <GoCodeReview className="w-5 h-5" />
          Reviews
        </NavLink>
        <NavLink to="/orders" className="px-3 py-1.5 flex items-center gap-2">
          <BsBox2 className="w-5 h-5" />
          Orders
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
