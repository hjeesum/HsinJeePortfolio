// Every pull request shown on /open-source, newest first is handled by
// the page (sorted by date). Add an entry per PR - no other file needs
// to change. When a PR is merged, change its status to "merged".
//
// status: "merged" | "open" | "closed"
// stars:  the repo's star count as display text, for context
export const contributions = [
  {
    date: "2026-10-29",
    repo: "NixOS/nix",
    stars: "18k",
    language: "C++",
    summary:
      "Made deletePath return a result struct instead of filling an out-parameter, ruling out a class of uninitialised-value bugs. Fixes #16623.",
    link: "https://github.com/NixOS/nix/pull/16726",
    status: "open",
  },
  {
    date: "2026-10-28",
    repo: "langgenius/dify",
    stars: "160k",
    language: "Python",
    summary:
      "Moved the message transformer's tool file lookup tests from mocked sessions to a real SQLite session.",
    link: "https://github.com/langgenius/dify/pull/45000",
    status: "open",
  },
  {
    date: "2026-10-28",
    repo: "langgenius/dify",
    stars: "160k",
    language: "Python",
    summary:
      "Replaced the mocked session in the node execution list test with a real SQLite session.",
    link: "https://github.com/langgenius/dify/pull/44998",
    status: "merged",
  },
  {
    date: "2026-10-28",
    repo: "langgenius/dify",
    stars: "160k",
    language: "Python",
    summary:
      "Switched the legacy agent node validator test to an unbound session so it exercises real database behaviour.",
    link: "https://github.com/langgenius/dify/pull/44996",
    status: "merged",
  },
];
