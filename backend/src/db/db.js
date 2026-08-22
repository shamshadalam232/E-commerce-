require('dotenv').config()
const mongoose = require('mongoose')

const mongoDbConnect = async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('database connected')
}

module.exports = mongoDbConnect