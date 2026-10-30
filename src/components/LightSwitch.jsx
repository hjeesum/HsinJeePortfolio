import { useEffect, useRef, useState } from "react";

// A pull cord hanging from the top edge of the page that toggles
// light/dark mode. The theme lives on <html data-theme>; the inline
// script in index.html restores the saved choice before first paint.
//
// The cord is a verlet rope: a chain of points held a fixed distance
// apart, pinned at the top, pulled down by gravity and drifting in a
// light breeze. Moving the mouse across any part of it pushes the
// nearby points along, so the string bends where it's touched.
//
// The bead is the lamp's bulb: it glows in dark mode, and pulling
// the cord sends a warm wash of light out across the page from it.

const WIDTH = 120; // svg box width; the cord hangs from its centre
const HEIGHT = 120;
const POINTS = 16;
const BEAD_R = 4.5;
const HIT = 36; // clickable box around the bead
const GRAVITY = 0.45; // px per frame²
const DAMPING = 0.985; // velocity kept each frame (lower = settles faster)
const ITERATIONS = 24; // constraint passes; more = stiffer string
const BREEZE = 0.012; // idle sway strength
const TOUCH_RADIUS = 16; // how close the mouse must pass to move the string
const TOUCH_STRENGTH = 0.4; // share of mouse movement passed to the string
const TOUCH_MAX = 10; // cap on the push from a single mouse event
const STRETCH_K = 0.12; // tug spring stiffness (per frame)
const STRETCH_DAMPING = 0.82;
const TUG = 7; // initial stretch speed when clicked
const GLOW_R = 16; // radius of the bulb glow around the bead

function currentTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

// Distance from point p to the segment a→b.
function distToSegment(px, py, ax, ay, bx, by) {
  const dx = bx - ax;
  const dy = by - ay;
  const lenSq = dx * dx + dy * dy;
  const t = lenSq ? Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lenSq)) : 0;
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

