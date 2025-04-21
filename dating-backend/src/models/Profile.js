const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: { type: String },
  photo: { type: String },
  age: { type: Number },
  gender: { 
    type: String,
    enum: ['male', 'female', 'other']
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      default: [0, 0]
    },
    address: String
  },
  lookingFor: {
    type: String,
    enum: ['male', 'female', 'both']
  },
  interests: [{
    type: String
  }],
  fatherName: { type: String },
  fatherProfession: { type: String },
  religion: { type: String },
  photos: [{
    url: String,
    isProfile: Boolean
  }],
  videos: [{
    url: String,
    thumbnail: String
  }],
  verificationStatus: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create geospatial index for location
profileSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Profile', profileSchema); 