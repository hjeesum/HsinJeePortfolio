import ExperienceItem from "../components/ExperienceItem";
import Reveal from "../components/Reveal";

export default function ListExperience() {
  return (
    <div className="group flex flex-col gap-4 mb-6">
      <Reveal>
        <ExperienceItem
          date={{ first: "SEP", firstYear: "2025", end: "JUL", endYear: "2026" }}
          company={"Leeds Gryphon Racing"}
          position={"AI R&D Division"}
          technologies={["ROS2", "C++", "C", "Python", "Computer Vision"]}
          description={
            "Led the vision team on Leeds' driverless race car. We got cone detection running in under 20ms, tested most things in simulation before touching the track, and finished 24th of 59 at Formula Student UK."
          }
          link={"https://leedsgryphonracing.com/"}
        />
      </Reveal>
      <Reveal>
        <ExperienceItem
          date={{ first: "AUG", firstYear: "2025", end: "SEP", endYear: "2025" }}
          company={"SRKK"}
          position={"Business Process Automation Intern"}
          technologies={["Microsoft Azure", "Python", "Copilot Studio", "Power Automate"]}
          description={
            "Built a RAG pipeline that reads 1000+ page proposal documents and drafts the answers, so people spend about 70% less time combing through them."
          }
          link={"https://www.srkk.com/"}
        />
      </Reveal>
      <Reveal>
        <ExperienceItem
          date={{ first: "JUL", firstYear: "2024", end: "SEP", endYear: "2024" }}
          company={"EH Integrated Systems"}
          position={"Software Developer Intern"}
          technologies={["HTML", "CSS", "JavaScript", "MySQL", "Docker"]}
          description={
            "Worked on the backend behind client web apps: designed the MySQL database, sped up slow queries, and Dockerised the services so setting up a new environment took minutes instead of an afternoon."
          }
          link={"https://eh-int.com/"}
        />
      </Reveal>
    </div>
  );
}
