const productModel = require("../models/productionModel")

const createProduct = async(req, res) => {

    const {name, description, price, discountPrice, images, category, brand, stock, rating, numReviews} = req.body

    const createProduct1 = await productModel.create({
        name,
        description,
        price,
        discountPrice,
        images,
        category,
        brand,
        stock,
        rating,
        numReviews,
    })

    return res.status(201).json({message:"your product crated successfully", createProduct1})
}

const getProductData = async (req, res) => {

    const getProduct = await productModel.find()
    .populate("category")

    return res.status(201).json({message:'Product here', getProduct})
    
}

const getSingleProduct = async (req, res) => {

    const singleProduct = req.params.id 

    const getProduct = await productModel.findById(singleProduct)

    return res.status(200).json({message:'your single data', getProduct})
    
}



module.exports = { createProduct, getProductData, getSingleProduct }