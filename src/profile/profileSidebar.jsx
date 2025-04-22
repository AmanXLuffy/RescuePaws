import React from "react";
import dog from "../assets/dog.jpg";

const ProfileSidebar = () => (
  <div className="border-2 w-full max-w-[250px] h-auto md:h-[600px] rounded-lg border-gray-500 p-4 mx-auto md:mx-0">
    <div className="flex flex-col items-center">
      <img
        className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] border-2 border-gray-500 rounded-full"
        src={dog}
        alt="profile"
      />
      <p className="text-xl md:text-2xl pt-4 font-semibold text-center">Aman Solanki</p>
    </div>

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

export default ProfileSidebar;

