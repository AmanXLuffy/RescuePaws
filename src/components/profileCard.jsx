import React from 'react'
import dog from '../assets/dog.jpg';
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';
import Hamster from '../animation/hamster';


const ProfileCard = () => {
  const [info, setInfo] = useState({});
      const [loading, setLoading] = useState(true);
  
      useEffect(() =>{
          fetch("http://localhost/fetch.php")
          .then((response) => response.json())
          .then((data) => {
              setInfo(data);
              setLoading(false);
          })
          .catch((error) => {
            console.log("error fetching data: ", error);
            setLoading(false);
          });
        },[]);
        
        if(loading) <p className='text-3xl font-semibold'> <Hamster /></p>;
        
        return (
          <div>
      <div className="w-full h-screen pl-16 bg-gradient-to-r from-blue-700 to-sky-400 pt-10">

              <div className="border-2 inline-block w-[1300px] relative bg-white left-[50px] h-[600px] rounded-lg border-gray-500">
      
                  <div className="border-2 inline-block w-[250px] h-[600px] rounded-lg border-gray-500">
                      <img className="h-[150px] w-[150px] mt-4 border-2 border-gray-500 rounded-full ml-11" src={dog}></img>
                      <p className="text-2xl pl-12 pt-4 font-semibold inline-block">Aman Solanki</p>
                  </div>
      
                <div className="inline-block border-2 border-gray-400 ml-12 absolute top-5 h-[300px] w-[800px]">
                  <p className="text-2xl">Aman Solanki</p>
                  <p className="text-blue-700">Volunteer/Developer</p>

                  <input className="border-2 border-gray-500 rounded-lg w-[300px] h-[50px] mt-4 ml-4"  type="text" placeholder="Your Name"></input>
                  
                  {Object.keys(info).length === 0 ? (
                <p className='text-2xl font-semibold'>N/A</p>) : (Object.entries(info).map(([area, rescuersList]) => (
                    <div className='border-b-2 border-black border-solid p-4'>
                     
                        
                                {rescuersList.map((info, index) =>(
                                  <div>
                                      <p className='text-xl '>Name: {info.name}</p>
                                      <p className='text-xl '>Email: {info.email}</p>
                                      <p className='text-xl '>Phone: {info.phone}</p>                                    
                                  </div>
                                       ))}
                             </div>
                           ))
                        )}


               </div>
              </div>
            </div>
    </div>
  )
}

export default ProfileCard;
