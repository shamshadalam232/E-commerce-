const express = require('express')
const { register, login, logout, getUser, editProfileUser } = require('../controllers/authControllers')
const authMiddleware = require('../middleware/auth.middleware')

const auth = express.Router()

//user login logout and register
auth.post('/register', register)
auth.post('/login', login)
auth.post('/logout',authMiddleware, logout)

//user getUser patchUser

auth.get('/me',authMiddleware, getUser)
auth.patch('/profile', authMiddleware, editProfileUser) 


module.exports = auth