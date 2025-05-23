const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');  

// POST route to handle volunteer form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, area, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !area || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required.'
      });
    }

    const newVolunteer = new Volunteer({
      name,
      email,
      area,
      phone,
      message
    });

    await newVolunteer.save();

    res.status(200).json({
      success: true,
      message: 'Thank you for joining us!'
    });

  } catch (error) {
    if (error.code === 11000) {
      // Duplicate email error
      return res.status(400).json({
        success: false,
        error: 'This email is already registered.'
      });
    }

    // General error
    res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try again later.'
    });
  }
});

module.exports = router;
