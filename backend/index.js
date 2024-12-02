import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

//App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// List of allowed origins
const allowedOrigins = [
  'https://cloth-store-smoky.vercel.app',
  'https://cloth-store-admin-nine.vercel.app',
]

// Custom CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true)

      if (allowedOrigins.includes(origin)) {
        callback(null, true) // Origin is allowed
      } else {
        callback(new Error('Not allowed by CORS')) // Origin is not allowed
      }
    },
  })
)

// API End points
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
  res.send('API is working')
})

app.listen(port, () => console.log('Server started on port: ' + port))
