import express from 'express'
import dotenv from 'dotenv/config'
import { router } from './routes/goalsRoutes.js'

const port = process.env.PORT
const app = express()
app.use('/api/goals', router)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => console.log(`Server started on port ${port}`))
