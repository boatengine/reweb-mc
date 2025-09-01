import { useState } from "react";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./pages/Home";
import Projects from "./pages/Allplayer";
import Information from "./pages/Information";
import { Toaster } from "react-hot-toast";
// const notify = () => toast(msg);
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Toaster position="bottom-center" />
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <h1>mactest</h1>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Information />
        <Projects />
      </div>
    </>
  );
}

export default App;
