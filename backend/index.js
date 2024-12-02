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

app.use(
  cors({
    origin: `${process.env.FRONTEND_URL}`, // Replace with your frontend URL
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
