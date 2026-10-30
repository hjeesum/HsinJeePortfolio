import { Link } from "react-router-dom";
import "../Waves.css";
import RedirectBtn from "../components/RedirectBtn";
import SkillTag from "../components/SkillTag";
import LinkLabel from "../components/LinkLabel";
import { contributions as fallback } from "../data/contributions";
import { useLiveContributions } from "../data/useLiveContributions";
import BackLink from "../components/BackLink";

const STATUS = {
  merged: { label: "Merged", className: "text-accent" },
  open: { label: "In review", className: "text-muted" },
  closed: { label: "Closed", className: "text-muted" },
};

function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
}

// Merged gets a filled accent dot; anything still open or closed gets a
// hollow one, so the merged ones stand out at a glance.
function Status({ status }) {
  const { label, className } = STATUS[status] ?? STATUS.open;
  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap text-sm ${className}`}>
      <span
        className={`h-2 w-2 rounded-full border border-current ${status === "merged" ? "bg-current" : ""}`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

function prNumber(url) {
  return `#${url.split("/").pop()}`;
}

function OpenSource() {
  // Stars and merge status come live from GitHub, falling back to the
  // values in contributions.js.
  const contributions = useLiveContributions(fallback);
  const sorted = [...contributions].sort((a, b) => b.date.localeCompare(a.date));
  const merged = contributions.filter((c) => c.status === "merged").length;
  const repos = new Set(contributions.map((c) => c.repo)).size;

  return (
    <div className="w-screen min-h-screen">
      <div className="lg:py-24">
        <div className="wave-container">
          <div className="wave"></div>
          <div className="content-wrapper max-w-screen-xl md:px-12 px-6 mx-auto pt-12 pb-16 lg:pt-0">
            <div className="max-w-screen-xl mx-auto">
              <BackLink />
              <h1 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">Open Source</h1>
              <p className="mt-4 max-w-xl text-muted">
                Pull requests to other people's projects: {contributions.length} so
                far across {repos} {repos === 1 ? "repository" : "repositories"},{" "}
                {merged} merged.
              </p>
              <table className="mt-12 w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-rule-soft">
                    <th className="hidden py-4 pr-8 text-xs font-semibold uppercase tracking-wider text-muted sm:table-cell">Date</th>
                    <th className="py-4 pr-8 text-xs font-semibold uppercase tracking-wider text-muted">Contribution</th>
                    <th className="hidden py-4 pr-8 text-xs font-semibold uppercase tracking-wider text-muted lg:table-cell">Language</th>
                    <th className="py-4 pr-8 text-xs font-semibold uppercase tracking-wider text-muted">Status</th>
                    <th className="hidden py-4 pr-8 text-xs font-semibold uppercase tracking-wider text-muted sm:table-cell">Pull request</th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((c) => (
                    <tr key={c.link} className="border-b border-rule-soft last:border-none">
                      <td className="hidden py-4 pr-8 align-top whitespace-nowrap text-muted sm:table-cell">
                        {formatDate(c.date)}
                      </td>
                      <td className="py-4 pr-8 align-top">
                        {/* On phones the PR column is hidden, so the repo name links to the PR. */}
                        <a
                          href={`https://github.com/${c.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-xl transition-colors hover:text-accent"
                        >
                          {c.repo}
                        </a>
                        <span className="ml-2 text-xs text-muted whitespace-nowrap">★ {c.stars}</span>
                        <p className="mt-1 max-w-xl text-sm text-muted">{c.summary}</p>
                        {/* The PR column is hidden on phones, so its link moves here. */}
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/experience mt-2 inline-block text-sm text-muted sm:hidden"
                        >
                          <RedirectBtn>
                            <LinkLabel url={c.link} label={prNumber(c.link)} />
                          </RedirectBtn>
                        </a>
                      </td>
                      <td className="hidden py-4 pr-8 align-top lg:table-cell">
                        <SkillTag>{c.language}</SkillTag>
                      </td>
                      <td className="py-4 pr-8 align-top">
                        <Status status={c.status} />
                      </td>
                      <td className="hidden py-4 pr-8 align-top text-muted sm:table-cell">
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/experience"
                        >
                          <RedirectBtn><LinkLabel url={c.link} label={prNumber(c.link)} /></RedirectBtn>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenSource;
