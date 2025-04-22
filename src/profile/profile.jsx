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
//       setIsSubmitted(true); // show details if data exists
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

// //   return (
// //     <div className="w-full min-h-[920px] bg-gradient-to-r from-blue-700 to-sky-400">
// //       <Navbar />
// //       <div className="border-2 inline-block w-[1200px] bg-gray-200 left-[150px] h-auto rounded-lg border-gray-300 relative">
// //         <ProfileSidebar />

// //         <div className="inline-block border-2 pl-5 rounded-md border-gray-300 ml-12 absolute top-5 h-auto w-[800px] p-4">
// //           <p className="text-2xl mb-2">Volunteer/Developer</p>

// //           {!isSubmitted ? (
// //             <ProfileForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
// //           ) : (
// //             <ProfileDetails data={submittedData} />
// //           )}
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default ProfileCard;


// return (
//   <div className="w-full min-h-screen bg-gradient-to-r from-blue-700 to-sky-400">
//     <Navbar />
//     <div className="border-2 inline-block w-[1200px] bg-white left-[150px] h-auto rounded-lg border-gray-300 relative">
//       <ProfileSidebar />

//       <div className="inline-block border-2 pl-5 rounded-md border-gray-300 ml-12 absolute top-5 h-auto w-[800px] p-4">
//         <p className="text-2xl mb-2">Volunteer/Developer</p>

//         {isSubmitted && !isEditMode ? (
//           <>
//             <ProfileDetails data={formData} />
//             <button
//               onClick={handleEdit}
//               className="mt-6 px-6 py-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600"
//             >
//               Edit
//             </button>
//           </>
//         ) : (
//           <ProfileForm
//             formData={formData}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//           />
//         )}
//       </div>
//     </div>
//   </div>
// );
// };

// export default ProfileCard;





import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProfileForm from "./profileForm";
import ProfileDetails from "./profileDetails";
import ProfileSidebar from "./profileSidebar";

const ProfileCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    email: "",
    birthday: "",
    gender: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const savedData = localStorage.getItem("userProfileData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfileData", JSON.stringify(formData));
    setSubmittedData(formData);
    setIsSubmitted(true);
    setIsEditMode(false);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-700 to-sky-400">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 flex flex-col lg:flex-row gap-6 bg-white rounded-lg shadow-lg mt-6">
        
        <div className="w-full lg:w-1/4">
          <ProfileSidebar />
        </div>

       
        <div className="w-full lg:w-3/4 border border-gray-300 rounded-md p-4">
          <p className="text-2xl font-semibold mb-4">Volunteer/Developer</p>

          {isSubmitted && !isEditMode ? (
            <>
              <ProfileDetails data={formData} />
              <button
                onClick={handleEdit}
                className="mt-6 px-6 py-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600"
              >
                Edit
              </button>
            </>
          ) : (
            <ProfileForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileCard;
