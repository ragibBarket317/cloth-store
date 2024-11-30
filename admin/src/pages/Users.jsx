import axios from 'axios'
import { toast } from 'react-toastify'
import { backendURL } from '../App'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const Users = ({ token }) => {
  const [users, setUsers] = useState([])
  const getAllUser = async () => {
    try {
      const response = await axios.get(backendURL + '/api/user/all')
      if (response.data.success) {
        setUsers(response.data.allUser)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  const handleDeleteUser = async (id) => {
    try {
      const response = await axios.post(
        backendURL + '/api/user/remove',
        { id },
        { headers: { token } }
      )
      if (response.data.success) {
        toast.success('User deleted successfully')
        getAllUser()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(() => {
    getAllUser()
  }, [])
  return (
    <div>
      <h2 className="prata-regular font-medium text-xl mb-5">Users</h2>
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 items-center bg-gray-100 p-3">
        <div>
          <p>Name</p>
        </div>
        <div>
          <p>Email</p>
        </div>
        <div className="text-center">
          <p>Action</p>
        </div>
      </div>
      <div>
        {users.map((user) => (
          <div
            key={user._id}
            className="grid grid-cols-[1fr_1fr_1fr] gap-3 items-center p-3"
          >
            <div>
              <h2>{user.name}</h2>
            </div>
            <p>{user.email}</p>

            <div className="flex justify-center gap-2">
              <FaRegTrashAlt
                onClick={() => handleDeleteUser(user._id)}
                className="w-5 h-5 cursor-pointer hover:text-red-500 text-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
