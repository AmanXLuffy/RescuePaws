const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());  // To parse JSON requests
app.use(cors());  // To handle Cross-Origin requests

// Connect to MongoDB Atlas using Mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to RescuePaws API');
});

// Define routes for your app (e.g., for volunteers)
const volunteerRoutes = require('./routes/volunteer');
app.use('/api', volunteerRoutes);

// Set up your server to listen on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
