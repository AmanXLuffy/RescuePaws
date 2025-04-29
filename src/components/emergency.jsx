// import React,{useState} from 'react'


// const Emergency = () => {

//     const [formData, setFormData] = useState({
//         name: "",
//         phone: "",
//         area: "",
//         description: "",
//       });
    
//       const handleChange = (e) => {
//         setFormData((prev) => ({
//           ...prev,
//           [e.target.name]: e.target.value,
//         }));
//       };
    
//       const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         try {
//           const res = await fetch("http://localhost/emergency.php", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/x-www-form-urlencoded",
//             },
//             body: new URLSearchParams({
//               area: formData.area,
//               message: `${formData.name} (${formData.phone}) reports: ${formData.description}`,
//             }),
//           });
    
//           const data = await res.json();
//           alert(data.message);
//         } catch (err) {
//           alert("Error sending SMS.");
//         }
//       };
  
    
//   return (
//     <>
//      {/* Emergency Alert Form */}
//      <div className='w-full flex justify-center'>
//             <div className='w-full md:h-[400px] flex flex-col items-center justify-center'>
//               <p className='text-gray text-lg'>🚨 Emergency Alert</p>
//               <form onSubmit={handleSubmit} className="flex flex-col items-center bg-red-500 border-2 border-gray-600 rounded-lg p-4 w-[90%] md:max-w-[400px] max-h-[480px]">
//                 <input type='text' name='name' placeholder='Your name' onChange={handleChange} required className='border-2 border-gray-600 rounded-md p-2 m-2' />
//                 <input type='text' name='phone' placeholder='Your phone number' onChange={handleChange} required className='border-2 border-gray-600 rounded-md p-2 m-2' />
//                 <input type='text' name='area' placeholder='Your area' onChange={handleChange} required className='border-2 border-gray-600 rounded-md p-2 m-2' />
//                 <textarea name='description' placeholder='Describe the situation' onChange={handleChange} required className='border-2 border-gray-600 rounded-md p-2 m-2'></textarea>
//                 <button type='submit' className='bg-blue-500 text-white rounded-md p-2 m-2'>Send Alert</button>
//               </form>
//             </div>
//           </div>

//     </>
//   )
// }

// export default Emergency;



import React, { useState } from 'react';

const Emergency = () => {
  const [area, setArea] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost/emergency.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          area: area,
          message: message,
        }),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert('Error sending SMS.');
    }
  };

  return (
    <>
      {/* Emergency Alert Form */}
      <div className='w-full flex justify-center'>
        <div className='w-full md:h-[400px] flex flex-col items-center justify-center'>
          <p className='text-gray text-lg'>🚨 Emergency Alert</p>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center bg-red-500 border-2 border-gray-600 rounded-lg p-4 w-[90%] md:max-w-[400px] max-h-[480px]'
          >
            <input
              type='text'
              name='area'
              placeholder='Enter Area'
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
              className='border-2 border-gray-600 rounded-md p-2 m-2'
            />
            <textarea
              name='message'
              placeholder='Enter emergency message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className='border-2 border-gray-600 rounded-md p-2 m-2'
            ></textarea>
            <button type='submit' className='bg-blue-500 text-white rounded-md p-2 m-2'>
              Send Alert
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Emergency;
