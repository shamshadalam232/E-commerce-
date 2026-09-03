
const userroleMiddleWare = async(req, res, next) => {


    if(req.userModel.role !== "user"){
       return res.status(401).json({message:'you are unauthorized'})
    }

    next()
}

const adminroleMiddleware = async (req, res, next) => {


    if(req.userModel.role !== "admin"){
        return res.status(401).json({message: "you are unauthorized"})
    }

    next()
    
}

module.exports = {adminroleMiddleware, userroleMiddleWare}