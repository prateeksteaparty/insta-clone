import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

// Schema
const loginSchema = new mongoose.Schema({
  username: String,
  password: String,
  loginAt: { type: Date, default: Date.now }
})

const Login = mongoose.model('Login', loginSchema)

// Route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  try {
    const entry = new Login({ username, password })
    await entry.save()
    res.json({ success: true, message: 'Saved to MongoDB' })
  } catch (err) {
    res.status(500).json({ success: false, error: err.message })
  }
})

app.listen(5000, () => console.log('Server running on port 5000'))