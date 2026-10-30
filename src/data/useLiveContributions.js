import { useEffect, useState } from "react";

// Refreshes each contribution's star count and PR status from GitHub's
// public API. The values in contributions.js are shown first and kept
// as the fallback if GitHub is slow, rate-limited or unreachable.
// Results are cached for the browser session so moving between pages
// doesn't refetch.

const API = "https://api.github.com";
const CACHE_KEY = "github-live-contributions";
const CACHE_MS = 60 * 60 * 1000;

function formatStars(n) {
  if (n < 1000) return String(n);
  return `${(n / 1000).toFixed(n < 10000 ? 1 : 0).replace(/\.0$/, "")}k`;
}

// "https://github.com/NixOS/nix/pull/16726" -> "repos/NixOS/nix/pulls/16726"
function pullApiPath(link) {
  const match = link.match(/github\.com\/([^/]+\/[^/]+)\/pull\/(\d+)/);
  return match ? `repos/${match[1]}/pulls/${match[2]}` : null;
}

async function getJson(path) {
  const res = await fetch(`${API}/${path}`, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub ${res.status} for ${path}`);
  return res.json();
}

function readCache() {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY));
    if (cached && Date.now() - cached.time < CACHE_MS) return cached.live;
  } catch {
    // Storage blocked or corrupt: just fetch.
  }
  return null;
}

function writeCache(live) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ time: Date.now(), live }));
  } catch {
    // Storage blocked: the page still works, it just refetches next time.
  }
}

// live = { stars: { "NixOS/nix": "18k" }, status: { [prLink]: "merged" } }
async function fetchLive(contributions) {
  const repos = [...new Set(contributions.map((c) => c.repo))];
  const pulls = contributions.filter((c) => pullApiPath(c.link));

  // allSettled so one failed request doesn't throw away the others.
  const [repoResults, pullResults] = await Promise.all([
    Promise.allSettled(repos.map((repo) => getJson(`repos/${repo}`))),
    Promise.allSettled(pulls.map((c) => getJson(pullApiPath(c.link)))),
  ]);

  const live = { stars: {}, status: {} };
  repoResults.forEach((r, i) => {
    if (r.status === "fulfilled") live.stars[repos[i]] = formatStars(r.value.stargazers_count);
  });
  pullResults.forEach((r, i) => {
    if (r.status !== "fulfilled") return;
    const pr = r.value;
    live.status[pulls[i].link] = pr.merged_at ? "merged" : pr.state; // "open" | "closed"
  });
  return live;
}

export function useLiveContributions(contributions) {
  const [live, setLive] = useState(readCache);

  useEffect(() => {
    if (live) return;
    let cancelled = false;
    fetchLive(contributions)
      .then((result) => {
        if (cancelled) return;
        writeCache(result);
        setLive(result);
      })
      .catch(() => {
        // Keep the fallback values from contributions.js.
      });
    return () => {
      cancelled = true;
    };
  }, [contributions, live]);

  if (!live) return contributions;
  return contributions.map((c) => ({
    ...c,
    stars: live.stars[c.repo] ?? c.stars,
    status: live.status[c.link] ?? c.status,
  }));
}
