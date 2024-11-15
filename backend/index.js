import express from 'express'
import cors from 'cors'
import 'dotenv/config'

//App Config
const app = express()
const port = process.env.PORT || 4000

//Middleware
app.use(express.json())
app.use(cors())

// API End points

app.get('/', (req, res) => {
  res.send('API is working')
})

app.listen(port, () => console.log('Server started on port: ' + port))
