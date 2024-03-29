const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RequestSchema = new mongoose.Schema({
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

module.exports = mongoose.model('requests', RequestSchema);
