const User = require('../model/User')
const OEM_Specs = require('../model/OEM_Spec');
const UserAuthModel = require('../model/userAuth');
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')
require('mongoose')

const createToken= (id)=>{
  return jwt.sign({id},'secret');
}
module.exports.dealer_post = async (req, res) => {
  const userData = {
    "image": req.body.image,
    "model": req.body.model,
    "year": Number(req.body.year),
    "price": Number(req.body.price),
    "colors": req.body.colors,
    "mileage": Number(req.body.mileage),
    "power": Number(req.body.power),
    "maxSpeed": Number(req.body.maxSpeed),
    "Km": Number(req.body.Km),
    "Scratches": Number(req.body.Scratches),
    "accidents": Number(req.body.accidents),
    "previousBuyers": Number(req.body.previousBuyers),
    "registrationPlace": req.body.registrationPlace
  };
  try {
    const result = await User.create(userData)
    console.log(result)
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message })
  }
}

module.exports.service_post = async (req, res) => {
  console.log('first')
  try {
    const OEM_SpecsData = new OEM_Specs({
      "model": req.body.model,
      "image": req.body.image,
      "year": req.body.year,
      "price": req.body.price,
      "colors": req.body.colors,
      "mileage": req.body.mileage,
      "power": req.body.power,
      "maxSpeed": req.body.maxSpeed
    });
    const result = await OEM_SpecsData.save();
    console.log(result)
  }
  catch (error) {
    res.send(error);
  }
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserAuthModel.login(email, password);
    const token=createToken(user._id);
    // console.log(token)
    res.cookie('jwt', token, {
      sameSite: 'Lax',
      httpOnly: true,
      secure: false, // Set to true if using HTTPS, false if using HTTP
    });
    res.send(user._id);
    // res.redirect('http://localhost:3000')
  }
  catch (error) {
    res.json({ error: error.message });
  }
}
const signup = async (email, password) => {
  try {
    const existUser = await UserAuthModel.findOne({ email });
    if (existUser) {
      throw Error("User already exists");
    }
    // const newUser = new UserAuthModel({
    //   email,
    //   password
    // });
    const newUser=await UserAuthModel.create({email,password});
    const result = await newUser.save();
    return result;
  }
  catch (error) {
    throw error;
  }
}
module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await signup(email, password);
    res.send(result)
  }
  catch (error) {
    res.json({ error: error.message })
  }
}