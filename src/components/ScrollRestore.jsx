import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// New pages open at the top; going back (the Back link or the browser's
// back button) returns to wherever that page was scrolled to. Positions
// are kept per history entry, and in sessionStorage so a refresh keeps
// them too.

const STORAGE_KEY = "scroll-positions";

function readPositions() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

const positions = readPositions();

function savePositions() {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch {
    // Storage blocked: positions still work until the tab is refreshed.
  }
}

export default function ScrollRestore() {
  const { key } = useLocation();
  const navigationType = useNavigationType();

  // The browser's own restoration fights ours on single-page apps.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Remember this page's position as it scrolls.
  useEffect(() => {
    const save = () => {
      positions[key] = window.scrollY;
      savePositions();
    };
    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, [key]);

  // Before paint, so the page never flashes at the wrong position.
  useLayoutEffect(() => {
    const saved = positions[key];
    window.scrollTo(0, navigationType === "POP" && saved != null ? saved : 0);
  }, [key, navigationType]);

  return null;
}
