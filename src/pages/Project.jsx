import ListProject from "./ListProject";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="mb-16">
      <h2 className="font-display text-2xl mb-6 md:hidden">PROJECTS</h2>
      <ListProject />
      <Link
        to="/archive"
        className="group mt-2 inline-flex items-center gap-3 border border-neutral-400 px-6 py-3 font-medium transition-colors hover:border-neutral-900"
      >
        <span className="group-hover:text-black">View Full Project Archive</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4 group-hover:translate-x-2 transition-transform duration-200 group-hover:text-black"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Project;
