import RedirectBtn from "./RedirectBtn";

export default function ProjectItem({
  project,
  technologies,
  description,
  link,
}) {
  return (
    <a href={link} className="grid grid-cols-12 gap-2 md:gap-4 duration-200 hover:bg-black/30 hover:opacity-100 group-hover:opacity-60 transition-colors rounded-xl hover:shadow-lg group/experience p-5 cursor-pointer">
      <img
        src="/projectimage.avif"
        className="col-span-3 w-full h-auto rounded-md mt-2"
        alt="Project image"
      />
      <div className="col-span-9">
        <RedirectBtn>{project}</RedirectBtn>
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
    </a>
  );
}
