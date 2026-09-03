const categoryModel = require("../models/categoryModel")

const createCategory = async (req, res) => {
    
    const {name, slug, images} = req.body

    const create = await categoryModel.create({
        name,
        slug,
        images
    })

    return res.status(201).json({message:'Your category data', create})
}

module.exports = {createCategory}