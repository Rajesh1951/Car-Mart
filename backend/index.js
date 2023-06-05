const express = require('express');
const mongoose = require('mongoose');
const OEM_Specs = require('./model/OEM_Spec');
const User = require('./model/User');
const cookieParser = require('cookie-parser')
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cookieParser())
const requireAuth = require('./middleware/requireAuth')
const appRoutes = require('./routes/appRoutes');
const axios = require('axios')
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

// const fetchList = async () => {
//   // const carList=req.body.data.cars.cars;
//   const colors = ['Black', 'Blue', 'Red', 'White', 'Maroon', 'Grey'];
//   const city = ['Bengaluru', 'Delhi', 'Chennai', 'Mumbai', 'Luckow', 'Kolkata'];
//   axios.get('http://localhost:400/dealer/list')
//     .then(result => {
//       console.log('result', result.data)
//       const list = result.data;
//       list.map(async (e) => {
//         try {
//           const obj = await User({
//             image: e.image,
//             model: e.model,
//             brandName: e.brandName,
//             price: e.price,
//             fuel: e.fuel,
//             vehicleType: e.vehicleType,
//             seats: e.seats,
//             colors: e.colors,
//             mileage: e.mileage,
//             ratings: e.ratings,
//             id: e.id,
//             Km: (Math.floor(Math.random() * (30000 - 3000)) + 3000),
//             Scratches: Math.floor(Math.random() * (10)),
//             paint: colors[Math.floor(Math.random() * 6)],
//             accidents: (Math.floor(Math.random() * 5)),
//             previousBuyers: (Math.floor(Math.random() * 3)),
//             registrationPlace: city[(Math.floor(Math.random() * 6))]

//           });
//           const result = await obj.save();
//         }
//         catch (err) {
//           console.log(err)
//         }
//       })
//       // res.json(result)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }
app.use(appRoutes)
app.listen(400, () => {
  console.log("listening @ 400")
});