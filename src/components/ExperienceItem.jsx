import RedirectBtn from "./RedirectBtn";

export default function ExperienceItem({
  date,
  company,
  position,
  technologies,
  description,
  link,
}) {
  return (
    <a
      href={link}
      className="relative -mx-4 md:-mx-5 rounded-xl hover:shadow-lg duration-200 hover:opacity-100 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:bg-black/20 group-hover:opacity-60 transition-colors cursor-pointer group/experience"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-2.5 md:p-7">
        <header
          className="text-[14px] md:col-span-3 sm:col-span-3 mt-0.5 font-semibold opacity-60"
          aria-label={`${date.first} - ${date.end} ${date.year}`}
        >
          {date.first} - {date.end} {date.year}
        </header>

        <div className="col-span-9">
          <RedirectBtn>
            {position} · {company}
          </RedirectBtn>
          <p className="text-[14px] mt-2">{description}</p>

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
