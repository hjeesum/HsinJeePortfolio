import ListProject from "./ListProject";
import RedirectBtn from "../components/RedirectBtn";
function Project() {
  return (
    <div className="mb-5">
      <ListProject />
      <a className="group/experience pl-5 mb-8 mt-3" href="/resume.pdf">
        <RedirectBtn>
          View Full Project Archive{" "}
        </RedirectBtn>
      </a>
    </div>
    
  );
}

export default Project;