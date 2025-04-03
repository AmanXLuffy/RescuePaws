import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/home';
import Activity from "./components/activity";
import Rescue from "./components/rescue";
import Contact from "./components/contact";
import Tips from "./components/tips";
import Profile from './components/profile';


function App() {
  return (
    <div>
    <Router>

      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rescue" element={<Rescue />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>

    </div>
   
  );
}

export default App;

