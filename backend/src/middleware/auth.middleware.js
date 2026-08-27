const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const authMiddleware = async (req, res, next) => {

    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({
            message:"you are not authorized"
        })
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY)

    const findDecodedId = await userModel.findById(decoded.id)

    if(!findDecodedId){
        return res.status(401).json({message:"you are unauthorized"})
    }

    req.userModel = findDecodedId

    next()
}

module.exports = authMiddleware