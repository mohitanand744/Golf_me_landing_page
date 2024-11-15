import React from "react";

const Navbar = () => {
  return (
    <nav className="px-6 md:px-10 py-1 shadow-md bg-green-700">
      <div className="container flex items-center justify-between mx-auto bg-transparent">
        {/* Logo */}
        <div className="text-2xl font-bold text-white bg-transparent">
          <img
            className="w-[6.5rem] h-[5rem] object-cover rounded-full"
            src="/golfme.png"
            alt=""
          />
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
            href="#How It’s Work?"
            className="bg-transparent hover:text-green-200"
          >
            How It’s Work?
          </a>
          <a href="#contests" className="bg-transparent hover:text-green-200">
            Testimonials
          </a>
          <a href="#contests" className="bg-transparent hover:text-green-200">
            FAQs
          </a>
          <a href="#contests" className="bg-transparent hover:text-green-200">
            Support
          </a>
        </div>

        {/* Sign Up Button */}
        <div>
          <a
            href="#signup"
            className="px-4 py-1 md:px-6 md:py-2 font-semibold  transition bg-blue-500 hover:bg-blue-600 text-white rounded-full"
          >
            Download Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
