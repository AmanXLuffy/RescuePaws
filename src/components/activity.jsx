import React from 'react'
import Navbar from "./navbar";
import Footer from "./footer";
import Bear from "../animation/bear";
import Hamster from "../animation/hamster"
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';

function Activity() {
  return (
    <>
      <Navbar />

      <SignedOut>
        <div className="w-full h-[600px] flex items-center justify-center bg-white text-center">
          <div className='flex flex-col w-[900px] h-[500px] items-center justify-center bg-gray-300 border-2 border-gray-300 rounded-lg p-8'>
            <div className="loader"></div> 

          <p className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800"> YOU NEED TO SIGN IN DUDE </p>

          <button className="px-6 py-2 border-2 border-black rounded text-lg hover:bg-black hover:text-white transition-all">
            <SignInButton />
          </button>
          
          {/* <div className="loader"></div>  */}

        </div>
          </div>
      </SignedOut>

      <Footer />
    </>
  );
}

export default Activity;
