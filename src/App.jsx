import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import { useState } from "react";

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX + window.scrollX, y: e.clientY +window.scrollY });
  };
  return (
    <div>
      <div
      className="w-screen min-h-screen"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        transition: "background 0.1s ease",
      }}
    >
      <div className="max-w-screen-xl px-12 mx-auto">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between py-20">
            <Home />
          </header>
          <div className="lg:w-[52%] py-20">
            <section id="about">
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
            <section id="footer">
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
