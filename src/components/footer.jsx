// import React from 'react';
// import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <div className=' w-full relative bottom-0 h-[230px] max-md:h-[500px] bg-gray-300 bg-opacity-40 border-t-2 border-black py-6 px-4'>
//       <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
        
//         {/* About Us Section */}
//         <div>
//           <p className='text-xl font-semibold mb-2'>About Us</p>
//           <p className='text-sm w-[500px] items-start max-md:w-full'>
//             RescuePaws is dedicated to alleviating the suffering of stray and abandoned animals in Vadodara, Gujarat. We have been instrumental in rescuing and rehabilitating various animals, including dogs, cats, cows, goats, buffaloes, monkeys, donkeys, pigs, vultures, and kites.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div className='flex flex-col items-center md:items-start mx-64'>
//           <p className='text-xl font-semibold mb-2'>Pages</p>
//           <ul className='space-y-1 flex flex-col'>
//             {/* <a href='#home' className=' transition hover:underline '>Home</a>
//             <a href='#projects' className=' transition hover:underline'>Rescue</a>
//             <a href='#projects' className=' transition hover:underline'>Activities</a>
//             <a href='#contact' className=' transition hover:underline'>ContactUs</a> */}

//              <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:underline hover:opacity-100' to='/'>Home</Link>
//              <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:underline hover:opacity-100' to='/activity'>Activity</Link>
//              <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:underline hover:opacity-100' to='/rescue'>Rescue</Link>
//              <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:underline hover:opacity-100' to='/tips'>Do's&Don'ts</Link>
//              <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:underline hover:opacity-100' to='/contact'>Joinus</Link>
//           </ul>
//         </div>

//         {/* Social Media Links */}
//         <div className='flex flex-col mx-40 items-center md:items-start'>
//           <p className='text-xl font-semibold mb-2'>SocialMedia</p>
//           <div className='flex space-x-4'>
//             <a href='https://www.facebook.com/profile.php?id=100054057791444' target='_blank' rel='noopener noreferrer' className='text-blue-400 transition-all opacity-90 hover:opacity-100'>
//               <BsFacebook size={24} />
//             </a>
//             <a href='https://wa.me/9173515355' target='_blank' rel='noopener noreferrer' className='text-green-400 transition-all opacity-90 hover:opacity-100'>
//               <BsWhatsapp size={24} />
//             </a>
//             <a href='https://www.instagram.com/aman_solanki702/' target='_blank' rel='noopener noreferrer' className='text-pink-500 transition-all opacity-90 hover:opacity-100'>
//               <BsInstagram size={24} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;





import React from 'react';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full bg-gray-300 flex justify-evenly bg-opacity-40 border-t-2 border-black py-6 px-4'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>

        {/* About Us Section */}
        <div className="px-0">
          <p className='text-xl font-semibold mb-2'>About Us</p>
          <p className='text-sm md:w-[400px] text-justify w-full'>
            RescuePaws is dedicated to alleviating the suffering of stray and abandoned animals in Vadodara, Gujarat. We have been instrumental in rescuing and rehabilitating various animals, including dogs, cats, cows, goats, buffaloes, monkeys, donkeys, pigs, vultures, and kites.
          </p>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col px-28 items-center md:items-start'>
          <p className='text-xl font-semibold mb-2'>Pages</p>
          <ul className='space-y-1 flex flex-col'>
            <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:underline hover:opacity-100' to='/'>Home</Link>
            <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:underline hover:opacity-100' to='/activity'>Activity</Link>
            <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:underline hover:opacity-100' to='/rescue'>Rescue</Link>
            <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:underline hover:opacity-100' to='/tips'>AnimalFacts</Link>
            <Link className='cursor-pointer opacity-80 transition-all duration-300 hover:underline hover:opacity-100' to='/contact'>Join Us</Link>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className='flex flex-col items-center md:items-start'>
          <p className='text-xl font-semibold mb-2'>Social Media</p>
          <div className='flex space-x-6 mt-2'>
            <a href='https://www.facebook.com/profile.php?id=100054057791444' target='_blank' rel='noopener noreferrer' className='text-blue-600 transition-all opacity-90 hover:opacity-100'><BsFacebook size={28} /> </a>
            <a href='https://wa.me/9173515355' target='_blank' rel='noopener noreferrer' className='text-green-500 transition-all opacity-90 hover:opacity-100'><BsWhatsapp size={28} /></a>
            <a href='https://www.instagram.com/aman_solanki702/' target='_blank' rel='noopener noreferrer' className='text-pink-500 transition-all opacity-90 hover:opacity-100'><BsInstagram size={28} />  </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;



