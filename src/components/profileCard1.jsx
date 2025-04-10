import React from "react";
import dog from "../assets/dog.jpg";
import {SignedIn,SignedOut,SignInButton,SignOutButton} from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import Hamster from "../animation/hamster";

const ProfileCard = () => {
const [formData,setFormData] = useState({
  name:"",
  contact:"",
  address:"",
  email:"",
  birthday:"",
  gender:""
});

const [submittedData, setSubmittedData] = useState(null);

const [isSubmitted, setIsSubmitted] = useState(false);

const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData(prev => ({ ...prev ,[name]: value}));
};

const handleSubmit = (e) => {
  e.preventDefault();
  setSubmittedData(formData);
  setIsSubmitted(true) 
};




  return (
    <div>
      <div className="w-full h-screen pl-16 bg-gradient-to-r from-blue-700 to-sky-400 pt-10">
        <div className="border-2 inline-block w-[1300px] relative bg-white left-[50px] h-[600px] rounded-lg border-gray-300">
          <div className="border-2 inline-block w-[250px] h-[600px] rounded-lg border-gray-500">
            <img className="h-[150px] w-[150px] mt-4 border-2 border-gray-500 rounded-full ml-11" src={dog}></img>
            <p className="text-2xl pl-12 pt-4 font-semibold inline-block">Aman Solanki</p>

            <div className="mt-4 ml-10 border-2 border-gray-300 rounded-lg w-[150px] h-[150px]">
               <p className="font-semibold">Can Speak:</p>
              <ul className="list-disc pl-5">
                <li>Hindi</li>
                <li>Gujarati</li>
                <li>English</li>
                <li>Marathi</li>
              </ul>
            </div>

          </div>

          <div className="inline-block border-2 pl-5 rounded-md border-gray-300 ml-12 absolute top-5 h-[350px] w-[800px]">
            <p className="text-2xl">Aman Solanki</p>
            <p className="text-blue-700">Volunteer/Developer</p>

            <div className="p-6">
              {!isSubmitted ? (

            <form onSubmit={handleSubmit}>

              <div className="inline-block">
            <label>Your Name</label>
            <input className="border-2 border-gray-300 rounded-2xl w-[200px] pl-3 h-[40px] mt-4 ml-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" onChange={handleChange} value={formData.name} name='name' placeholder="Name"></input>
              </div>

              <div className="inline-block">
            <label className="ml-28">Contact</label>
            <input className="border-2 border-gray-300 rounded-2xl w-[200px] pl-3 h-[40px] mt-4 ml-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" type="text" onChange={handleChange} value={formData.contact} name='contact' placeholder="Contact"></input>
              </div>

              <div className="inline-block">
            <br /><label className="">Address</label>
            <input className="w-[200px] ml-8 mt-8 px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" onChange={handleChange} value={formData.address} name='address' placeholder="Address"></input>
              </div>

              <div className="inline-block">
            <label className="ml-28">Email</label>
            <input className="border-2 border-gray-300 rounded-2xl w-[200px] pl-3 h-[40px] mt-4 ml-8 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" type="text" onChange={handleChange} value={formData.email} name='email' placeholder="Email"></input>
              </div>

              <div className="inline-block">
            <br/><label className="">BirthDay</label>
            <input className="w-[200px] ml-8 mt-8 px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" onChange={handleChange} value={formData.birthday} name='birthday' placeholder="BirthDay"></input>
              </div>

              <div className="inline-block">

            <label className="ml-28">Gender</label>
                <label className="ml-3">
                  <input type="radio" name="gender" value="male" onChange={handleChange} className="form-radio text-blue-500" />
                  <span className="ml-1">Male</span>
                </label>
              </div>
                <label className="inline-flex items-center">
                  <input type="radio" name="gender" value="female" onChange={handleChange} className="form-radio ml-5 text-pink-500" />
                  <span className="ml-1">Female</span>
                </label>
                <button className="block mt-8 border-2 border-gray-400 relative left-[300px] rounded-full bg-blue-500 text-white w-[130px] h-[35px]">Submit</button>
              
            </form>
            ) : (

              
              <div className="mt-4">
          <h2 className="font-bold">Submitted Data:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Contact:</strong> {submittedData.contact}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>BirthDay:</strong> {submittedData.birthday}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
        </div>
        )}

</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
