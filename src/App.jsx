import "./CSS/App.css";
import "./CSS/responsiveness.css";
import Navbar from "./components/Headers/Nav";
import HeroSection from "./components/Hero Sections/HeroSection";

function App() {
  return (
    <div className="Home">
      <Navbar />
      <HeroSection />
      <div className="features bg-green-800 h-fit lg:h-[30rem] ">
        <h1 className="text-center pt-5 text-4xl font-bold text-white">
          Features
        </h1>
        <div className="grid grid-cols-12 h-[87%]">
          <div className="col-span-12 md:col-span-6 relative">
            <img
              className="absolute bottom-0 left-0 hidden md:block"
              src="/Features.png"
              alt=""
            />
          </div>

          <div className="col-span-12 md:col-span-6 ">
            <div class="flex flex-col p-5 items-center justify-center gap-5 relative">
              <div class="bg-white lg:absolute w-[100%] md:w-[25rem] lg:w-[30rem] mt-5 border-[5px] border-blue-400 rounded-3xl shadow-lg p-4 md:p-6  left-0 top-10 ">
                <h2 class="text-lg md:text-xl text-center font-semibold text-blue-600 mb-2">
                  Track Your Game
                </h2>
                <ul class="text-gray-700 text-sm md:text-lg space-y-1">
                  <li>&bull; Handicap Management</li>
                  <li>&bull; Personalized Performance Analytics</li>
                </ul>
              </div>

              <div class="bg-white lg:absolute w-[100%] md:w-[25rem] lg:w-[30rem] mt-2 border-[5px] border-blue-400 rounded-3xl shadow-lg p-4 md:p-6   top-56 right-10">
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
      </div>
    </div>
  );
}

export default App;
