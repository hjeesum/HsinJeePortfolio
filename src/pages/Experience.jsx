import ListExperience from "./ListExperience";
import RedirectBtn from "../components/RedirectBtn";
function Experience() {
  return (
    <div className="mb-5">
      <ListExperience />
      <a className="group/experience pl-5 mb-8" href="/resume.pdf">
        <RedirectBtn aria-label="View full résumé">
          View Full Résumé{" "}
        </RedirectBtn>
      </a>
    </div>
  );
}

export default Experience;
