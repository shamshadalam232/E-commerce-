const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    slug:{
        type:String,
        require: true
    },
    images:{
        type:String
    }
})

const categoryModel = mongoose.model('category', categorySchema)

module.exports = categoryModel