import { toast } from 'react-toastify'
import axios from 'axios'
import { backendURL } from '../App'
import { useEffect, useState } from 'react'
import { FaRegTrashAlt, FaRegEdit, FaCheckSquare } from 'react-icons/fa'

const Reviews = ({ token }) => {
  const [reviews, setReviews] = useState([])
  const [editReview, setEditReview] = useState('')
  const [updateStatus, setUpdateStatus] = useState('')

  console.log('updateStatus', updateStatus)
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

  const handleEditReview = (id) => {
    const review = reviews.find((review) => review._id === id)
    setEditReview(review)
  }

  const handleUpdateStatus = async (id) => {
    try {
      const response = await axios.post(
        backendURL + '/api/review/approve',
        { reviewId: id, status: updateStatus },
        { headers: { token } }
      )
      if (response.data.success) {
        toast.success(response.data.message)
        fetchPandingReview()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleDeleteReview = async (id) => {
    try {
      const response = await axios.post(
        backendURL + '/api/review/delete',
        { reviewId: id },
        { headers: { token } }
      )
      if (response.data.success) {
        toast.success(response.data.message)
        fetchPandingReview()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchPandingReview()
  }, [])
  return (
    <div>
      <h2 className="prata-regular font-medium text-xl mb-5">Reviews</h2>
      <div className="grid grid-cols-[1fr_1fr_2fr_0.5fr_0.5fr] gap-3 items-center bg-gray-100 p-3">
        <div>
          <p>User Name</p>
        </div>
        <div>
          <p>Product Name</p>
        </div>
        <div>
          <p>Review</p>
        </div>
        <div>
          <p>Status</p>
        </div>
        <div className="text-center">
          <p>Action</p>
        </div>
      </div>
      {reviews.length > 0 ? (
        <div>
          {reviews?.map((review, index) => (
            <div
              key={review._id}
              className={`grid grid-cols-[1fr_1fr_2fr_0.5fr_0.5fr] gap-3 items-center p-4 ${
                index % 2 === 0 ? '' : 'bg-gray-50'
              }`}
            >
              <div>
                <h2>{review.userId.name}</h2>
              </div>
              <p>{review.productId.name}</p>
              <p>{review.comment}</p>
              {editReview._id === review._id ? (
                <select
                  onChange={(e) => setUpdateStatus(e.target.value)}
                  className="outline-none pl-4 py-2.5 w-full bg-gray-200 rounded-lg"
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                </select>
              ) : (
                <p className="capitalize text-red-500">{review.status}</p>
              )}

              <div className="flex justify-center gap-2">
                {editReview._id === review._id ? (
                  <FaCheckSquare
                    onClick={() => handleUpdateStatus(review._id)}
                    className="w-5 h-5 cursor-pointer hover:text-green-500 text-center"
                  />
                ) : (
                  <FaRegEdit
                    onClick={() => handleEditReview(review._id)}
                    className="w-5 h-5 cursor-pointer hover:text-green-500 text-center"
                  />
                )}
                <FaRegTrashAlt
                  onClick={() => handleDeleteReview(review._id)}
                  className="w-5 h-5 cursor-pointer hover:text-red-500 text-center"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-5 text-center">
          <p>No reviews found</p>
        </div>
      )}
    </div>
  )
}

export default Reviews
