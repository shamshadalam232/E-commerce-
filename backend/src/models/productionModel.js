const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String
    },
    price:{
        type:String
    },
    discountPrice:{
        type:String
    },
    images:{
        type:String
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    brand:{
        type:String
    },
    stock:{
        type:Number
    },
    rating:{
        type:String,
        enum:['1','2','3','4','5']
    },
    numReviews:{
        type:Number
    },
    isActive:{
        type:Boolean,
        default:true
    },
}, {
        timestamps:true
})

const productModel = mongoose.model('product', ProductSchema)

module.exports = productModel