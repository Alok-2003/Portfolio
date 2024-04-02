import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import TechStack from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Work";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return ratio < 2.5 ? (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <TechStack />
      <Projects />
      <Timeline />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) : (
    <em id="customMessage">Please Change the orientation to View!</em>
  );
}

export default App;