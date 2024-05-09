import 'dotenv/config'
import express from 'express'
import { Student } from './models/student.model.js'
import router from './routes/students.route.js'

const app = express()
const PORT = process.env.PORT || 3000

// MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use("/students", router)

app.listen(PORT, console.log(`listen on port ${PORT}`))



