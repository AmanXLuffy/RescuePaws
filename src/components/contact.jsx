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
