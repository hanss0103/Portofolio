import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import BackToTop from "./components/BackTop";

import { useEffect } from "react";


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-950 text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
