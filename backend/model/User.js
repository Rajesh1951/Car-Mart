const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
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
  fuel: {
    type: String,
    required: true
  },
  vehicleType: {
    type: String,
    required: true
  },
  seats: {
    type: String,
    required: true
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
  },
  Km: {
    type: Number,
    required: true
  },
  Scratches: {
    type: Number,
    required: true
  },
  paint: {
    type: String,
    required: true
  },
  accidents: {
    type: Number,
    required: true
  },
  previousBuyers: {
    type: Number,
    required: true
  },
  registrationPlace: {
    type: String,
    required: true
  }
});

const User = mongoose.model('UserList', UserSchema);
module.exports = User;