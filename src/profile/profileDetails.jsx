import React from "react";

const ProfileDetails = ({ data }) => (
  <div className="mt-4 space-y-2">
    <h2 className="font-bold text-xl">User Data:</h2>
    <p><strong>Name:</strong> {data.name}</p>
    <p><strong>Contact:</strong> {data.contact}</p>
    <p><strong>Address:</strong> {data.address}</p>
    <p><strong>Email:</strong> {data.email}</p>
    <p><strong>Birthday:</strong> {data.birthday}</p>
    <p><strong>Gender:</strong> {data.gender}</p>
  </div>
);

export default ProfileDetails;