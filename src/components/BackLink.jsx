import { Link, useLocation, useNavigate } from "react-router-dom";

// Goes back to whichever page on this site you came from (e.g. the
// presentation -> the report you opened it from). If the page was opened
// directly, from a shared link, there's nowhere on the site to go back
// to, so it goes home instead of leaving the site.
export default function BackLink() {
  const navigate = useNavigate();
  // React Router gives the very first page of a visit the key "default".
  const cameFromSite = useLocation().key !== "default";

  function goBack(event) {
    if (!cameFromSite) return;
    event.preventDefault();
    navigate(-1);
  }

  return (
    <Link to="/" onClick={goBack} className="inline-flex gap-2 items-center group cursor-pointer font-semibold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4 group-hover:-translate-x-2 transition-transform duration-200 group-hover:text-strong"
      >
        <path
          fillRule="evenodd"
          d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
      <span className="group-hover:text-strong">{cameFromSite ? "Back" : "Hsin Jee Sum"}</span>
    </Link>
  );
}
