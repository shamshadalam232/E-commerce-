const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const {name, email, phone, password, role} = req.body

  const check = await userModel.findOne({
    $or:[
        {email:email}
    ]
  })

  if(check){
    res.status(200).json({message:'you allready created Account'})
  }

  if(!password){
    return res.status(401).json({message:"plzz create paasword"})
  }

  const salt = 10

  const hashPaasword = await bcrypt.hash(password, salt)

  const createUser = await userModel.create ({
      name,
      email,
      phone,
      password:hashPaasword,
      role
  })

  const token = jwt.sign({id:createUser._id}, process.env.SECRET_KEY,{expiresIn:"2d"})

  res.cookie('token', token,{
    httpOnly:true,
    secure:false,
    sameSite:'lax'
  })

  return res.status(201).json({message:'welcome! Your account created successfully', createUser})

}

const login = async (req, res) => {

  const {email, password} = req.body

  const check = await userModel.findOne({
    $or: [
      {email:email}
    ]
  })

  if(!check){
    return res.status(404).json({message:"you are not created Account"})
  }

  const comparePaasword = await bcrypt.compare(password,check.password)

  if(!comparePaasword){
    return res.status(400).json({message:'Plzz enter correct paasword'})
  }

  const token = jwt.sign({id:check._id}, process.env.SECRET_KEY,{expiresIn:"2d"})

  res.cookie('token', token,{
     httpOnly:true,
     secure:true,
     sameSite:'lax'
  })

  return res.status(201).json({message:"Welcome back", check})

}

const logout = async (req, res) => {

  res.clearCookie("token")

  return res.status(200).json({
    message: "logout successful"
  })
}


const getUser = async (req, res) => {

  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    })
  }

  const decoded = jwt.verify(token, process.env.SECRET_KEY)

  const userId = decoded.id

  const findUser = await userModel.findById(userId)

  if (!findUser) {
    return res.status(404).json({
      message: "user not register"
    })
  }

  return res.status(200).json({
    message: "here your data",
    findUser
  })
}

const editProfileUser = async(req, res) => {

  const user = req.user
     
  const {phone, role} = req.body

  const findUserAndUpdate = await userModel.findOneAndUpdate({user} , req.body, {new:true});

  if(!findUserAndUpdate){
    return res.status(403).json({message:'Your Data Not Found!'})
  }

  return res.status(200).json({message:'your Profile updated', findUserAndUpdate})

}

module.exports = {register, login, logout, getUser, editProfileUser}