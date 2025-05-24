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






// import React from 'react'

// const Emergency = () => {
//   return (
//     <div className='w-full h-[500px] border-2 border-black flex items-center justify-center'>
//     <div className='w-[900px] h-[400px] border-2 border-black flex '>
//       <iframe className='h-[397px] w-[910px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236213.54118006042!2d73.00827459871189!3d22.322019365445758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717482125075!5m2!1sen!2sin" loading="lazy" ></iframe>
      
//       </div>
//       </div>
//   )
// }

// export default Emergency

