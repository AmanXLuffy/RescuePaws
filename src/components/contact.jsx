// import React, { useState } from "react";
// import Navbar from "./navbar";
// import Footer from "./footer";
// import joinVideo from "../assets/animal4.mp4";

// const VolunteerForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     area: "",
//     phone: "",
//     gender: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // const res = await fetch("http://localhost:5000/api/rescuers", {
//       const res = await fetch("https://rescue-paws.onrender.com/api/rescuers", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("Thank you for joining RescuePaws!");
//         console.log("Received _id:", data._id); // ✅ Debug log
//         localStorage.setItem("rescuePawsUserId", data._id);
//         window.location.href = "/profile";
//       } else {
//         console.error("Server returned error:", data.message);
//       }
//     } catch (err) {
//       console.error("Fetch failed:", err);
//     }

 

//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="w-full flex flex-col md:flex-row md:h-[800px] h-screen relative items-center">
//         <video
//           autoPlay
//           muted
//           loop
//           className="w-full md:w-screen object-cover"
//           id="upVideo"
//         >
//           <source src={joinVideo} type="video/mp4" />
//         </video>

//         <form
//           className="flex border-2 border-gray-600 rounded-lg h-auto md:h-[500px] w-[90%] max-w-[400px] max-h-[500px] flex-col justify-center max-md:top-0 md:top-20 absolute md:left-[950px] items-center bg-gray-300 p-4"
//           onSubmit={handleSubmit}
//         >
        
//           <label className="text-2xl text-gray-700">Name</label>
//           <input
//             className="w-full h-[60px] text-black border-2 border-black rounded-lg mb-2 px-2"
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <label className="text-2xl text-slate-600">Email</label>
//           <input
//             className="w-full h-[60px] text-black border-2 border-black rounded-lg mb-2 px-2"
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <label className="text-2xl text-slate-600">Area</label>
//           <input
//             className="w-full h-[60px] text-black border-2 border-black rounded-lg mb-2 px-2"
//             type="text"
//             name="area"
//             placeholder="Area"
//             value={formData.area}
//             onChange={handleChange}
//             required
//           />

//           <label className="text-2xl text-slate-600">Phone</label>
//           <input
//             className="w-full h-[60px] text-black border-2 border-black rounded-lg mb-2 px-2"
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//           <label className="text-2xl text-slate-600 mb-2 block">Gender</label>
//           <div className="flex gap-6 justify-center mb-4 border-2 border-black bg-white rounded-lg px-2 w-full h-[60px]">
//             <label className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 checked={formData.gender === "male"}
//                 onChange={handleChange}
//                 required
//               />
//               Male
//             </label>

//             <label className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 checked={formData.gender === "female"}
//                 onChange={handleChange}
//                 required
//               />
//               Female
//             </label>
//           </div>
//           <label className="text-2xl text-slate-600">Message</label>
//           <textarea
//             className="w-full h-[200px] text-black border-2 border-black rounded-lg mb-2 px-2"
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />

//           <button
//             className="w-[100px] h-[30px] bg-blue-500 text-white rounded-lg"
//             type="submit"
//           >
//             Send
//           </button>
//         </form>

//         {/* <div className="absolute flex text-xl top-[460px] left-1/3 transform -translate-x-1/2 text-white w-[90%] max-md:left-72 max-w-[500px]"> */}
//         <div className="absolute flex w-[90%] md:top-[600px] md:left-[900px] max-md:top-[500px] max-w-[550px]">

//         <p className="text-xl text-white max-md:text-sm max-md:leading-6 leading-8">
//           "22 years of caring for the abandoned and less fortunate animals,
//           RescuePaws is Godsent for the paraplegic, diseased, and abused
//           animals—nurturing them and nursing them to a life of love, care, and
//           dignity that every life deserves." - Shilpa Doshi
//         </p>
//         </div>
//       </div>
//       <Footer />
//     </div>


//   );
// };

// export default VolunteerForm;



import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import joinVideo from "../assets/animal4.mp4";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    area: "",
    phone: "",
    gender: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://rescue-paws.onrender.com/api/rescuers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Thank you for joining RescuePaws!");
        localStorage.setItem("rescuePawsUserId", data._id);
        window.location.href = "/profile";
      } else {
        console.error("Server returned error:", data.message);
      }
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative w-full min-h-screen">
        

        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={joinVideo} type="video/mp4" />
        </video>


        <div className="relative z-9 flex max-md:flex-col gap-5 md:flex-row items-center justify-center min-h-screen bg-black/50 px-4 py-10">


          <div className="w-[90px]"></div>


          <p className="text-white text-sm sm:text-base mt-6 max-w-xl text-center leading-relaxed">
            "Years of caring for the abandoned and less fortunate animals, RescuePaws is
            godsent for the paraplegic, diseased, and abused animals—nurturing them and nursing
            them to a life of love, care, and dignity that every life deserves." - Shilpa Doshi
          </p>

          
          <div className="w-full flex flex-col md:flex-row justify-center ">
            <form onSubmit={handleSubmit} className="bg-gray-100 rounded-lg shadow-md p-6 w-full max-w-lg md:ml-16" >
              <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Join Us</h2>

              {["Name", "Email", "Area", "Phone"].map((field) => (
                <div className="mb-3" key={field}>
                  <label className="block text-gray-700 mb-1">{field}</label>
                  <input
                    type={field === "Email" ? "email" : "text"}
                    name={field.toLowerCase()}
                    placeholder={field}
                    value={formData[field.toLowerCase()]}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-400 rounded px-3 py-2 text-black"
                  />
                </div>
              ))}

              <label className="block text-gray-700 mb-1">Gender</label>
              <div className="flex gap-4 items-center mb-4">
                {["male", "female"].map((gender) => (
                  <label key={gender} className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={handleChange}
                      required
                    />
                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </label>
                ))}
              </div>

              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 rounded px-3 py-2 h-32 text-black mb-4"
              />

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Send
              </button>
            </form>
          </div>


          
          {/* <p className="text-white text-sm sm:text-base mt-6 max-w-xl text-center leading-relaxed">
            "22 years of caring for the abandoned and less fortunate animals, RescuePaws is
            Godsent for the paraplegic, diseased, and abused animals—nurturing them and nursing
            them to a life of love, care, and dignity that every life deserves." - Shilpa Doshi
          </p> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VolunteerForm;
