import React, { useState } from "react";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen pl-16 bg-gradient-to-r from-blue-700 to-sky-400 pt-10">
      <div className="border-2 inline-block w-[1300px] bg-white left-[50px] h-auto rounded-lg border-gray-300 relative">
        <ProfileSidebar />

        <div className="inline-block border-2 pl-5 rounded-md border-gray-300 ml-12 absolute top-5 h-auto w-[800px] p-4">
          <p className="text-2xl mb-2">Volunteer/Developer</p>

          {!isSubmitted ? (
            <ProfileForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
          ) : (
            <ProfileDetails data={submittedData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
