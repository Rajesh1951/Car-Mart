const User = require('../model/User')
const OEM_Specs = require('../model/OEM_Spec');
const UserAuthModel = require('../model/userAuth');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
require('mongoose')

const createToken = (id) => {
  return jwt.sign({ id }, 'secret');
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
    const token = createToken(user._id);
    // console.log(token)
    res.cookie('jwt', token, {
      sameSite: 'lax',
      httpOnly: true,
      secure: false,
    });
    res.send(user._id);
    // res.redirect('http://localhost:3000')
  }
  catch (error) {
    res.json({ error: error.message });
  }
}
const signup = async (email, password) => {
  console.log((email), (password))
  try {
    const existUser = await UserAuthModel.findOne({ email });
    if (existUser) {
      throw Error("User already exists");
    }
    const newUser = new UserAuthModel({
      email,
      password
    });
    newUser.password = bcrypt.hashSync(password, 10);
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
    res.cookie('jwt', createToken(result._id), {
      sameSite: 'lax',
      httpOnly: true,
      secure: false,
    });
    res.send(result)
  }
  catch (error) {
    res.json({ error: error.message })
  }
}

module.exports.dealer_list = async (req, res) => {
  console.log('cookies is', req.cookies)
  try {
    const list = await OEM_Specs.find();
    res.json(list);
  }
  catch (err) {
    res.send(err)
  }
}

module.exports.customer_list = async (req, res) => {
  console.log('indexError', req.cookies)
  try {
    const list = await User.find();
    res.json(list);
  }
  catch (err) {
    res.send(err)
  }
}

module.exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.send('logged out');
}

module.exports.loggedIn = (req, res) => {
  const token = req.cookies?.jwt;
  if (!token) {
    res.json(false);
    console.log('no token')
    return;
  }
  jwt.verify(token, 'secret', (err, decodedToken) => {
    if (err) {
      console.error('logged', err);
      res.json(false);
    }
    else {
      res.json(true);
    }
  })
}