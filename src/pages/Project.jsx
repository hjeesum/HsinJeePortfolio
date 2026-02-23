import ListProject from "./ListProject";
import RedirectBtn from "../components/RedirectBtn";
function Project() {
  return (
    <div className="mb-16">
      <h2 className="text-md font-bold mb-6 md:hidden">PROJECTS</h2>
      <ListProject />
      <a className="group/experience mb-8" href="/resume.pdf">
        <RedirectBtn>
          View Full Project Archive{" "}
        </RedirectBtn>
      </a>
    </div>
    
  );
}

export default Project;