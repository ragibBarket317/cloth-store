import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const ReviewModal = ({ closeModal, productId }) => {
  const { backendURL, token } = useContext(ShopContext)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)

  const submitReview = async () => {
    try {
      setLoading(true)
      const response = await axios.post(
        backendURL + '/api/review/add',
        {
          productId,
          rating,
          comment,
        },
        {
          headers: { token },
        }
      )
      if (response.data.success) {
        setLoading(false)
        toast.success(response.data.message)
        closeModal()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-[80%] sm:w-full">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-bold">Give Your Review</h3>
        </div>
        <div className="p-6">
          <div className="text-gray-700">
            <div>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="0">Review Rating</option>
                {[1, 2, 3, 4, 5].map((star) => (
                  <option key={star} value={star}>
                    {star} Star
                  </option>
                ))}
              </select>
            </div>
            <div>
              <textarea
                placeholder="Write a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-5"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-end px-6 py-4 border-t border-gray-200">
          <button
            onClick={closeModal}
            className="bg-black text-white px-4 py-2.5  rounded-lg flex items-center gap-2"
          >
            Close
          </button>
          {loading ? (
            <button
              type="submit"
              className="bg-black text-white px-4 py-2.5 rounded-lg flex items-center gap-2 ml-2"
              disabled
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="hds-flight-icon--animation-loading animate-spin"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g fill="#fff" fillRule="evenodd" clipRule="evenodd">
                    {' '}
                    <path
                      d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                      opacity=".2"
                    ></path>{' '}
                    <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path>{' '}
                  </g>{' '}
                </g>
              </svg>
              Processing...
            </button>
          ) : (
            <button
              onClick={submitReview}
              className="bg-black text-white px-4 py-2.5  rounded-lg flex items-center gap-2 ml-2"
              disabled={rating === 0 || comment === ''}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReviewModal
