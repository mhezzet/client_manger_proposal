import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import config from 'config'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    maxlength: 50,
    minlength: 4,
    lowercase: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    maxlength: 1024,
    minlength: 3
  }
})

// generating JWT
userSchema.methods.genToken = function() {
  return jwt.sign(
    { _id: this._id, email: this.email },
    config.get('JWT_SECRET')
  )
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compare(password, this.password)
}

// hashing password before saving
userSchema.pre('save', async function() {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('user', userSchema)

export default User
