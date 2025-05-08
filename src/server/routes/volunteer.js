const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');  

// POST route to handle volunteer form submission
router.post('/join', async (req, res) => {
  try {
    const { name, email, area, phone, message } = req.body;

    // Create a new volunteer document
    const newVolunteer = new Volunteer({
      name,
      email,
      area,
      phone,
      message
    });

    // Save the new volunteer to the database
    await newVolunteer.save();

    res.status(200).json({
      success: true,
      message: 'Thank you for joining us!'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try again later.'
    });
  }
});

module.exports = router;
