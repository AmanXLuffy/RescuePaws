import React from "react";

const ProfileDetails = ({ data }) => (
  <div className="mt-4 p-6 bg-white rounded-xl shadow-md min-h-[250px]">
    <h2 className="font-bold text-2xl mb-6 text-gray-800">User Data:</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-[1.1rem] leading-7">
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Contact:</strong> {data.phone}</p>
      <p><strong>Address:</strong> {data.area}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Gender:</strong> {data.gender}</p>
    </div>
  </div>
);

export default ProfileDetails;
