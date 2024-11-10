import React from 'react'
import { useLocation } from 'react-router-dom'

const Search = () => {
  const location = useLocation()
  console.log(location.pathname)
  return location.pathname === '/collection' && <div>Search</div>
}

export default Search
