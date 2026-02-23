import ExperienceItem from "../components/ExperienceItem";

export default function ListExperience() {
  return (
    <div className="group flex flex-col gap-4 mb-6">
      <ExperienceItem
        date={{ first: "2025", end: "PRESENT", year: "" }}
        company={"Leeds Gryphon Racing"}
        position={"AI R&D Division"}
        technologies={["ROS2", "C++", "C", "Python", "Computer Vision"]}
        description={
          "University of Leed's Formula Student AI team, developed autonomous racing systems across perception, simulation, and system integration. Race simulations validated strategies before on-track testing, improving reliability. A vision-based racetrack object detection system enhanced accuracy and real-time performance, while collaborating with the mechanical team ensured alignment with structural and thermal analyses for a competition-ready platform."
        }
        link={"https://leedsgryphonracing.com/"}
      />
      <ExperienceItem
        date={{ first: "AUG", end: "SEP", year: "2025" }}
        company={"SRKK"}
        position={"Business Process Automation Intern"}
        technologies={["Microsoft Azure", "Python", "Copilot Studio", "Power Automate"]}
        description={
          "Developed a tool to ingest, analyze, and automatically populate company request-for-proposal documents. Enabled semantic understanding across large, unstructured requirement sets, reducing manual review effort and improving accuracy. Structured data extraction and content matching supported automated responses, streamlining the overall RFP workflow."
        }
        link={"https://www.srkk.com/"}
      />
      <ExperienceItem
        date={{ first: "JUL", end: "SEP", year: "2024" }}
        company={"EH Integrated Systems"}
        position={"Software Developer Intern"}
        technologies={["HTML", "CSS", "JavaScript", "MySQL", "Docker"]}
        description={
          "Built and maintained web applications for clients, ensuring responsive design and cross-browser compatibility. Managed databases with MySQL, optimizing queries for performance. Utilized Docker for containerization, streamlining development and deployment processes."
        }
        link={"https://eh-int.com/"}
      />
    </div>
  );
}
