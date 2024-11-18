import React from "react";

const Navbar = () => {
  return (
    <div className="bg-green-800 shadow-md navbar h-[5.5rem]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content relative backdrop-blur-sm bg-green-600/60 text-white font-bold h-[100vh] left-[-1rem] top-[3.5rem]  z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#home" className="bg-transparent hover:text-green-200">
                Home
              </a>
            </li>
            {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
            <li>
              <a
                href="#features"
                className="bg-transparent hover:text-green-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#How It’s Work?"
                className="bg-transparent hover:text-green-200"
              >
                How It’s Work?
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#contests"
                className="bg-transparent hover:text-green-200"
              >
                Testimonials
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#contests"
                className="bg-transparent hover:text-green-200"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#contests"
                className="bg-transparent hover:text-green-200"
              >
                Support
              </a>
            </li>

            <div className="absolute w-full mx-auto text-center bottom-10">
              <a className="px-4 py-1 font-semibold text-white transition bg-blue-500 rounded-full md:px-6 md:py-2 hover:bg-blue-600">
                Download Now
              </a>
            </div>
          </ul>
        </div>
        <a className="text-xl btn btn-ghost w-[8.3rem] h-[5rem]">
          <img
            className="object-cover w-full h-full rounded-full"
            src="/golfme.png"
            alt=""
          />
        </a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a href="#home" className="bg-transparent hover:text-green-200">
              Home
            </a>
          </li>
          {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
          <li>
            <a href="#features" className="bg-transparent hover:text-green-200">
              Features
            </a>
          </li>
          <li>
            <a
              href="#How It’s Work?"
              className="bg-transparent hover:text-green-200"
            >
              How It’s Work?
            </a>
          </li>
          <li>
            {" "}
            <a href="#contests" className="bg-transparent hover:text-green-200">
              Testimonials
            </a>
          </li>
          <li>
            {" "}
            <a href="#contests" className="bg-transparent hover:text-green-200">
              FAQs
            </a>
          </li>
          <li>
            <a href="#contests" className="bg-transparent hover:text-green-200">
              Support
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="px-4 py-1 text-sm font-semibold text-white transition bg-blue-500 rounded-full md:text-[1rem] md:px-6 md:py-2 hover:bg-blue-600">
          Download Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;

/* 

<nav className="px-3 py-1 bg-green-800 shadow-md md:px-10">
      <div className="flex items-center justify-between mx-auto bg-transparent ">
       
        <div className="text-2xl font-bold text-white bg-transparent">
          <img
            className="w-[6.5rem] h-[5rem] object-cover rounded-full"
            src="/golfme.png"
            alt=""
          />
        </div>

        <div className="hidden space-x-6 text-white bg-transparent lg:flex">
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

        <div>
          <a
            href="#signup"
            className="px-4 py-1 font-semibold text-white transition bg-blue-500 rounded-full md:px-6 md:py-2 hover:bg-blue-600"
          >
            Download Now
          </a>
        </div>
      </div>
    </nav>

*/
