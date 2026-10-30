import "../Waves.css";
import BackLink from "./BackLink";

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
              <BackLink />
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
