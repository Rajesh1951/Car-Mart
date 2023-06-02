const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt')
const UserAuth = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'Enter valid email']
  },
  password: {
    type: String,
    required: true
  }
})
// UserAuth.pre('save', async function (next) {
//   // const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });
UserAuth.statics.login = async function login(email, password) {
  try {
    const user = await this.findOne({ email });
    // console.log(user)
    if (user) {
      const compare = await bcrypt.compare(password, user.password)
      console.log(compare)
      if (compare) {
        // console.log(user)
        return user;
      }
      throw new Error('wrong password');
    }
    throw new Error('invalid email');
  }
  catch (error) {
    // console.log(error)
    throw error;
  }
}

const UserAuthModel = new mongoose.model('UserAuth', UserAuth);

module.exports = UserAuthModel;