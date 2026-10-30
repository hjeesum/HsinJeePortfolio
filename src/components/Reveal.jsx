import { useEffect, useRef, useState } from "react";

// Fades its children in when they scroll into view, and resets
// when they drop back below the viewport so the reveal replays.
// Motion (the slide-up) is handled in CSS and removed under
// prefers-reduced-motion, which keeps a plain opacity fade.
// `delay` (ms) staggers items that enter the viewport together.
export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else if (entry.boundingClientRect.top > 0) {
            // Left through the bottom edge (user scrolled back up):
            // hide again so it replays on the next scroll down.
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ["reveal", visible ? "is-visible" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
