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




  
// app.post('/api/rescuers', async (req, res) => {
//   const rescuer = req.body;

//   if (!rescuer.name || !rescuer.email || !rescuer.area || !rescuer.phone || !rescuer.message) {
//     return res.status(400).json({success:false, message: 'please provide all details' });
//   }


//   const newRescuer = new Volunteer(rescuer)
//   try {
//      newRescuer.save();   
//         res.status(201).json({ success: true, data: newRescuer });
//   }
//    catch (error) {
//     console.error('Error saving rescuer:', error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//    }

// });


app.post('/api/rescuers', async (req, res) => {
  const rescuer = req.body;

  if (!rescuer.name || !rescuer.email || !rescuer.area || !rescuer.phone || !rescuer.message) {
    return res.status(400).json({ success: false, message: 'Please provide all details' });
  }

  try {
    const newRescuer = await Volunteer.create(rescuer);
    // ✅ Only return _id like the reference code
    res.status(200).json({ _id: newRescuer._id });
  } catch (error) {
    console.error('Error saving rescuer:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


app.get("/", (req, res) => {
  res.send("RescuePaws backend is running!");
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


app.get('/api/rescuers/:id', async (req, res) => {
  try {
    const rescuer = await Volunteer.findById(req.params.id);
    if (!rescuer) return res.status(404).json({ message: 'User not found' });
    res.json(rescuer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});


