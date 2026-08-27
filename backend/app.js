const express = require('express')
const auth = require('./src/routes/authRoutes')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json())
app.use(cookieParser())

//register, login and logout api
app.use('/api/users', auth)



module.exports = app