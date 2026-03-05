import RedirectBtn from "./RedirectBtn";
import { useEffect, useMemo, useState } from "react";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov", ".m4v"];

function isVideoFile(fileName = "") {
  const normalized = fileName.toLowerCase();
  return VIDEO_EXTENSIONS.some((extension) => normalized.endsWith(extension));
}

export default function ProjectItem({
  project,
  technologies = [],
  description,
  link,
  images = [],
  videos = [],
}) {
  const media = useMemo(
    () => [
      ...images.map((src) => ({
        type: isVideoFile(src) ? "video" : "image",
        src,
      })),
      ...videos.map((src) => ({ type: "video", src })),
    ],
    [images, videos]
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [media.length]);

  useEffect(() => {
    if (media.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [media.length]);

  return (
    <a
      href={link}
      className="relative -mx-4 md:-mx-5 rounded-xl hover:shadow-lg duration-200 hover:bg-black/30 hover:opacity-100 group-hover:opacity-60 transition-colors cursor-pointer group/experience"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12.5 p-2.5 md:p-7">
        <div className="relative col-span-12 md:col-span-3 mt-2 w-full h-[250px] md:w-[131px] md:h-[100px]">
          {media.map((item, index) => (
            item.type === "video" ? (
              <video
                key={`${item.src}-${index}`}
                src={`/${item.src}`}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                className={`absolute top-0 left-0 w-full h-full object-fill rounded-md transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ) : (
              <img
                key={`${item.src}-${index}`}
                src={`/${item.src}`}
                alt={`Project image ${index}`}
                className={`absolute top-0 left-0 w-full h-full object-fill rounded-md transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            )
          ))}
        </div>
        <div className="md:col-span-9 col-span-12">
          <RedirectBtn>{project}</RedirectBtn>
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
