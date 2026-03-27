import React, { useState, useEffect } from "react";
import video1 from "../assets/animal1.mp4";
import video2 from "../assets/animal2.mp4";
import video3 from "../assets/animal3.mp4";
import video4 from "../assets/animal5.mp4";

const VideoSlider = () => {
  const videos = [video1, video2, video3, video4];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % videos.length);
        setFade(true);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-screen h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen rounded-b-2xl sm:rounded-b-3xl relative overflow-hidden"
    >
      <video
        key={current}
        autoPlay
        muted
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={videos[current]} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1
          className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide text-center"
        >
          Rescue. Protect. Love.
        </h1>
      </div>
    </div>
  );
};

export default VideoSlider;
