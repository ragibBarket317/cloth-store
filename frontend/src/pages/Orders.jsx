import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
  const { products } = useContext(ShopContext)
  return (
    <div className="mt-10">
      <div>
        <h2 className="text-lg font-medium">My Orders</h2>
      </div>
    </div>
  )
}

export default Orders
