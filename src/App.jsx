import "./App.css";
import "./Waves.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import Archive from "./pages/Archive";

function Main() {
  return (
    <div className="w-screen min-h-screen">
      <div className="wave-container">
        <div className="wave">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="content-wrapper max-w-screen-xl md:px-12 px-6 mx-auto">
          <div className="max-w-screen-xl md:px-12 px-6 mx-auto">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between pt-20">
                <Home />
              </header>
              <div className="lg:w-[52%]">
                <section id="about" className="pt-20">
                  <About />
                </section>
                <section id="experience">
                  <Experience />
                </section>
                <section id="project">
                  <Project />
                </section>
                <section id="contact">
                  <Contact />
                </section>
                <section id="footer" className="pb-20">
                  <Footer />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/archive" element={<Archive />} />
    </Routes>
  );
}

export default App;
