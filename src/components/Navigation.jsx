import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "project"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
 

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => 
    window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="hidden lg:flex pt-10 flex-col gap-2">
      <a href="#about" className={`nav-link ${activeSection === "about" ? "active" : ""}`}>
        <div className="white-line"></div>About
      </a>
      <a href="#experience" className={`nav-link ${activeSection === "experience" ? "active" : ""}`}>
        <div className="white-line"></div>Experience
      </a>
      <a href="#project" className={`nav-link ${activeSection === "project" ? "active" : ""}`}>
        <div className="white-line"></div>Projects
      </a>
    </nav>
  );
}
