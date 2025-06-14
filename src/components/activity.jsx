import React from 'react';
import Navbar from "./navbar";
import Footer from "./footer";
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';

function Activity() {
  return (
    <>
      <Navbar />

      <SignedOut>
        <div className="w-full min-h-[600px] flex items-center justify-center bg-white text-center px-4">
          <div className="flex flex-col max-w-xl w-full h-auto sm:h-[400px] items-center justify-center bg-gray-300 border-2 border-gray-300 rounded-lg p-6 sm:p-8">
            <div className="loader mb-6"></div>

            <p className="text-xl sm:text-3xl font-semibold mb-6 text-gray-800">
              YOU NEED TO SIGN IN DUDE
            </p>

            <SignInButton>
              <button className="px-6 py-2 border-2 border-black rounded text-lg hover:bg-black hover:text-white transition-all">
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        {/* Your signed-in content here */}
      </SignedIn>

      <Footer />
    </>
  );
}

export default Activity;
