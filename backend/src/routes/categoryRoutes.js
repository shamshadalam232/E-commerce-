const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const { adminroleMiddleware } = require('../middleware/roleMiddleware')
const { createCategory } = require('../controllers/categoryController')

const category = express.Router()

category.post('/category', authMiddleware, adminroleMiddleware, createCategory)

module.exports = category