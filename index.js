import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectdb from './config/connectdb.js'
import userRoute from './routes/userRoutes.js'
import themeRoute from './routes/themeRoutes.js'

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 4000
connectdb()

app.use('/api/user', userRoute)
app.use('/api', themeRoute)

app.listen(PORT, () => console.log('Server running on ' + PORT))
