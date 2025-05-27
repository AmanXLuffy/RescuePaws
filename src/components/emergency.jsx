// import React, { useState } from 'react';

// const Emergency = () => {
//   const [area, setArea] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost/emergency.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams({
//           area: area,
//           message: message,
//         }),
//       });

//       const data = await res.json();
//       alert(data.message);
//     } catch (err) {
//       alert('Error sending SMS.');
//     }
//   };

//   return (
//     <>
//       {/* Emergency Alert Form */}
//       <div className='w-full flex justify-center'>
//         <div className='w-full md:h-[400px] flex flex-col items-center justify-center'>
//           <p className='text-gray text-lg'>🚨 Emergency Alert</p>
//           <form
//             onSubmit={handleSubmit}
//             className='flex flex-col items-center bg-red-500 border-2 border-gray-600 rounded-lg p-4 w-[90%] md:max-w-[400px] max-h-[480px]'
//           >
//             <input
//               type='text'
//               name='area'
//               placeholder='Enter Area'
//               value={area}
//               onChange={(e) => setArea(e.target.value)}
//               required
//               className='border-2 border-gray-600 rounded-md p-2 m-2'
//             />
//             <textarea
//               name='message'
//               placeholder='Enter emergency message'
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//               className='border-2 border-gray-600 rounded-md p-2 m-2'
//             ></textarea>
//             <button type='submit' className='bg-blue-500 text-white rounded-md p-2 m-2'>
//               Send Alert
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Emergency;






import React from 'react'

const Emergency = () => {
  return (
    <div className='w-full h-[500px] border-2 border-black flex items-center justify-center'>
    <div className='w-[800px] h-[400px] border-2 rounded-lg border-black '>
     



     <div className='text-2xl border-b-2 border-gray-400 font-semibold w-full h-10 flex items-center justify-center'>
      <p>Emergency Assisstance</p>
     </div>

     {/* <p>Please join this WhatsApp group through this <a target='blank' className='text-blue-600 underline' href='https://chat.whatsapp.com/DqyiE0ev0G9Fj7cQaEJBG0'>link</a>. This group has local rescuers that are active in Vadodara and are ready to provide their assisstance when ever needed. </p> */}
     <p>If you witness an injured or distressed animal and need immediate help, you can join our dedicated WhatsApp Emergency Rescuers Group. This group connects you directly with our network of local rescuers who are actively available to respond.</p>

     <div className='mt-5'>
     <p>🟢 How it works:</p>
      <ul className='list-disc ml-5'>
        <li>Click the link below to join the group.</li>
        <li>Share details of the emergency, including the location, photos/videos, and a brief description of the animal's condition.</li>
        <li>Available rescuers in your area will respond as quickly as possible.</li>
        </ul>

        <a target='blank' href='https://chat.whatsapp.com/DqyiE0ev0G9Fj7cQaEJBG0' className='text-blue-600 '>📱 Join the WhatsApp Emergency Group</a>
       
        <div className='mt-5'>
        <p>This group is for emergency animal rescue requests only. Please avoid unrelated messages to help rescuers stay focused and responsive.</p>
        </div>

     </div>

      </div>
      </div>
  )
}

export default Emergency

