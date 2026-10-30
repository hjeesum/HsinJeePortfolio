// Every project shown on /archive. Newest first is handled by the page (sorted by year).
// Edit this list to add a row - no other file needs to change.
// Optional `extraLinks: [{ label, url }]` adds more links under the main one.
// Optional `linkLabel` names the main link (e.g. "Report" for a page on this site).
export const archiveProjects = [
  {
    year: "2026",
    project: "Automated Methods for AI Video Detection (Master's Thesis)",
    made: "University of Leeds",
    technologies: ["Python", "PyTorch", "Video Swin Transformer", "HPC"],
    link: "https://github.com/archivehaze/mastersproj26",
    extraLinks: [
      { label: "Presentation", url: "/masters-presentation" },
      { label: "Report", url: "/masters-report" },
      { label: "Poster", url: "/masters-poster" },
    ],
  },
  {
    year: "2026",
    project: "Phase Transitions and Criticality in Conway's Game of Life",
    made: "University of Leeds",
    technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
    link: "/game-of-life-report",
    linkLabel: "Report",
  },
  {
    year: "2026",
    project: "Repo Radar: Beginner-Friendly GitHub Issue Finder",
    made: "Personal project",
    technologies: ["Python", "GitHub REST API", "Requests", "uv"],
    link: "https://github.com/hjeesum/repo-radar",
  },
  {
    year: "2025",
    project: "DurKart: Mario Kart Win Predictor (DurHack 2025, G-Research Honourable Mention)",
    made: "DurHack 2025",
    technologies: ["Python", "TensorFlow", "HTML", "CSS"],
    link: "https://github.com/archivehaze/durkart",
  },
  {
    year: "2025",
    project: "Real-Time Anime Hand Sign Detection & 3D Animation Engine",
    made: "Personal project",
    technologies: ["MediaPipe", "ThreeJS", "TensorFlowJS"],
    link: "https://github.com/hjeesum/DomainExpansion",
    extraLinks: [
      {
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7435398417788329984/",
      },
    ],
  },
  {
    year: "2025",
    project: "Cohere RAG app for research papers",
    made: "Personal project",
    technologies: ["Cohere API", "Python", "Docker", "GROBID"],
    link: "https://github.com/hjeesum/ResearchPaperSystem",
  },
  {
    year: "2025",
    project: "Formula Student AI",
    made: "Leeds Gryphon Racing",
    technologies: ["ROS2", "C", "C++"],
    link: "https://github.com/GryphonRacingAI/gra-ros2",
  },
  {
    year: "2025",
    project: "Hsin Jee Portfolio",
    made: "Personal project",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/hjeesum/HsinJeePortfolio",
  },
  {
    year: "2024",
    project: "Custom CNN for Breast Cancer Histopathology Images (Bachelor's Thesis)",
    made: "University of Leeds",
    technologies: ["Python", "NumPy", "TensorFlow", "PyTorch"],
    link: "https://github.com/hjeesum/BreastCancerCNN",
    extraLinks: [{ label: "Report", url: "/bachelors-report" }],
  },
];
