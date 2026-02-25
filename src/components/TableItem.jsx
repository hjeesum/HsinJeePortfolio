import RedirectBtn from "./RedirectBtn";

function TableItem({ year, project, made, technologies = [], link }) {
  const techList = Array.isArray(technologies)
    ? technologies
    : [technologies].filter(Boolean);

  return (
    <tr className="border-b h-16 border-slate-700 last:border-none">
      <td className="px-4 py-4 whitespace-nowrap text-slate-400">
        {year}
      </td>
      <td className="px-4 py-4 font-bold sm:table-cell hidden">{project}</td>
      <td className="px-4 py-4 font-bold sm:hidden">
        <a
          href={"https://" + link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/experience"
        >
          <RedirectBtn>{project}</RedirectBtn>
        </a>
      </td>
      <td className="px-4 py-4 text-slate-400 lg:table-cell hidden">{made}</td>
      <td className="px-4 py-4 lg:table-cell hidden">
        {techList.length > 0 && (
          <ul className="flex flex-wrap gap-1">
            {techList.map((technology, i) => (
              <li key={i}>
                <div className="flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-300">
                  {technology}
                </div>
              </li>
            ))}
          </ul>
        )}
      </td>
      <td className="px-4 py-4 text-slate-400 sm:table-cell hidden">
        <a
          href={"https://" + link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/experience"
        >
          <RedirectBtn>{link}</RedirectBtn>
        </a>
      </td>
    </tr>
  );
}

export default TableItem;
