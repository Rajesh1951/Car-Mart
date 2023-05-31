const express = require('express');
const mongoose = require('mongoose');
const OEM_Specs = require('./model/OEM_Spec');
const { User } = require('./model/User');
const cookieParser = require('cookie-parser')
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cookieParser())
const requireAuth = require('./middleware/requireAuth')
const appRoutes = require('./routes/appRoutes');
// app.all('*', requireAuth);
app.use(express.urlencoded({ urlencoded: true }));

const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));

const connectionString = 'mongodb+srv://Rajesh:Rajesh@cluster0.ygbug2y.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(connectionString, {
})
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.get("/", (req, res) => {
  res.send("Hi from express");
})

// app.post("/service", async (req, res) => {
//   try {
//     const OEM_SpecsData = new OEM_Specs({
//       "model": req.body.model,
//       "image": req.body.image,
//       "year": req.body.year,
//       "price": req.body.price,
//       "colors": req.body.colors,
//       "mileage": req.body.mileage,
//       "power": req.body.power,
//       "maxSpeed": req.body.maxSpeed
//     });

//     const result = await OEM_SpecsData.save();
//     // console.log(result);
//   }
//   catch (error) {
//     res.send(error);
//   }
// })


app.get("/dealer/list",requireAuth, async (req, res) => {
  console.log('cookies is', req.cookies)
  try {
    const list = await OEM_Specs.find();
    res.json(list);
  }
  catch (err) {
    res.send(err)
  }
})

// user getting available list

app.get("/customer/list", requireAuth, async (req, res) => {
  console.log('indexError',req.cookies)
  try {
    const list = await User.find();
    res.json(list);
  }
  catch (err) {
    res.send(err)
  }
})
app.use(appRoutes)
app.listen(400, () => console.log("listening @ 400"));