// import React from 'react';
// import Navbar from './navbar';
// import Footer from './footer';
// import RescuersList from './rescuersList';
// import Emergency from "./emergency";

// const Rescue = () => {


//   return (
//     <div className='w-full relative flex flex-col min-h-screen'>
//       <Navbar />

//       <div className='flex-grow'>

//         <div className='w-full border-2 border-solid border-gray-600 h-auto'>
//           <p className='flex text-2xl font-semibold justify-center'>Find Rescuers by Area</p>

//           <RescuersList />
//           <Emergency />

//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Rescue;



import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import RescuersList from './rescuersList';
import Emergency from "./emergency";

const Rescue = () => {
  return (
    <div className="w-full relative flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-4 sm:px-8 py-6">
        <div className="w-full border-2 border-gray-600 rounded-lg p-4 sm:p-8">
          <p className="text-center text-xl sm:text-2xl font-semibold mb-6">
            Find Rescuers by Area
          </p>

          <RescuersList />

          <div className="mt-8">
            <Emergency />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Rescue;


