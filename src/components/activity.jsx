// import React from 'react'
// import Navbar from "./navbar";
// import Footer from "./footer";
// import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react';

// function Activity() {

//   return (
//     <>
//     <Navbar />

//     <SignedOut>
//     <div className='w-full h-screen relative'>
//       <p className='text-center text-3xl'>YOU NEED TO SIGNUP DUDE</p>
//       <button className='border-2 border-black rounded text-xl relative top-[100px] left-[700px]' ><SignInButton/></button>
//     </div>
//     </SignedOut>

//     <Footer />
//     </>
//   );
// }

// export default Activity;



import React from 'react'
import Navbar from "./navbar";
import Footer from "./footer";
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';

function Activity() {
  return (
    <>
      <Navbar />

      <SignedOut>
        <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-white px-4 text-center">
          <p className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800">
            YOU NEED TO SIGN UP DUDE
          </p>
          <button className="px-6 py-2 border-2 border-black rounded text-lg hover:bg-black hover:text-white transition-all">
            <SignInButton />
          </button>
        </div>
      </SignedOut>

      <Footer />
    </>
  );
}

export default Activity;
