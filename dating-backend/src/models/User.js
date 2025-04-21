const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String },
  photo: { type: String, },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phone: { type: String },
  gender: {type:String },
  location: {type:String },
  age: {type:Number },
  isVerified: { type: Boolean, default: false },
  preferences: 
{
  type:String,
  },
  isAdmin: { type: Boolean, default: false },
  authProvider: { 
    type: String, 
    enum: ['email', 'google', 'apple', 'phone'],
    default: 'email'
  },
  profileCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
