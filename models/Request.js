const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  likes: { type: Number, default: 0 },
  status: {
    type: String,
    default: 'Available',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('request', RequestSchema);
