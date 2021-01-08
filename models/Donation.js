const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DonationSchema = new mongoose.Schema({
  user: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    fullname: {
      type: String,
    },
    username: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  name: {
    type: String,
    required: true,
  },
  images: [
    {
      imageURL: {
        type: String,
      },
    },
  ],
  location: {
    locationName: {
      type: String,
      required: true,
    },
    longitude: { type: String, required: true },
    latitude: { type: String, required: true },
    district: { type: String, required: true },
    googleMapLink: { type: String, required: true },
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
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  status: {
    type: String,
    default: 'Available',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('donations', DonationSchema);
