import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
// import Plogo from "../assets/profile_logo.png";
// @ts-ignore
import mypic from '../assets/mypic.jpg';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


const Profile = () => {
  return (
    <>
      <Navbar />

     <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>

      <div className="w-full h-screen pl-16 bg-gradient-to-r from-blue-700 to-sky-400 pt-10">
        <div className="border-2 inline-block w-[1300px] relative bg-white left-[50px] h-[600px] rounded-lg border-gray-500">

            <div className="border-2 inline-block w-[250px] h-[580px] rounded-lg border-gray-500">
                <img className="h-[180px] mt-5 border-2 border-gray-500 rounded-full ml-8" src={mypic}></img>
                <p className="text-2xl pl-12 inline-block">Aman Solanki</p>
            </div>

          <div className="inline-block border-2 border-gray-400 ml-12 absolute top-5 h-[300px] w-[800px]">
            <p className="text-2xl">Aman Solanki</p>
            <p className="text-blue-700">Volunteer/Developer</p>
         </div>
        </div>
      </div>

      </SignedIn>
      <Footer />
    </>
  );
};

export default Profile;
