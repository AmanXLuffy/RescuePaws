import React, { useEffect, useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="min-w-full" key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-90 transition"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-90 transition"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
