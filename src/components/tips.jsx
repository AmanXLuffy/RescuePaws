import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import Facts from './facts';

const tips = () => {
  
  return (
    <div className='flex flex-col '>

      <Navbar />
      <div className='h-[600px] w-full relative '>
        <Facts />
      </div>
      <Footer />
    </div>
  )
}

export default tips



