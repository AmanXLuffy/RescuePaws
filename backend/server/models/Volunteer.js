const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    // match: [/.+@.+\..+/, 'Please enter a valid email address']
  },

  area: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
    // match: [/^\d{10,15}$/, 'Please enter a valid phone number']
  },

  gender: {
    type: String,
    required: true,
    enum: ['male','female'],
  },

  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Volunteer', volunteerSchema);


