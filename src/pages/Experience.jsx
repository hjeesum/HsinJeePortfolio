import ListExperience from "./ListExperience";
import RedirectBtn from "../components/RedirectBtn";
function Experience() {
  return (
    <div className="mb-16">
      <h2 className="text-md font-bold mb-6 md:hidden">EXPERIENCE</h2>
      <ListExperience />
      <a className="group/experience mb-8" href="/resume.pdf">
        <RedirectBtn aria-label="View full résumé">
          View Full Résumé{" "}
        </RedirectBtn>
      </a>
    </div>
  );
}

export default Experience;
