import React from "react";

const ProfileDetails = ({ data }) => (
  <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
    <h2 className="font-bold text-xl mb-4 text-gray-800">User Data:</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Contact:</strong> {data.phone}</p>
      <p><strong>Address:</strong> {data.area}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Gender:</strong> {data.gender}</p>
 
    </div>
  </div>
);

export default ProfileDetails;

