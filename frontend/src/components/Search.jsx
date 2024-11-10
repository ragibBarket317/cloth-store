import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'
import { ShopContext } from '../context/ShopContext'

const Search = () => {
  const [visible, setVisible] = useState(false)
  const { showSearch, setShowSearch, searchText, setSearchText } =
    useContext(ShopContext)
  const location = useLocation()

  const handleCloseSearch = () => {
    setShowSearch(false)
    setSearchText('')
  }

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location])

  return (
    visible &&
    showSearch && (
      <div className="border-b bg-gray-50 text-center">
        <div className="inline-flex items-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-[35%]">
          <input
            type="text"
            placeholder="Search.."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1 outline-none bg-inherit text-sm"
          />
          <IoSearchOutline className="w-5 h-5" />
        </div>
        <span onClick={handleCloseSearch} className="cursor-pointer">
          X
        </span>
      </div>
    )
  )
}

export default Search
