import React from 'react'
import Navbar from "./navbar";
import Footer from "./footer";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react';
import ProfileCard from './profileCard';


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

    <SignedIn>
      {/* <ProfileCard /> */}
      <p> you are Signed In</p>
      <SignOutButton />
    </SignedIn>
    <Footer />
    </>
  );
}

export default Activity;