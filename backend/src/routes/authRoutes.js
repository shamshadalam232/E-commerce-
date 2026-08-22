const express = require('express')
const { register, login, logout } = require('../controllers/authControllers')

const auth = express.Router()

auth.post('/register', register)
auth.post('/login', login)
auth.post('/logout', logout)

module.exports = auth