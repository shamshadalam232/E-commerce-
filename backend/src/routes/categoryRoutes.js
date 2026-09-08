const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const { adminroleMiddleware } = require('../middleware/roleMiddleware')
const { createCategory, getCategoryFunction, getCategoryById } = require('../controllers/categoryController')

const category = express.Router()  

category.post('/admin/category', authMiddleware, adminroleMiddleware, createCategory)
category.get('/category', authMiddleware, getCategoryFunction)
category.get('/category/:id', authMiddleware, getCategoryById)

module.exports = category