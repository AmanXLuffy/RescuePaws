import React from 'react'
import Navbar from "./navbar";
import Footer from "./footer";
import { signUp, login, logout } from "../servies/auth";
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';


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
      
    </SignedIn>
    <Footer />
    </>
  );
}

export default Activity;