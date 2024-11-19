import React from "react";

const ContactSupport = () => {
  return (
    <div
      className="flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/24a5/e9d1/541aebee81f6d5dcd2931702429a7b7d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C95aXGsTy7uyhMYjYVGjKcti8j3igDVwUAQCH5BQLxaDthZrnHPTsb7fgjUWP5iSzJ37h~wGxBWqdYWRdG6lUKaSsoi5cUMIq03y2SL-DJUbomTqRBEklgS8vKjvV1kNdhM0O4yUhk3BpghmHmHbrw1-K6kK9XF3qMXXErniHMjcT2QvdCP5oQK1yCwT2bN~5jVDeoMsRLiwLlrQzOoUzp7B7~OLzqJ6YN5NXdVGHMl39toY94FZeRk2JZ8vg5Hqxz2sAqbZpPDHl9PoRFh6J62bDjHluHCaLlQ~glb80-c1DnMH9VFsTOqeYl1CHrzaalfQxDCrWpkh-slTGrH0OQ__')", // Replace with your background image URL
      }}
    >
      <div className="flex items-center justify-center w-full h-full min-h-screen py-10 md:py-2 backdrop-blur-sm bg-black/60">
        <div className="container px-4 mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center text-white">
            Contact & Support
          </h1>
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            {/* Contact Info Section */}
            <div className="p-8 rounded-lg shadow-lg h-fit backdrop-blur-sm bg-white/90">
              <h2 className="flex items-center mb-4 text-lg font-bold text-black">
                <span className="mr-2 text-green-500">📧</span>Email us
              </h2>
              <p className="mb-6 text-black">golfme@gmail.com</p>
              <h2 className="flex items-center mb-4 text-lg font-bold text-black">
                <span className="mr-2 text-green-500">📞</span>Call
              </h2>
              <p className="text-black ">+1 25 415 14122</p>
            </div>

            {/* Form Section */}
            <div className="p-8 border shadow-lg rounded-3xl backdrop-blur-sm bg-green-700/90">
              <form className="space-y-6 text-center">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      className="block mb-2 text-white text-start"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter Name"
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-white text-start"
                      htmlFor="phone"
                    >
                      Phone No.
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Enter Phone No."
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block mb-2 text-white text-start"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-white text-start"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Write something..."
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 text-green-700 transition duration-300 bg-white shadow rounded-3xl hover:bg-green-100"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
