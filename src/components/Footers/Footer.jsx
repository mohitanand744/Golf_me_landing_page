import React from "react";

const Footer = () => {
  return (
    <footer className="text-white bg-green-800 border-t-2">
      <div className="mx-auto ">
        <div className="flex flex-wrap items-start justify-between h-full gap-10 px-3 py-8 md:px-20">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center justify-center w-full lg:w-[30%]">
            <div className=" w-[8rem] mx-auto">
              <img
                className="object-cover w-full h-full rounded-full"
                src="/golfme.png"
                alt=""
              />
            </div>
            <p> Your All-in-One Golf Companion</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-10 md:flex-row md:space-x-8">
            <div>
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:underline">
                    How It Works?
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:underline">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#faqs" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#support" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold">Follow Us :</h3>
              <div className="flex mt-2 space-x-4">
                <a href="https://instagram.com" className="hover:text-gray-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://facebook.com" className="hover:text-gray-300">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://linkedin.com" className="hover:text-gray-300">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://youtube.com" className="hover:text-gray-300">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-3 mt-8 text-sm text-center text-blue-600 bg-white">
          Copyright © 2024 Golf Me | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
