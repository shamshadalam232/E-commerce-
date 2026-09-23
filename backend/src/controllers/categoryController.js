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

const getCategoryFunction = async (req, res) => {

    const getCategory = await categoryModel.find()

    return res.status(201).json({message:'total category here', getCategory})
}

const getCategoryById = async (req, res) => {

    const getCategory_Id = req.params.id

    const getCategory = await categoryModel.findById(getCategory_Id)

    return res.status(201).json({message: 'category by id', getCategory})
    
}

const getCategoryDelelte  = async (req, res) => {

    const getCategory_Id = req.params.id

    const getCategorydeletethis = await categoryModel.findByIdAndDelete(getCategory_Id)

    return res.status(201).json({message:"your category deleted"})
    
}

module.exports = {createCategory, getCategoryFunction, getCategoryById, getCategoryDelelte}