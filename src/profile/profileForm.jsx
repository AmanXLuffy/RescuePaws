import React from "react";

const ProfileForm = ({ formData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="flex flex-wrap gap-6">
      <div>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="input-style"
        />
      </div>

      <div>
        <label>Contact</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          placeholder="Contact"
          className="input-style"
        />
      </div>

      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Address"
          className="input-style"
        />
      </div>

      <div className="ml-7">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="input-style"
        />
      </div>

      <div>
        <label>Birthday</label>
        <input
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          required
          className="input-style"
        />
      </div>

      <div className="flex flex-row gap-4 ml-7 mt-2">
        <label>Gender</label>
        <div className="flex gap-2 h-[25px]">
          <label className="flex items-center">
            <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} className="mr-1" />Male
          </label>


          <label className="flex items-center">
            <input type="radio" name="gender" value="female"  checked={formData.gender === "female"}  onChange={handleChange} className="mr-1"/> Female
          </label>
        </div>
      </div>
    </div>
    <button type="submit" className="mt-8 relative left-[300px] px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"> Submit </button>
  </form>
);

export default ProfileForm;
