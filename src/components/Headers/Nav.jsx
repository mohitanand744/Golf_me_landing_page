import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 shadow-md backdrop-blur-sm bg-[#212121]/50">
      <div className="container flex items-center justify-between mx-auto bg-transparent">
        {/* Logo */}
        <div className="text-2xl font-bold text-white bg-transparent">
          <img className="w-[4rem] rounded-full" src="/icon.svg" alt="" />
        </div>

        {/* Links */}
        <div className="hidden space-x-6 text-white bg-transparent md:flex">
          <a href="#home" className="bg-transparent hover:text-green-200">
            Home
          </a>
          <a href="#features" className="bg-transparent hover:text-green-200">
            Features
          </a>
          <a
            href="#leaderboard"
            className="bg-transparent hover:text-green-200"
          >
            Leaderboard
          </a>
          <a href="#contests" className="bg-transparent hover:text-green-200">
            Contests
          </a>
        </div>

        {/* Sign Up Button */}
        <div>
          <a
            href="#signup"
            className="px-4 py-2 font-semibold text-green-700 transition bg-white rounded-lg hover:bg-green-100"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
