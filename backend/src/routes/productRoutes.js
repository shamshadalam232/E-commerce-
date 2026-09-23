const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const { adminroleMiddleware, userroleMiddleWare } = require('../middleware/roleMiddleware')
const { createProduct, getProductData, getSingleProduct, deleteSingleProduct } = require('../controllers/productController')
const upload = require('../middleware/upload')

const product = express.Router()

product.post('/products', authMiddleware, adminroleMiddleware,upload.single('images'), createProduct)
product.get('/public/product', getProductData)
product.get('/product/:id', getSingleProduct)
product.delete('/product/:id', deleteSingleProduct)


module.exports = product