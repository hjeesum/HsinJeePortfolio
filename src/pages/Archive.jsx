import "../Waves.css";
import TableItem from "../components/TableItem";

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
          <div className="content-wrapper max-w-screen-xl md:px-12 px-6 mx-auto">
            <div className="max-w-screen-xl mx-auto">
              <a href="/" className="inline-flex gap-2 items-center group cursor-pointer font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-4 group-hover:-translate-x-2 transition-transform duration-200 group-hover:text-yellow-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="group-hover:text-yellow-400">Hsin Jee Sum</span>
              </a>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Project Archive</h1>
              <table
                id="content"
                className="mt-12 w-full border-collapse text-left"
              >
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-slate-200">
                      Year
                    </th>
                    <th className="lg:w-[28%] sm:w-[50%] px-4 py-2 text-left font-semibold text-slate-200">
                      Project
                    </th>
                    <th className="w-[18%] hidden px-4 py-2 text-left font-semibold text-slate-200 lg:table-cell">
                      Made At
                    </th>
                    <th className="w-[28%] hidden px-4 py-2 text-left font-semibold text-slate-200 lg:table-cell">
                      Built With
                    </th>
                    <th className="lg:w-[26%] hidden px-4 py-2 text-left font-semibold text-slate-200 sm:table-cell">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TableItem
                    year="2024"
                    project="CNN for histopathological breast cancer images"
                    made="Leeds University"
                    technologies={["python", "TensorFlow", "C", "C++", "Hooligans"]}
                    link="sample.com"
                  />
                  <TableItem
                    year="2024"
                    project="sample"
                    made="sample"
                    technologies={["python"]}
                    link="sample.com"
                  />
                  <TableItem
                    year="2024"
                    project="sample"
                    made="sample"
                    technologies={["python"]}
                    link="sample.com"
                  />
                  <TableItem
                    year="2024"
                    project="sample"
                    made="sample"
                    technologies={["python"]}
                    link="sample.com"
                  />
                  <TableItem
                    year="2024"
                    project="sample"
                    made="sample"
                    technologies={["python"]}
                    link="sample.com"
                  />
                  <TableItem
                    year="2024"
                    project="sample"
                    made="sample"
                    technologies={["python"]}
                    link="sample.com"
                  />
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
