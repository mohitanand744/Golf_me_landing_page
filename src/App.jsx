import "./CSS/App.css";
import "./CSS/responsiveness.css";
import ContactSupport from "./components/ContactForms/ContactSupport";
import Footer from "./components/Footers/Footer";
import Navbar from "./components/Headers/Nav";
import HeroSection from "./components/Hero Sections/HeroSection";
import Testimonials from "./components/Testimonials/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="features bg-green-800 h-fit lg:h-[30rem] ">
        <h1 className="pt-5 text-4xl font-bold text-center text-white">
          Features
        </h1>
        <div className="grid grid-cols-12 h-[87%]">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-end justify-start h-full mt-5 md:mt-0 ">
              <img className="" src="/Features.png" alt="" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 ">
            <div class="flex flex-col p-5 items-center justify-center gap-5 relative">
              <div class="bg-white lg:absolute w-[100%] md:w-[23rem] lg:w-[30rem] mt-5 border-[5px] border-blue-400 rounded-3xl shadow-lg p-4 md:p-6  left-0 top-10 ">
                <h2 class="text-lg md:text-xl text-center font-semibold text-blue-600 mb-2">
                  Track Your Game
                </h2>
                <ul class="text-gray-700 text-sm md:text-lg space-y-1">
                  <li>&bull; Handicap Management</li>
                  <li>&bull; Personalized Performance Analytics</li>
                </ul>
              </div>

              <div class="bg-white lg:absolute w-[100%] md:w-[23rem] lg:w-[30rem] mt-2 border-[5px] border-blue-400 rounded-3xl shadow-lg p-4 md:p-6   top-56 right-10">
                <h2 class="text-lg md:text-xl text-center font-semibold text-blue-600 mb-2">
                  Join Contest
                </h2>
                <ul class="text-gray-700 text-sm md:text-lg space-y-1">
                  <li>&bull; Win Prizes And Bragging Rights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="howitworks bg-[#3793FB] py-8 md:py-10 px-6 md:px-24">
        <h1 className="pb-6 text-4xl font-bold text-center text-white">
          How it Works
        </h1>

        <p className="pb-16 text-xl text-center text-gray-100">
          Simple, step-by-step visual guide:
        </p>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col items-center justify-center mb-10 md:mb-0 md:h-[75%] gap-5">
              <div className="text-black bg-white collapse collapse-arrow">
                <input type="checkbox" />
                <div className="text-lg font-medium md:text-xl collapse-title">
                  Sign Up
                </div>
                <div className="collapse-content">
                  <p>Create a free profile Fill All The Information.</p>
                </div>
              </div>
              <div className="text-black bg-white collapse collapse-arrow">
                <input type="checkbox" />
                <div className="text-lg font-medium md:text-xl collapse-title">
                  Track scores
                </div>
                <div className="collapse-content">
                  <p>Content for the second accordion</p>
                </div>
              </div>
              <div className="text-black bg-white collapse collapse-arrow">
                <input type="checkbox" />
                <div className="text-lg font-medium md:text-xl collapse-title">
                  Join challenges
                </div>
                <div className="collapse-content">
                  <p>Content for the third accordion</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center justify-center">
              <img src="/mobile.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Testimonials />

      <section className="h-full bg-green-800 py-14">
        <h1 className="text-4xl font-bold text-center text-white mb-14">
          FAQs
        </h1>
        <div className="w-[96%] md:w-[80%] mx-auto">
          <div className="flex flex-col items-center justify-center gap-5 mb-10 md:mb-0">
            <div className="text-black bg-white md:rounded-3xl collapse collapse-arrow">
              <input type="checkbox" className="s" />
              <div className="text-[1rem] font-medium text-blue-500 md:text-xl collapse-title">
                1. What is this app for?
              </div>
              <div className="collapse-content">
                <p>
                  This app is designed to help golfers of all skill levels track
                  their progress, engage in challenges, and connect with the
                  wider golfing community.
                </p>
              </div>
            </div>
            <div className="text-black bg-white md:rounded-3xl collapse collapse-arrow">
              <input type="checkbox" />
              <div className="text-lg font-medium text-blue-500 md:text-xl text-[1rem] collapse-title">
                2. Is the app free to use?
              </div>
              <div className="collapse-content">
                <p>Content for the second accordion</p>
              </div>
            </div>
            <div className="text-black bg-white md:rounded-3xl collapse collapse-arrow">
              <input type="checkbox" />
              <div className="text-lg font-medium text-blue-500 md:text-xl text-[1rem] collapse-title">
                3. How do I create an account?
              </div>
              <div className="collapse-content">
                <p>Content for the third accordion</p>
              </div>
            </div>{" "}
            <div className="text-black bg-white md:rounded-3xl collapse collapse-arrow">
              <input type="checkbox" />
              <div className="text-lg font-medium text-blue-500 md:text-xl text-[1rem] collapse-title">
                4. How do I add funds to my account?
              </div>
              <div className="collapse-content">
                <p>Content for the third accordion</p>
              </div>
            </div>{" "}
            <div className="text-black bg-white md:rounded-3xl collapse collapse-arrow">
              <input type="checkbox" />
              <div className="text-lg font-medium text-blue-500 md:text-xl text-[1rem] collapse-title">
                5. What types of challenges can I enter?
              </div>
              <div className="collapse-content">
                <p>Content for the third accordion</p>
              </div>
            </div>{" "}
            <div className="text-black bg-white md:rounded-3xl collapse collapse-arrow">
              <input type="checkbox" />
              <div className="text-lg font-medium text-blue-500 md:text-xl text-[1rem] collapse-title">
                6. How do I win challenges?
              </div>
              <div className="collapse-content">
                <p>Content for the third accordion</p>
              </div>
            </div>{" "}
            <div className="text-black bg-white md:rounded-3xl collapse collapse-arrow">
              <input type="checkbox" />
              <div className="text-lg font-medium text-blue-500 md:text-xl text-[1rem] collapse-title">
                7. Is there a prize for winning the leaderboard?
              </div>
              <div className="collapse-content">
                <p>Content for the third accordion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-2 py-6 bg-white xl:px-32 md:py-14 h-fit">
        <div className="container grid grid-cols-12 mx-auto bg-blue-500 rounded-3xl">
          <div className="flex justify-center col-span-12 px-10 border-b border-white shadow-xl md:border-none md:shadow-none rounded-b-3xl lg:col-span-9">
            <img src="/GroupMobils.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center col-span-12 gap-4 p-6 lg:col-span-3">
            <img
              src="/icon.svg"
              className="w-[6.5rem] md:w-[8rem] mx-auto"
              alt=""
            />
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
      </section>

      <ContactSupport />

      <Footer />
    </>
  );
}

export default App;
