const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: false
  },
  year: {
    type: Number,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  colors: {
    type: String,
    required: false
  },
  mileage: {
    type: Number,
    required: false
  },
  power: {
    type: Number,
    required: false
  },
  maxSpeed: {
    type: Number,
    required: false
  },
  model: {
    type: String,
    required: false
  },
  Km: {
    type: Number,
    required: false
  },
  Scratches: {
    type: Number,
    required: false
  },
  paint: {
    type: String,
    required: false
  },
  accidents: {
    type: Boolean,
    required: false
  },
  previousBuyers: {
    type: Number,
    required: false
  },
  registrationPlace: {
    type: String,
    required: false
  }
});

const User = mongoose.model('UserList', UserSchema);
module.exports = User;