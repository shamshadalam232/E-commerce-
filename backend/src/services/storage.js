require('dotenv').config()
const cloudinary = require('cloudinary').v2
const {  CloudinaryStorage  } = require('multer-storage-cloudinary')


console.log("CLOUD NAME:", process.env.CLOUD_NAME)
console.log("API KEY:", process.env.CLOUDINARY_KEY)
console.log("SECRET:", process.env.CLOUDINARY_SECRET ? "Present" : "Missing")


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDNARY_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:'image',
        allowed_Formats:['jpeg','png','jpg']
    }
})

module.exports = {storage}