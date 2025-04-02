import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import RescuersList from './rescuersList'


const rescue = () => {
  return (
    <div className='w-full relative ' >
      <Navbar />
      <div className='w-full border-4 border-solid border-gray-600 h-[1000px]'>
      <p className='flex text-2xl font-semibold justify-center'>Find Rescuers by Area</p>
      <RescuersList />
      </div>
    <Footer />
    </div>
  )
}

export default rescue
