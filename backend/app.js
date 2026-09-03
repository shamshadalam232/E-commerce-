const express = require('express')
const auth = require('./src/routes/authRoutes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const product = require('./src/routes/productRoutes')
const category = require('./src/routes/categoryRoutes')

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

//Product APIs — Public
app.use('/api/users', product)

//category APIs- Admin
app.use('/api/users', category)


module.exports = app