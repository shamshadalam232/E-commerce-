const mongoose = require('mongoose')

const mongoDbConnect = async(req, res) => {
    mongoose.connect(process.env.MONGO_URL)
    console.log('database connected')
}

module.exports = mongoDbConnect