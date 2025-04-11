// import React from "react";
// import dog from "../assets/dog.jpg";
// import {SignedIn,SignedOut,SignInButton,SignOutButton} from "@clerk/clerk-react";
// import { useState, useEffect } from "react";
// import Hamster from "../animation/hamster";
// import { useUser } from "@clerk/clerk-react";


// const ProfileCard = () => {

//     const [formData,setFormData] = useState({
//       name:"",
//       contact:"",
//       address:"",
//       email:"",
//       birthday:"",
//       gender:""
//     });

//     const [submittedData, setSubmittedData] = useState(null);
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const { user } = useUser();

// useEffect(() => {
//   const fetchUserData = async () => {
//     if (user?.primaryEmailAddress?.emailAddress) {
//       try {
//         const response = await fetch("http://localhost/rescuepaws/api/get_user_info.php", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email: user.primaryEmailAddress.emailAddress,
//           }),
//         });

//         const data = await response.json();

//         if (!data.error) {
//           setFormData({
//             name: data.name,
//             contact: data.contact,
//             address: data.address,
//             email: data.email,
//             birthday: data.birthday,
//             gender: data.gender,
//           });
//           setSubmittedData(data);
//           setIsSubmitted(true);
//         } else {
//           console.warn(data.error);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     }
//   };

//   fetchUserData();
// }, [user]);

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };
  

//   return (
//     <div>
//       <div className="w-full h-screen pl-16 bg-gradient-to-r from-blue-700 to-sky-400 pt-10">
//         <div className="border-2 inline-block w-[1300px] relative bg-white left-[50px] h-[600px] rounded-lg border-gray-300">
//           <div className="border-2 inline-block w-[250px] h-[600px] rounded-lg border-gray-500">
//             <img
//               className="h-[150px] w-[150px] mt-4 border-2 border-gray-500 rounded-full ml-11"
//               src={dog}
//             ></img>
//             <p className="text-2xl pl-12 pt-4 font-semibold inline-block">
//               Aman Solanki
//             </p>

//             <div className="mt-4 ml-10 border-2 border-gray-300 rounded-lg w-[150px] h-[150px]">
//               <p className="font-semibold">Can Speak:</p>
//               <ul className="list-disc pl-5">
//                 <li>Hindi</li>
//                 <li>Gujarati</li>
//                 <li>English</li>
//                 <li>Marathi</li>
//               </ul>
//             </div>
//           </div>

//           <div className="inline-block border-2 pl-5 rounded-md border-gray-300 ml-12 absolute top-5 h-[350px] w-[800px]">
//             <p className="text-2xl">Aman Solanki</p>
//             <p className="text-blue-700">Volunteer/Developer</p>

//             <form>

//               <div className="inline-block">
//             <label>Your Name</label>
//             <input  onChange={handleChange} className="border-2 border-gray-300 rounded-2xl w-[200px] pl-3 h-[40px] mt-4 ml-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" value={formData.name} name='name' placeholder="Name"></input>
//               </div>

//               <div className="inline-block">
//             <label className="ml-28">Contact</label>
//             <input  onChange={handleChange} className="border-2 border-gray-300 rounded-2xl w-[200px] pl-3 h-[40px] mt-4 ml-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" type="text" value={formData.contact} name='contact' placeholder="Contact"></input>
//               </div>

//               <div className="inline-block">
//             <br /><label className="">Address</label>
//             <input  onChange={handleChange} className="w-[200px] ml-8 mt-8 px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" value={formData.address} name='address' placeholder="Address"></input>
//               </div>

//               <div className="inline-block">
//             <label className="ml-28">Email</label>
//             <input onChange={handleChange} className="border-2 border-gray-300 rounded-2xl w-[200px] pl-3 h-[40px] mt-4 ml-8 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" type="text"  value={formData.email} name='email' placeholder="Email"></input>
//               </div>

//               <div className="inline-block">
//             <br/><label className="">BirthDay</label>
//             <input onChange={handleChange} className="w-[200px] ml-8 mt-8 px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text"  value={formData.birthday} name='birthday' placeholder="BirthDay"></input>
//               </div>

//               <div className="inline-block">

//             <label className="ml-28">Gender</label>
//                 <label className="ml-3">
//                   <input onChange={handleChange} type="radio" name="gender" value="male" checked={formData.gender === "male"} className="form-radio text-blue-500" />
//                   <span className="ml-1">Male</span>
//                 </label>
//               </div>
//                 <label className="inline-flex items-center">
//                   <input onChange={handleChange} type="radio" name="gender" value="female" checked={formData.gender === "female"}  className="form-radio ml-5 text-pink-500" />
//                   <span className="ml-1">Female</span>
//                 </label>
//                 <button className="block mt-8 border-2 border-gray-400 relative left-[300px] rounded-full bg-blue-500 text-white w-[130px] h-[35px]">Submit</button>
              
//             </form>
            
            

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;






import React, { useState, useEffect } from "react";
import dog from "../assets/dog.jpg";
import { useUser } from "@clerk/clerk-react";

const ProfileCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    email: "",
    birthday: "",
    gender: "",
  });

  const { user } = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        try {
          const response = await fetch("http://localhost/RescuePaws/profileInfo.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.primaryEmailAddress.emailAddress,
            }),
          });

          const data = await response.json();

          if (!data.error) {
            setFormData({
              name: data.name,
              contact: data.contact,
              address: data.address,
              email: data.email,
              birthday: data.birthday,
              gender: data.gender,
            });
          } else {
            console.warn(data.error);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="w-full h-screen pl-16 bg-gradient-to-r from-blue-700 to-sky-400 pt-10">
      <div className="border-2 inline-block w-[1300px] relative bg-white left-[50px] h-[600px] rounded-lg border-gray-300">
        <div className="border-2 inline-block w-[250px] h-[600px] rounded-lg border-gray-500">
          <img
            className="h-[150px] w-[150px] mt-4 border-2 border-gray-500 rounded-full ml-11"
            src={dog}
            alt="User avatar"
          />
          <p className="text-2xl pl-12 pt-4 font-semibold inline-block">{formData.name || "User"}</p>

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
          <p className="text-2xl font-semibold">Name{formData.name}</p>
          <p className="text-blue-700">Volunteer/Developer</p>

          <div className="mt-6 text-lg space-y-3">
            <p><strong>Contact:</strong> {formData.contact}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            {/* <p><strong>Birthday:</strong> {formData.birthday}</p> */}
            {/* <p><strong>Gender:</strong> {formData.gender}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
