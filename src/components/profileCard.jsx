import React from 'react'
import dog from '../assets/dog.jpg';


const ProfileCard = () => {
  return (
    <div>
      <div className="w-full h-screen pl-16 bg-gradient-to-r from-blue-700 to-sky-400 pt-10">
              <div className="border-2 inline-block w-[1300px] relative bg-white left-[50px] h-[600px] rounded-lg border-gray-500">
      
                  <div className="border-2 inline-block w-[250px] h-[580px] rounded-lg border-gray-500">
                      <img className="h-[150px] w-[150px] mt-4 border-2 border-gray-500 rounded-full ml-11" src={dog}></img>
                      <p className="text-2xl pl-12 pt-4 font-semibold inline-block">Aman Solanki</p>
                  </div>
      
                <div className="inline-block border-2 border-gray-400 ml-12 absolute top-5 h-[300px] w-[800px]">
                  <p className="text-2xl">Aman Solanki</p>
                  <p className="text-blue-700">Volunteer/Developer</p>
               </div>
              </div>
            </div>
    </div>
  )
}

export default ProfileCard;
