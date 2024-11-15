import "./CSS/App.css";
import "./CSS/responsiveness.css";
import Navbar from "./components/Headers/Nav";
import HeroSection from "./components/Hero Sections/HeroSection";

function App() {
  return (
    <div className="Home">
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
    </div>
  );
}

export default App;
