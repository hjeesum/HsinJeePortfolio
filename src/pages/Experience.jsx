import Reveal from "../components/Reveal";
import ListExperience from "./ListExperience";
import RedirectBtn from "../components/RedirectBtn";
import { Link } from "react-router-dom";
function Experience() {
  return (
    <div className="mb-16">
      <h2 className="font-display text-xl tracking-wide mb-8 flex items-center gap-4 after:h-px after:flex-1 after:bg-rule-soft">EXPERIENCE</h2>
      <ListExperience />
      <Reveal>
        <Link className="group/experience mt-2 inline-flex items-center border border-rule px-6 py-3 transition-colors hover:border-accent" to="/resume">
          <RedirectBtn aria-label="View full résumé">
            View Full Résumé{" "}
          </RedirectBtn>
        </Link>
      </Reveal>
    </div>
  );
}

export default Experience;
