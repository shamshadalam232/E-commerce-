const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
    },
    slug:{
        type:String
    },
    images:{
        type:String
    }
})

const categoryModel = mongoose.model('category', categorySchema)

module.exports = categoryModel