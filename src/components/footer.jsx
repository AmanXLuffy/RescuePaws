import React from 'react';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-gray-300 bg-opacity-40 border-t-2 border-black py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* About Us Section */}
        <div className="px-2">
          <p className="text-xl font-semibold mb-2">About Us</p>
          <p className="text-sm text-justify">
            RescuePaws is dedicated to alleviating the suffering of stray and abandoned animals in Vadodara, Gujarat. We have been instrumental in rescuing and rehabilitating various animals, including dogs, cats, cows, goats, buffaloes, monkeys, donkeys, pigs, vultures, and kites.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center sm:items-center md:items-start">
          <p className="text-xl font-semibold mb-2">Pages</p>
          <ul className="space-y-2 flex flex-col text-sm sm">
            <Link className="cursor-pointer opacity-80 transition hover:underline hover:opacity-100" to="/">Home</Link>
            <Link className="cursor-pointer opacity-80 transition hover:underline hover:opacity-100" to="/rescue">Rescue</Link>
            <Link className="cursor-pointer opacity-80 transition hover:underline hover:opacity-100" to="/tips">AnimalFacts</Link>
            <Link className="cursor-pointer opacity-80 transition hover:underline hover:opacity-100" to="/contact">Join Us</Link>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center sm:items-center md:items-start">
          <p className="text-xl font-semibold mb-2">Social Media</p>
          <div className="flex space-x-6 mt-2">
            <a href="https://www.facebook.com/profile.php?id=100054057791444" target="_blank" rel="noopener noreferrer" className="text-blue-600 opacity-90 hover:opacity-100 transition">
              <BsFacebook size={28} />
            </a>
            <a href="https://wa.me/9173515355" target="_blank" rel="noopener noreferrer" className="text-green-500 opacity-90 hover:opacity-100 transition">
              <BsWhatsapp size={28} />
            </a>
            <a href="https://www.instagram.com/aman_solanki702/" target="_blank" rel="noopener noreferrer" className="text-pink-500 opacity-90 hover:opacity-100 transition">
              <BsInstagram size={28} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
