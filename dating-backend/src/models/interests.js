const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  name:
  {
    type: String,
    required: true
  },
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Interests', listSchema);