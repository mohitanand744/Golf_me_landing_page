import React from "react";
import { FaAndroid } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="container flex justify-center items-center min-h-[80vh]">
      <div class="bg-green-500 w-[95%] md:w-[80%] lg:w-[50%] bg-opacity-50 p-8 rounded-3xl shadow-lg text-center ">
        <h1 class="text-2xl md:text-4xl font-bold text-white mb-4">
          Dominate the Fairway with Golf Me
        </h1>
        <p class="mb-6 text-white text-lg md:text-2xl">
          Your All-in-One Golf Companion
        </p>
        <div class="flex flex-wrap items-center gap-3 justify-center">
          <a
            href="#"
            class="border-white w-[14rem] border-2 flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-2xl shadow-lg text-md"
          >
            <img src="/appleLogo.png" alt="" />
            <span>
              Download on the{" "}
              <strong className="text-xl md:text-2xl">App Store</strong>
            </span>
          </a>
          <a
            href="#"
            class="border-white w-[14rem] border-2 flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-2xl shadow-lg"
          >
            <img src="/playStory.png" alt="" />
            <span>
              Download on the{" "}
              <strong className="text-xl md:text-2xl">Play Store</strong>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
