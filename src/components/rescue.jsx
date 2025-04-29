import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import RescuersList from './rescuersList';
import Emergency from "./emergency";

const Rescue = () => {


  return (
    <div className='w-full relative flex flex-col min-h-screen'>
      <Navbar />

      <div className='flex-grow'>

        <div className='w-full border-2 border-solid border-gray-600 h-auto'>
          <p className='flex text-2xl font-semibold justify-center'>Find Rescuers by Area</p>

          <RescuersList />
          <Emergency />

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Rescue;
