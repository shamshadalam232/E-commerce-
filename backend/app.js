const express = require('express')
const auth = require('./src/routes/authRoutes')

const app = express()


auth.use('/api/users', auth)



module.exports = app