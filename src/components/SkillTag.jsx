// A single technology chip. Shared by ExperienceItem, ProjectItem and
// TableItem so the look (and the accent hover fill) lives in one place.
// The hover fill is the .skill-tag rule in index.css.
export default function SkillTag({ children }) {
  return (
    <div className="skill-tag flex items-center rounded-none border border-rule px-3 py-1 text-xs tracking-wide text-ink-3">
      {children}
    </div>
  );
}
