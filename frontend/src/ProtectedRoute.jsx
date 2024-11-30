import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { ShopContext } from './context/ShopContext'

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(ShopContext)
  const location = useLocation()
  console.log('tkn', token)
  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

export default ProtectedRoute
