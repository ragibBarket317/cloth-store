import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const TotalCart = () => {
  const { getTotalAmmount, delivery_fee, currency } = useContext(ShopContext)
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>
          {currency} {getTotalAmmount()}.00
        </p>
      </div>
      <div className="flex justify-between">
        <p>Delivery Fee</p>
        <p>
          {currency} {delivery_fee}.00
        </p>
      </div>
      <hr />
      <div className="flex justify-between">
        <p>Total</p>
        <p>
          {currency}{' '}
          {getTotalAmmount() === 0 ? 0 : getTotalAmmount() + delivery_fee}.00
        </p>
      </div>
    </div>
  )
}

export default TotalCart
