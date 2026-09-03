const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const { adminroleMiddleware, userroleMiddleWare } = require('../middleware/roleMiddleware')
const { createProduct, getProductData, getSingleProduct } = require('../controllers/productController')

const product = express.Router()

product.post('/products', authMiddleware, adminroleMiddleware, createProduct)
product.get('/public/product', getProductData)
product.get('/product/:id', getSingleProduct)


module.exports = product