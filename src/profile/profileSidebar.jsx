import React from "react";
import dog from "../assets/dog.jpg";

const ProfileSidebar = () => (
  <div className="border-2 inline-block w-[250px] h-[600px] rounded-lg border-gray-500">
    <img className="h-[150px] w-[150px] mt-4 border-2 border-gray-500 rounded-full ml-11" src={dog} alt="profile" />
    <p className="text-2xl pl-12 pt-4 font-semibold">Aman Solanki</p>

    <div className="mt-4 ml-10 border-2 border-gray-300 rounded-lg w-[150px] h-[150px] p-2">
      <p className="font-semibold">Can Speak:</p>
      <ul className="list-disc pl-5">
        <li>Hindi</li>
        <li>Gujarati</li>
        <li>English</li>
        <li>Marathi</li>
      </ul>
    </div>
  </div>
);

export default ProfileSidebar;
