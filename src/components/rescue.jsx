// import React, {useState} from 'react'
// import Navbar from './navbar'
// import Footer from './footer'
// import RescuersList from './rescuersList'


// const Rescue = () => {
//   const [formData, setFormData] = useState({ name: "", phone: "",area: "", description: ""});
  
//     const handleChange = (e) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const response = await fetch("http://localhost/emergency.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const result = await response.json();
//       alert(result.message);
//       setFormData({ name: "", phone: "", area: "", description: "" }); // Reset form data after submission
//     };



//   return (
//     <div className='w-full relative ' >
//       <Navbar />
//       <div className='w-full border-4 border-solid border-gray-600 h-[1000px]'>
//       <p className='flex text-2xl font-semibold justify-center'>Find Rescuers by Area</p>

//       <RescuersList />
      
//       <div className='w-full block-inline h-[400px] bg-gray-600'>
//         <div className='flex flex-col items-center justify-center'>
//           <p>🚨 Emergency Alert</p>

//          <form onSubmit={handleSubmit} className="flex border-2 border-gray-600 rounded-lg md:h-[350px] w-[90%] max-w-[300px] max-h-[480px] flex-col justify-center max-md:top-0 md:top-20 items-center bg-gray-200">

//            <input type='text' name='name' placeholder='your name' onChange={handleChange} required className='border-2 border-gray-600 rounded-md p-2 m-2' />

//             <input type='text' name='phone' placeholder='your phone number' onChange={handleChange} required className='border-2 border-gray-600 rounded-md p-2 m-2' />

//            <input type='text' name='area' placeholder='your area' onChange={handleChange} required className='border-2 border-gray-600 rounded-md p-2 m-2' />

//            <textarea name='description' placeholder='describe the situation' onChange={handleChange} required className='border-2 border-gray-600 rounded-md p-2 m-2'></textarea>

//            <button type='submit' className='bg-blue-500 text-white rounded-md p-2 m-2'>Send Alert</button>

//           </form>
//         </div>
//       </div>


//       {/* <RescuersList /> */}
//       </div>
//     <Footer />
//     </div>
//   )
// }

// export default Rescue;


import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import RescuersList from './rescuersList';

const Rescue = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", area: "", description: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost/emergency.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    alert(result.message);
    setFormData({ name: "", phone: "", area: "", description: "" }); // Reset form data after submission
  };

  return (
    <div className='w-full relative flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow'>
        <div className='w-full border-2 border-solid border-gray-600 h-auto'>
          <p className='flex text-2xl font-semibold justify-center'>Find Rescuers by Area</p>
          <RescuersList />

          {/* Emergency Alert Form */}
          <div className='w-full flex justify-center'>
            <div className='w-full md:h-[400px] flex flex-col items-center justify-center'>
              <p className='text-gray text-lg'>🚨 Emergency Alert</p>
              <form onSubmit={handleSubmit} className="flex flex-col items-center bg-red-500 border-2 border-gray-600 rounded-lg p-4 w-[90%] md:max-w-[400px] max-h-[480px]">
                <input type='text' name='name' placeholder='Your name' onChange={handleChange} required className='border-2 border-gray-600 rounded-md p-2 m-2' />
                <input type='text' name='phone' placeholder='Your phone number' onChange={handleChange} required className='border-2 border-gray-600 rounded-md p-2 m-2' />
                <input type='text' name='area' placeholder='Your area' onChange={handleChange} required className='border-2 border-gray-600 rounded-md p-2 m-2' />
                <textarea name='description' placeholder='Describe the situation' onChange={handleChange} required className='border-2 border-gray-600 rounded-md p-2 m-2'></textarea>
                <button type='submit' className='bg-blue-500 text-white rounded-md p-2 m-2'>Send Alert</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Rescue;
