import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { backendURL } from '../App'
import { MdOutlineSell } from 'react-icons/md'
import { BsBox } from 'react-icons/bs'
import { RiAlignItemLeftLine } from 'react-icons/ri'
import BarChart from '../components/BarChart'
import DoughnutChart from '../components/DoughnutChart'

const Overview = ({ token }) => {
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])
  const [reviews, setReviews] = useState([])

  const fetchAllProduct = async () => {
    try {
      const response = await axios.get(backendURL + '/api/product/all')
      if (response.data.success === true) {
        setProducts(response.data.products)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const fetchAllOrders = async () => {
    if (!token) {
      return null
    }
    try {
      const response = await axios.post(
        backendURL + '/api/order/list',
        {},
        { headers: { token } }
      )
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const fetchPandingReview = async () => {
    try {
      const response = await axios.get(backendURL + '/api/review/pending', {
        headers: { token },
      })
      if (response.data.success) {
        setReviews(response.data.pendingReviews.reverse())
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const totalSell = orders.reduce((total, order) => {
    return total + order.amount
  }, 0)

  useEffect(() => {
    fetchAllProduct()
    fetchAllOrders()
    fetchPandingReview()
  }, [])
  return (
    <div>
      <h2 className="prata-regular font-medium text-xl mb-5">Overview</h2>
      <div className="flex gap-5">
        <div className="w-[70%] h-[600px] flex flex-col gap-5">
          <div className="flex gap-5 ">
            <div className="w-1/3 border h-[150px] p-5 bg-gray-100 shadow-md rounded-lg">
              <div className="mb-5 flex items-center gap-2">
                <div className="bg-gray-800 rounded-full text-white p-2">
                  <MdOutlineSell className="w-5 h-5" />
                </div>
                <h2 className="font-medium text-md text-gray-700">
                  Total Sell
                </h2>
              </div>
              <p className="font-bold text-[18px] text-center">
                {totalSell} TK
              </p>
            </div>
            <div className="w-1/3 border h-[150px] p-5 bg-gray-100 shadow-md rounded-lg">
              <div className="mb-5 flex items-center gap-2">
                <div className="bg-gray-800 rounded-full text-white p-2">
                  <BsBox className="w-5 h-5" />
                </div>
                <h2 className="font-medium text-md text-gray-700">
                  Total Orders
                </h2>
              </div>
              <p className="font-bold text-[18px] text-center">
                {orders.length}
              </p>
            </div>
            <div className="w-1/3 border h-[150px] p-5 bg-gray-100 shadow-md rounded-lg">
              <div className="mb-5 flex items-center gap-2">
                <div className="bg-gray-800 rounded-full text-white p-2">
                  <RiAlignItemLeftLine className="w-5 h-5" />
                </div>
                <h2 className="font-medium text-md text-gray-700">
                  Total Product
                </h2>
              </div>
              <p className="font-bold text-[18px] text-center">
                {products.length}
              </p>
            </div>
          </div>
          <div className="border h-[500px] bg-gray-100 p-5 shadow-md rounded-lg">
            <BarChart />
          </div>
        </div>
        <div className="w-[30%] h-[600px] flex flex-col gap-5">
          <div className="h-1/2  border bg-gray-100 shadow-md rounded-lg p-5">
            <h1 className="font-medium text-lg text-gray-700 mb-2">
              Product Distribution
            </h1>
            <DoughnutChart />
          </div>
          <div className="h-1/2 border bg-gray-100 shadow-md rounded-lg p-5">
            <h2 className="font-medium text-lg text-gray-700 mb-2">
              Latest Pending Reviews
            </h2>
            <div>
              <div className="grid grid-cols-[1fr_1fr] gap-3 items-center bg-gray-300 p-2">
                <div>
                  <p>Review</p>
                </div>
                <div>
                  <p>Status</p>
                </div>
              </div>
              {reviews.length > 0 ? (
                <div>
                  {reviews?.map((review, index) => (
                    <div
                      key={review._id}
                      className={`grid grid-cols-[1fr_1fr] gap-3 items-center p-4 ${
                        index % 2 === 0 ? '' : 'bg-gray-50'
                      }`}
                    >
                      <p>{review.comment}</p>

                      <p className="capitalize text-red-500">{review.status}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-5 text-center">
                  <p>No reviews found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
