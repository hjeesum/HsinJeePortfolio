import RedirectBtn from "./RedirectBtn";
import SkillTag from "./SkillTag";
import LinkLabel from "./LinkLabel";
import SmartLink from "./SmartLink";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov", ".m4v"];

function isVideoFile(fileName = "") {
  const normalized = fileName.toLowerCase();
  return VIDEO_EXTENSIONS.some((extension) => normalized.endsWith(extension));
}

// Which part of the media stays in view when it's zoomed to fill the
// frame. Written out in full so Tailwind can see the class names.
const MEDIA_POSITIONS = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
  left: "object-left",
  right: "object-right",
};

export default function ProjectItem({
  project,
  technologies = [],
  description,
  link,
  extraLinks = [],
  images = [],
  videos = [],
  mediaPosition = "center",
}) {
  const positionClass = MEDIA_POSITIONS[mediaPosition] ?? MEDIA_POSITIONS.center;
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
  // Thumbnails sit still on their first frame and only cycle / play
  // while the project is hovered or focused, so a list of projects
  // isn't all moving at once.
  const [active, setActive] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [media.length]);

  useEffect(() => {
    if (!active) {
      setCurrentIndex(0);
      return;
    }
    if (media.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, 1600);

    return () => clearInterval(interval);
  }, [active, media.length]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (active && index === currentIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active, currentIndex]);

  // The card is a div, not a link, so it can hold extra links (links
  // can't nest). The title link stretches over the whole card with
  // after:inset-0; extra links sit above it with z-10.
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={`relative -mx-4 md:-mx-5 rounded-none hover:shadow-lg duration-200 hover:bg-strong/[0.04] hover:opacity-100 group-hover:opacity-60 transition-colors group/experience`}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-5 md:gap-6 p-2.5 md:p-7">
        {/* Full-width 16:10 frame. Media uses object-cover: anything that
            doesn't match the frame's shape is zoomed in, centred, until it
            fills the box completely, and the overflow is cropped. */}
        {media.length > 0 && (
        // isolate keeps the media's z-index inside the frame, so the
        // stretched title link still covers it and takes the click.
        <div className="relative isolate w-full aspect-[16/10] overflow-hidden border border-rule-soft">
          {media.map((item, index) => (
            item.type === "video" ? (
              <video
                key={`${item.src}-${index}`}
                ref={(el) => (videoRefs.current[index] = el)}
                // #t=0.1 shows a real frame instead of black before playing.
                src={`/${item.src}#t=0.1`}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${project} demo video`}
                className={`absolute top-0 left-0 w-full h-full object-cover ${positionClass} rounded-none transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ) : (
              <img
                key={`${item.src}-${index}`}
                src={`/${item.src}`}
                alt={`${project} screenshot ${index + 1}`}
                loading="lazy"
                className={`absolute top-0 left-0 w-full h-full object-cover ${positionClass} rounded-none transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            )
          ))}
        </div>
        )}
        <div>
          {link ? (
            // Pages on this site go through the router; GitHub etc. stay a
            // plain same-tab link, as before.
            link.startsWith("/") ? (
              <Link to={link} className="after:absolute after:inset-0">
                <RedirectBtn>{project}</RedirectBtn>
              </Link>
            ) : (
              <a href={link} className="after:absolute after:inset-0">
                <RedirectBtn>{project}</RedirectBtn>
              </a>
            )
          ) : (
            <span className="font-display text-[17px] transition-colors group-hover/experience:text-accent">{project}</span>
          )}
          <p className="text-[14px] mt-2 text-muted">{description}</p>

          {extraLinks.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
              {extraLinks.map(({ label, url }) => (
                <SmartLink
                  key={url}
                  href={url}
                  className="relative z-10 inline-flex items-center gap-1.5 whitespace-nowrap border-b border-rule pb-0.5 text-sm text-ink-3 transition-colors hover:border-accent hover:text-accent"
                >
                  <LinkLabel url={url} label={label} />
                </SmartLink>
              ))}
            </div>
          )}

          {technologies.length > 0 && (
            // Above the stretched title link, so each tag gets its own hover.
            <ul className="relative z-10 flex flex-wrap mt-5 gap-1">
              {technologies.map((technology, i) => (
                <li key={i}>
                  <SkillTag>{technology}</SkillTag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
