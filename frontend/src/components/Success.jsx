import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to the home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/orders')
    }, 5000)

    return () => clearTimeout(timer) // Cleanup timer on component unmount
  }, [navigate])
  return (
    <div className="flex h-screen items-center justify-center bg-gary-50 mt-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 prata-regular">
          Payment Successful!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Thank you for your payment. Your transaction was completed
          successfully.
        </p>
      </div>
    </div>
  )
}

export default Success
