import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import dog from '../assets/dog.jpg';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import ProfileCard from "./profileCard1";
import ProfileCard2 from "./profilecard2";


const Profile = () => {
  return (
    <>
      <Navbar />

     <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        {/* <ProfileCard />  */}
        <ProfileCard2 />
      </SignedIn>
      <Footer />
    </>
  );
};

export default Profile;
