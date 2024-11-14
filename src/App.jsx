import "./CSS/App.css";
import "./CSS/responsiveness.css";
import Navbar from "./components/Headers/Nav";
import HeroSection from "./components/Hero Sections/HeroSection";

function App() {
  return (
    <div className="Home">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
