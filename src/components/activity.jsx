import React from 'react'
import Navbar from "./navbar";
import Footer from "./footer";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react';
import ProfileCard from './profileCard1';


function Activity() {

  return (
    <>
    <Navbar />

    <SignedOut>
    <div className='w-full h-screen relative'>
      <p className='text-center text-3xl'>YOU NEED TO SIGNUP DUDE</p>
      <button className='border-2 border-black rounded text-xl relative top-[100px] left-[700px]' ><SignInButton/></button>
    </div>
    </SignedOut>

    <Footer />
    </>
  );
}

export default Activity;