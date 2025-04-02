// import React from "react";
// import Navbar from "./navbar";
// import Footer from "./footer";
// import { useState } from "react";
// // import { motion } from "framer-motion";
// // import video1 from "../assets/animal1.mp4";
// import joinVideo from "../assets/animal4.mp4";

// const Contact = () => {

//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost/save_contact.php", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();
//     alert(result.message);
    
//   };

//   return (
//     <div>
//       <Navbar />

//        <div className="w-[full] top-[90px] justify-start items-center md:h-[750px] h-screen relative">
//           <video autoPlay muted loop className="w-screen" id="upVideo">
//             <source src={joinVideo} type="video/mp4" />
//            </video>


//         <form className="flex border-2 border-solid border-gray-600 rounded-lg h-[350px] w-[350px] flex-col justify-center relative left-[950px] top-16 items-center" onSubmit={handleSubmit}>
//           <label className="text-2xl text-gray-700">Name</label>
//             <input className="w-[300px] h-[40px] text-black border-2 border-black border-solid rounded-lg mb-2" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />

//             <label className="text-2xl text-slate-600">Email</label>
//             <input className="w-[300px] h-[40px] text-black border-2 border-black border-solid rounded-lg mb-2" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

//             <label className="text-2xl text-slate-600">Message</label>
//             <textarea className="w-[300px] h-[100px] text-black border-2 border-black border-solid rounded-lg mb-2" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />

//             <button className="w-[100px] h-[30px] bg-blue-500 text-white rounded-lg" type="submit">Send</button>
//         </form>

//         <p className="absolute flex justify-center text-xl top-[460px] left-[880px] text-white w-[600px]">"22 years of caring for the abandonned and the less fortunate animals, RescuePaws is Godsent for the paraplegic,diseased,abused animals nurturing theme and nursing them to a life of love care and dignity that every life deserves." -Shilpa Doshi</p>

//         </div>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;










import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import joinVideo from "../assets/animal4.mp4";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "",area: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost/save_contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    alert(result.message);
    setFormData({ name: "", email: "", area: "", message: "" });
  };

  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col md:flex-row md:h-[700px] h-screen relative items-center">
        <video autoPlay muted loop className="w-full md:w-screen object-cover" id="upVideo">
          <source src={joinVideo} type="video/mp4" />
        </video>

        <form
          className="flex border-2 border-gray-600 rounded-lg h-auto md:h-[500px] w-[90%] max-w-[400px] max-h-[480px] flex-col justify-center max-md:top-0 md:top-20 absolute md:left-[950px] items-center bg-gray-300 p-4"
          onSubmit={handleSubmit}
        >
          <label className="text-2xl text-gray-700">Name</label>
          <input className="w-full h-[60px] text-black border-2 border-black rounded-lg mb-2 px-2" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />

          <label className="text-2xl text-slate-600">Email</label>
          <input className="w-full h-[60px] text-black border-2 border-black rounded-lg mb-2 px-2" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

          <label className="text-2xl text-slate-600">Area</label>
          <input className="w-full h-[60px] text-black border-2 border-black rounded-lg mb-2 px-2" type="text" name="area" placeholder="Area" value={formData.area} onChange={handleChange} required />

          <label className="text-2xl text-slate-600">Phone</label>
          <input className="w-full h-[60px] text-black border-2 border-black rounded-lg mb-2 px-2" type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />

          <label className="text-2xl text-slate-600">Message</label>
          <textarea className="w-full h-[200px] text-black border-2 border-black rounded-lg mb-2 px-2" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />

          <button className="w-[100px] h-[30px] bg-blue-500 text-white rounded-lg" type="submit">
            Send
          </button>
        </form>

        <p className="absolute flex text-xl top-[460px] left-1/3 transform -translate-x-1/2 text-white w-[90%] max-md:left-72 max-w-[500px]">
          "22 years of caring for the abandoned and less fortunate animals, RescuePaws is Godsent for the paraplegic, diseased, and abused animals—nurturing them and nursing them to a life of love, care, and dignity that every life deserves." - Shilpa Doshi
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;





