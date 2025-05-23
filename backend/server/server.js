const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  
require('dotenv').config();
const Volunteer = require('./models/Volunteer'); 
const app = express();

app.use(express.json());  
app.use(cors()); 


mongoose.connect("mongodb+srv://amansolanki:MxN1efYgP5ybhaz5@cluster0.rmujmia.mongodb.net/Rescuers")
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));




  
app.post('/api/rescuers', async (req, res) => {
  const rescuer = req.body;

  if (!rescuer.name || !rescuer.email || !rescuer.area || !rescuer.phone || !rescuer.message) {
    return res.status(400).json({success:false, message: 'please provide all details' });
  }


  const newRescuer = new Volunteer(rescuer)
  try {
     newRescuer.save();   
        res.status(201).json({ success: true, data: newRescuer });
  }
   catch (error) {
    console.error('Error saving rescuer:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
   }

});




app.get('/api/rescuers', async (req, res) => {
  try {
    const rescuers = await Volunteer.find();

    // Group rescuers by area
    const grouped = rescuers.reduce((acc, rescuer) => {
      const { area } = rescuer;
      if (!acc[area]) acc[area] = [];
      acc[area].push({
        name: rescuer.name,
        email: rescuer.email,
        phone: rescuer.phone,
      });
      return acc;
    }, {});

    res.json(grouped);
  } catch (error) {
    console.error('Error fetching rescuers:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});












// // Define routes for your app (e.g., for volunteers)
// const volunteerRoutes = require('./routes/volunteer');
// app.use('/api/volunteer', volunteerRoutes);