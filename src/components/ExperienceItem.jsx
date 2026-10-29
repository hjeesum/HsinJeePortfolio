import RedirectBtn from "./RedirectBtn";

export default function ExperienceItem({
  date,
  company,
  position,
  technologies,
  description,
  link,
}) {
  // New style: { first: "SEP", firstYear: "2025", end: "JUL", endYear: "2026" }
  // Old style still works: { first: "JUL", end: "SEP", year: "2024" }
  const dateText =
    date.firstYear || date.endYear
      ? `${date.first} ${date.firstYear ?? date.year ?? ""} - ${date.end} ${date.endYear ?? date.year ?? ""}`
          .replace(/\s+/g, " ")
          .trim()
      : `${date.first} - ${date.end} ${date.year ?? ""}`.trim();

  return (
    <a
      href={link}
      className="relative -mx-4 md:-mx-5 rounded-xl hover:shadow-lg duration-200 hover:opacity-100 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:bg-black/20 group-hover:opacity-60 transition-colors cursor-pointer group/experience"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-2.5 md:p-7">
        <header
          className="text-[14px] md:col-span-3 sm:col-span-3 mt-0.5 font-semibold opacity-60"
          aria-label={dateText}
        >
          {dateText}
        </header>

        <div className="col-span-9">
          <RedirectBtn>
            {position} · {company}
          </RedirectBtn>
          <p className="text-[14px] mt-2 text-slate-400">{description}</p>

          {technologies.length > 0 && (
            <ul className="flex flex-wrap mt-5 gap-1">
              {technologies.map((technology, i) => (
                <li key={i}>
                  <div className="flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-300">
                    {technology}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </a>
  );
}