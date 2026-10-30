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
import PdfPage from "./pages/PdfPage";
import Presentation from "./pages/Presentation";
import OpenSource from "./pages/OpenSource";
import LightSwitch from "./components/LightSwitch";

function Main() {
  return (
    <div className="w-screen min-h-screen">
      <div className="wave-container">
        <div className="wave"></div>
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
    <>
      <LightSwitch />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/archive" element={<Archive />} />
        <Route
          path="/resume"
          element={<PdfPage title="Résumé" pdf="/resume.pdf" downloadName="Hsin-Jee-Sum-Resume.pdf" />}
        />
        <Route
          path="/masters-report"
          element={<PdfPage title="Master's Thesis" pdf="/mastersreport.pdf" downloadName="Hsin-Jee-Sum-Masters-Thesis.pdf" />}
        />
        <Route
          path="/bachelors-report"
          element={<PdfPage title="Bachelor's Thesis" pdf="/bachelorsreport.pdf" downloadName="Hsin-Jee-Sum-Bachelors-Thesis.pdf" />}
        />
        <Route
          path="/masters-poster"
          element={<PdfPage title="Thesis Poster" pdf="/mastersproj_poster.pdf" downloadName="AI-Video-Detection-Poster.pdf" />}
        />
        <Route path="/masters-presentation" element={<Presentation />} />
        <Route
          path="/game-of-life-report"
          element={<PdfPage title="Criticality in the Game of Life" pdf="/Bio_Inspired_Report.pdf" downloadName="Game-of-Life-Criticality-Report.pdf" />}
        />
        <Route path="/open-source" element={<OpenSource />} />
      </Routes>
    </>
  );
}

export default App;
