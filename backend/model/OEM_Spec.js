const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  image:{
    type:String,
    required:true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  colors: {
    type: String,
    required: true
  },
  mileage: {
    type: Number,
    required: true
  },
  power: {
    type: Number,
    required: true
  },
  maxSpeed: {
    type: Number,
    required: true
  }
});

const OEM_Specs = mongoose.model('Vehicles', vehicleSchema);

module.exports = OEM_Specs;
