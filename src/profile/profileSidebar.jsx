
import React, { useState, useEffect } from "react";
import dog from "../assets/dog.jpg";

const ProfileSidebar = () => {
  const [profileImage, setProfileImage] = useState(dog);

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image);
        // localStorage.setItem("profileImage", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    // <div className="border-2 w-full max-w-[250px] h-auto md:h-[600px] rounded-lg border-gray-500 p-4 mx-auto md:mx-0">
    //   <div className="flex flex-col items-center">
    //     <img
    //       className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] border-2 border-gray-500 rounded-full"
    //       src={profileImage}
    //       alt="profile"
    //     />
    //     <input
    //       type="file"
    //       accept="image/*"
    //       onChange={handleImageChange}
    //       className="mt-2 text-sm"
    //     />
    //     <p className="text-xl md:text-2xl pt-4 font-semibold text-center"></p>
    //   </div>

    //   <div className="mt-4 border-2 border-gray-300 rounded-lg w-full p-3">
    //     <p className="font-semibold">Can Speak:</p>
    //     <ul className="list-disc pl-5">
    //       <li>Gujarati</li>
    //       <li>English</li>
    //       <li>Hindi</li>
    //     </ul>
    //   </div>
    // </div>


    <div className="border-2 w-full max-w-[250px] h-auto md:h-[600px] rounded-lg border-gray-500 p-4 mx-auto md:mx-0">
  <div className="flex flex-col items-center">
    <img
      className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] border-2 border-gray-500 rounded-full"
      src={profileImage}
      alt="profile"
    />
    <p className="text-xl md:text-2xl pt-4 font-semibold text-center"></p>
  </div>

  {/* Aligned input field */}
  <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="mt-3 w-full text-sm text-left"
  />

  <div className="mt-4 border-2 border-gray-300 rounded-lg w-full p-3">
    <p className="font-semibold">Can Speak:</p>
    <ul className="list-disc pl-5">
      <li>Gujarati</li>
      <li>English</li>
      <li>Hindi</li>
    </ul>
  </div>
</div>

  );
};

export default ProfileSidebar;
