const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true
    },
    email: {
        type:String,
        require: true
    },
    phone: {
        type:Number,
        require: true
    },
    role: {
        type:String,
        enum: ["user", "admin"]
    },
    password: {
        type:String,
        require: true
    },
    }, {
        timestamps:true  
    })

    const userModel = mongoose.model('user', UserSchema)

    module.exports = userModel