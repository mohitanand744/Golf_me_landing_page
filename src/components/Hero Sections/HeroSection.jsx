import React from "react";
import { FaAndroid } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className=" grid min-h-[80vh] md:min-h-[89vh] lg:min-h-[60vh] grid-cols-12">
      <div className="col-span-12 md:col-span-8">
        <div className="flex flex-col justify-end h-full px-6 md:justify-center md:px-20 lg:px-40">
          <h1 className="text-3xl md:text-4xl">
            <b className="text-green-400">Golf Me</b> <br />{" "}
            <span className="text-2xl font-medium text-white md:text-3xl md:text-black">
              {" "}
              Elevate Your Game
            </span>
          </h1>
          <p className="text-lg font-medium text-gray-50 md:text-gray-500 md:text-xl">
            Track your scores, join contests, and win big! Experience golf like
            never before with real-time challenges and leaderboards.
          </p>
          <div className="flex mt-5 space-x-4">
            {/* Get Started Button */}
            <button className="text-xs md:text-lg px-3 md:px-6 py-3 font-semibold transition bg-white border-2 border-green-500 rounded-lg hover:bg-[#00000046] hover:text-white">
              Get Started
            </button>

            <button className="flex items-center px-3 text-xs font-semibold text-white transition bg-green-600 rounded-lg md:px-6 md:text-lg lg-3 hover:bg-green-700">
              <FaAndroid className="mr-2 text-2xl" /> {/* Android Icon */}
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-0 md:col-span-4">
        {/* <div className="flex items-end justify-center h-full p-5 md:hidden">
          <img className="w-[20rem] rounded-3xl" src="/tournament.svg" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
