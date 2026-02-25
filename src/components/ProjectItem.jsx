import RedirectBtn from "./RedirectBtn";
import { useState } from "react";
import { useEffect } from "react";

export default function ProjectItem({
  project,
  technologies = [],
  description,
  link,
  images = [],
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);
  return (
    <a
      href={link}
      className="relative -mx-4 md:-mx-5 rounded-xl hover:shadow-lg duration-200 hover:bg-black/30 hover:opacity-100 group-hover:opacity-60 transition-colors cursor-pointer group/experience"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12.5 p-2.5 md:p-7">
        <div className="relative col-span-12 md:col-span-3 mt-2 w-full h-[250px] md:w-[131px] md:h-[100px]">
          {images.map((img, index) => (
            <img
              key={index}
              src={`/${img}`}
              alt={`Project image ${index}`}
              className={`absolute top-0 left-0 w-full h-full object-fill rounded-md transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>
        <div className="md:col-span-9 col-span-12">
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
      </div>
    </a>
  );
}
