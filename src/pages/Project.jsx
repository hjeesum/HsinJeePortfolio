import ListProject from "./ListProject";
import RedirectBtn from "../components/RedirectBtn";
import { Link } from "react-router-dom";function Project() {
  return (
    <div className="mb-16">
      <h2 className="text-md font-bold mb-6 md:hidden">PROJECTS</h2>
      <ListProject />
      <Link className="group/experience mb-8" to="/archive">
        <RedirectBtn>
          View Full Project Archive{" "}
        </RedirectBtn>
      </Link>
    </div>
    
  );
}

export default Project;