export default function LightSwitch() {
  const [theme, setTheme] = useState(currentTheme);
  const boxRef = useRef(null);
  const pathRef = useRef(null);
  const beadRef = useRef(null);
  const glowRef = useRef(null);
  const buttonRef = useRef(null);
  const tugRef = useRef(() => {});
  const beadPos = useRef({ x: 0, y: 0 });
  const [wash, setWash] = useState(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const length = window.matchMedia("(max-width: 640px)").matches ? 52 : 72;
    const anchorX = WIDTH / 2;
    const anchorY = -2;

    // Start the rope swung out to one side so it drops into place.
    const pts = Array.from({ length: POINTS }, (_, i) => {
      const r = (i / (POINTS - 1)) * length;
      const x = anchorX + (reduceMotion ? 0 : r * Math.sin(0.5));
      const y = anchorY + r * (reduceMotion ? 1 : Math.cos(0.5));
      return { x, y, px: x, py: y };
    });
    let stretch = 0;
    let stretchVel = 0;

    const draw = () => {
      // Smooth curve through the points via quadratic midpoints.
      let d = `M${pts[0].x},${pts[0].y}`;
      for (let i = 1; i < POINTS - 1; i++) {
        const mx = (pts[i].x + pts[i + 1].x) / 2;
        const my = (pts[i].y + pts[i + 1].y) / 2;
        d += ` Q${pts[i].x},${pts[i].y} ${mx},${my}`;
      }
      const end = pts[POINTS - 1];
      d += ` L${end.x},${end.y}`;
      pathRef.current.setAttribute("d", d);
      beadRef.current.setAttribute("cx", end.x);
      beadRef.current.setAttribute("cy", end.y);
      glowRef.current.setAttribute("cx", end.x);
      glowRef.current.setAttribute("cy", end.y);
      beadPos.current = { x: end.x, y: end.y };
      buttonRef.current.style.transform = `translate(${end.x - HIT / 2}px, ${
        end.y - HIT / 2
      }px)`;
    };

    const step = (t) => {
      stretchVel = (stretchVel - STRETCH_K * stretch) * STRETCH_DAMPING;
      stretch += stretchVel;
      const segment = (length + stretch) / (POINTS - 1);
      const breeze =
        BREEZE * (Math.sin(t * 0.0007) + 0.5 * Math.sin(t * 0.0019 + 1.3));

      for (let i = 1; i < POINTS; i++) {
        const p = pts[i];
        const vx = (p.x - p.px) * DAMPING;
        const vy = (p.y - p.py) * DAMPING;
        p.px = p.x;
        p.py = p.y;
        p.x += vx + breeze * (i / POINTS);
        p.y += vy + GRAVITY;
      }

      for (let k = 0; k < ITERATIONS; k++) {
        pts[0].x = anchorX;
        pts[0].y = anchorY;
        for (let i = 0; i < POINTS - 1; i++) {
          const a = pts[i];
          const b = pts[i + 1];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 0.0001;
          const diff = (dist - segment) / dist;
          // The pinned top point never moves, so its neighbour takes
          // the full correction.
          const share = i === 0 ? 1 : 0.5;
          if (i !== 0) {
            a.x += dx * diff * share;
            a.y += dy * diff * share;
          }
          b.x -= dx * diff * share;
          b.y -= dy * diff * share;
        }
      }
      draw();
    };

    // Push points the mouse passed near since its last position.
    let last = null;
    const onPointerMove = (e) => {
      const box = boxRef.current.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      if (last) {
        const mdx = Math.max(-TOUCH_MAX, Math.min(TOUCH_MAX, (x - last.x) * TOUCH_STRENGTH));
        const mdy = Math.max(-TOUCH_MAX, Math.min(TOUCH_MAX, (y - last.y) * TOUCH_STRENGTH));
        for (let i = 1; i < POINTS; i++) {
          const p = pts[i];
          const d = distToSegment(p.x, p.y, last.x, last.y, x, y);
          if (d < TOUCH_RADIUS) {
            const falloff = 1 - d / TOUCH_RADIUS;
            p.x += mdx * falloff;
            p.y += mdy * falloff;
          }
        }
      }
      last = { x, y };
    };
    const onPointerLeave = () => {
      last = null;
    };

    tugRef.current = () => {
      stretchVel += TUG;
    };

    draw();
    if (reduceMotion) return;

    // Fixed 60Hz steps so the string moves the same on any refresh rate.
    const STEP_MS = 1000 / 60;
    let prev = performance.now();
    let pending = 0;
    let frame = requestAnimationFrame(function loop(t) {
      pending += Math.min(t - prev, 100);
      prev = t;
      while (pending >= STEP_MS) {
        step(t);
        pending -= STEP_MS;
      }
      frame = requestAnimationFrame(loop);
    });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    const apply = () => {
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage blocked: the switch still works for this visit.
    }

    tugRef.current();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!reduceMotion) {
      const box = boxRef.current.getBoundingClientRect();
      setWash({
        id: Date.now(),
        x: box.left + beadPos.current.x,
        y: box.top + beadPos.current.y,
      });
    }
    // Flip the lights as the cord reaches the bottom of its tug,
    // cross-fading the whole page where View Transitions exist.
    setTimeout(
      () => {
        if (document.startViewTransition && !reduceMotion) {
          document.startViewTransition(apply);
        } else {
          apply();
        }
      },
      reduceMotion ? 0 : 120
    );
  };

  const label = theme === "light" ? "Lights off" : "Lights on";
  return (
    <div
      ref={boxRef}
      className="light-switch"
      style={{ width: WIDTH, height: HEIGHT }}
    >
      {wash && (
        <div
          key={wash.id}
          className="light-wash"
          style={{ "--wash-x": `${wash.x}px`, "--wash-y": `${wash.y}px` }}
          onAnimationEnd={() => setWash(null)}
        />
      )}
      <svg
        className="light-switch__svg"
        width={WIDTH}
        height={HEIGHT}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="light-switch-glow">
            <stop offset="0%" className="light-switch__glow-stop" />
            <stop
              offset="100%"
              className="light-switch__glow-stop"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>
        <circle
          ref={glowRef}
          r={GLOW_R}
          fill="url(#light-switch-glow)"
          className="light-switch__glow"
        />
        <path ref={pathRef} className="light-switch__cord" />
        <circle ref={beadRef} r={BEAD_R} className="light-switch__bead" />
      </svg>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        className="light-switch__hit"
        style={{ width: HIT, height: HIT }}
        aria-label={
          theme === "light" ? "Switch to dark mode" : "Switch to light mode"
        }
        title={label}
      >
        <span className="light-switch__label" aria-hidden="true">
          {label}
        </span>
      </button>
    </div>
  );
}
