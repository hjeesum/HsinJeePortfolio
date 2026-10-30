import ListExperience from "./ListExperience";
import RedirectBtn from "../components/RedirectBtn";
function Experience() {
  return (
    <div className="mb-16">
      <h2 className="font-display text-2xl mb-6 md:hidden">EXPERIENCE</h2>
      <ListExperience />
      <a className="group/experience mt-2 inline-flex items-center border border-neutral-400 px-6 py-3 transition-colors hover:border-neutral-900" href="/resume.pdf">
        <RedirectBtn aria-label="View full résumé">
          View Full Résumé{" "}
        </RedirectBtn>
      </a>
    </div>
  );
}

export default Experience;
