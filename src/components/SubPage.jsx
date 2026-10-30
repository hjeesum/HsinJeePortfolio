import { Link } from "react-router-dom";
import "../Waves.css";

// Shared layout for the pages that open from the main page (résumé,
// reports, presentation): back link, big title, actions on the right.
export default function SubPage({ title, actions, children }) {
  return (
    <div className="w-screen min-h-screen">
      <div className="lg:py-24">
        <div className="wave-container">
          <div className="wave"></div>
          <div className="content-wrapper max-w-screen-xl md:px-12 px-6 mx-auto pt-12 pb-16 lg:pt-0">
            <div className="max-w-screen-xl mx-auto">
              <Link to="/" className="inline-flex gap-2 items-center group cursor-pointer font-semibold">
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
                <span className="group-hover:text-strong">Hsin Jee Sum</span>
              </Link>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                <h1 className="font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">{title}</h1>
                {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Outlined button used in the actions slot.
export function SubPageButton({ children, ...props }) {
  return (
    <a
      {...props}
      className="inline-flex items-center border border-rule px-5 py-2 text-sm transition-colors hover:border-accent"
    >
      {children}
    </a>
  );
}
