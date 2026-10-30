import RedirectBtn from "./RedirectBtn";

function TableItem({ year, project, made, technologies = [], link }) {
  const techList = Array.isArray(technologies)
    ? technologies
    : [technologies].filter(Boolean);
  const linkLabel = link.replace(/^https?:\/\//, "");

  return (
    <tr className="border-b h-16 border-slate-700 last:border-none">
      <td className="py-4 pr-8 align-top whitespace-nowrap text-slate-400">{year}</td>
      <td className="py-4 pr-8 align-top font-bold sm:table-cell hidden">{project}</td>
      <td className="py-4 pr-8 align-top font-bold sm:hidden">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/experience"
        >
          <RedirectBtn>{project}</RedirectBtn>
        </a>
      </td>
      <td className="py-4 pr-8 align-top text-slate-400 lg:table-cell hidden">{made}</td>
      <td className="py-4 pr-8 align-top lg:table-cell hidden">
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
      <td className="py-4 pr-8 align-top text-slate-400 sm:table-cell hidden">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/experience"
        >
          <RedirectBtn>{linkLabel}</RedirectBtn>
        </a>
      </td>
    </tr>
  );
}

export default TableItem;
