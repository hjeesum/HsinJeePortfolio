import { Link } from "react-router-dom";
import "../Waves.css";
import TableItem from "../components/TableItem";
import { archiveProjects } from "../data/archive";

const sortedProjects = [...archiveProjects].sort((a, b) => Number(b.year) - Number(a.year));

function Archive() {
  return (
    <div className="w-screen min-h-screen">
      <div className="lg:py-24">
        <div className="wave-container">
          <div className="wave">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="content-wrapper max-w-screen-xl md:px-12 px-6 mx-auto pt-12 lg:pt-0">
            <div className="max-w-screen-xl mx-auto">
              <Link to="/" className="inline-flex gap-2 items-center group cursor-pointer font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 group-hover:-translate-x-2 transition-transform duration-200 group-hover:text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="group-hover:text-yellow-400">Hsin Jee Sum</span>
              </Link>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Project Archive</h1>
              <table className="mt-12 w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                      Made At
                    </th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                      Built With
                    </th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedProjects.map((p) => (
                    <TableItem key={p.project} {...p} />
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

export default Archive;
