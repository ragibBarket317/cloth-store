import express from 'express'
import {
  adminLogin,
  deleteUser,
  getAllUser,
  loginUser,
  registerUser,
} from '../controllers/userController.js'
import adminAuth from '../middleware/adminAuth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)
userRouter.get('/all', getAllUser)
userRouter.post('/remove', adminAuth, deleteUser)

export default userRouter
