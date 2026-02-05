import RedirectBtn from "./RedirectBtn";

export default function ExperienceItem({ date, company, position, technologies, description, link}) {
  return (
    <a href={link} className="grid grid-cols-12 gap-2 md:gap-4 duration-200 hover:bg-black/30 hover:opacity-100 group-hover:opacity-60 transition-colors rounded-xl hover:shadow-lg group/experience p-5 cursor-pointer">
      <header
        className="text-[14px] col-span-3 sm:col-span-3 mt-1.25 font-semibold"
        aria-label="{date.first} - {date.end} {date.year}"
      >
        {date.first} - {date.end} {date.year}
      </header>
      <div className="col-span-9">
        <RedirectBtn>{position} · {company}</RedirectBtn> 
        <p className="text-[14px] mt-2">
          {description}
        </p>
        {technologies.length > 0 && (
          <ul className="flex flex-wrap mt-5 gap-1">
            {technologies.map((technology, i) => (
              <li key={i}>
                <div className="flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-300">{technology}</div></li>
            ))}
          </ul>
        )}
      </div>
    </a>
  );
}
