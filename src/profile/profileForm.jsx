import React from "react";

const ProfileForm = ({ formData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="space-y-6 px-4 py-6 max-w-4xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label className="block mb-1 font-medium"> Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="input-style w-full"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Contact</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          placeholder="Contact"
          className="input-style w-full"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Address"
          className="input-style w-full"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="input-style w-full"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Birthday</label>
        <input
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          required
          className="input-style w-full"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Gender</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              className="mr-1"
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              className="mr-1"
            />
            Female
          </label>
        </div>
      </div>
    </div>

    <div className="text-center sm:text-right">
      <button
        type="submit"
        className="mt-6 px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  </form>
);

export default ProfileForm;
