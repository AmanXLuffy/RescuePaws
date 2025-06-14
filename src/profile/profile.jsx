// import React, { useState, useEffect } from "react";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// import ProfileForm from "./profileForm";
// import ProfileDetails from "./profileDetails";
// import ProfileSidebar from "./profileSidebar";

// const ProfileCard = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     address: "",
//     email: "",
//     birthday: "",
//     gender: "",
//   });

//   const [submittedData, setSubmittedData] = useState(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   useEffect(() => {
//     const savedData = localStorage.getItem("userProfileData");
//     if (savedData) {
//       setFormData(JSON.parse(savedData));
//       setIsSubmitted(true);
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("userProfileData", JSON.stringify(formData));
//     setSubmittedData(formData);
//     setIsSubmitted(true);
//     setIsEditMode(false);
//   };

//   const handleEdit = () => {
//     setIsEditMode(true);
//   };

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-r from-blue-700 to-sky-400">
//       <Navbar />
//       <div className="max-w-7xl mx-auto p-4 flex flex-col lg:flex-row gap-6 bg-white rounded-lg shadow-lg mt-6">
        
//         <div className="w-full lg:w-1/4">
//           <ProfileSidebar />
//         </div>

       
//         <div className="w-full lg:w-3/4 border border-gray-300 rounded-md p-4">
//           <p className="text-2xl font-semibold mb-4">Volunteer/Developer</p>

//           {isSubmitted && !isEditMode ? (
//             <>
//               <ProfileDetails data={formData} />
//               <button
//                 onClick={handleEdit}
//                 className="mt-6 px-6 py-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600"
//               >
//                 Edit
//               </button>
//             </>
//           ) : (
//             <ProfileForm
//               formData={formData}
//               handleChange={handleChange}
//               handleSubmit={handleSubmit}
//             />
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProfileCard;


import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProfileDetails from "./profileDetails";
import ProfileSidebar from "./profileSidebar";

const ProfileCard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("rescuePawsUserId");
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        // const res = await fetch(`http://localhost:5000/api/rescuers/${userId}`);
        const res = await fetch(`https://rescue-paws.onrender.com/api/rescuers/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.error(err);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-700 to-sky-400">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 flex flex-col lg:flex-row gap-6 bg-white rounded-lg shadow-lg mt-6">
        <div className="w-full lg:w-1/4">
          <ProfileSidebar />
        </div>

        <div className="w-full lg:w-3/4 border border-gray-300 rounded-md p-4">
          <p className="text-2xl font-semibold mb-4">Volunteer Details</p>

          {loading && <p>Loading...</p>}

          {!loading && !userData && <p>No user data found.</p>}

          {!loading && userData && <ProfileDetails data={userData} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileCard;



