const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  brandName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  fuel:{
    type:String,
    required:true
  },
  vehicleType:{
    type:String,
    required:true
  },
  seats:{
    type:String,
    required:true
  },
  colors: {
    type: String,
    required: true
  },
  mileage: {
    type: String,
    required: true
  },
  ratings: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

const OEM_Specs = mongoose.model('Vehicles', vehicleSchema);

module.exports = OEM_Specs;
