import ExperienceItem from "../components/ExperienceItem";

export default function ListExperience() {
  return (
    <div className="group flex flex-col gap-4 mb-1">
      <ExperienceItem
        date={{ first: "2025", end: "PRESENT", year: "" }}
        company={"Leeds Gryphon Racing"}
        position={"AI R&D Division"}
        technologies={["ROS2", "C++", "C", "Python", "Computer Vision"]}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        link={"https://leedsgryphonracing.com/"}
      />
      <ExperienceItem
        date={{ first: "AUG", end: "SEP", year: "2025" }}
        company={"SRKK"}
        position={"Business Process Automation Intern"}
        technologies={["HTML", "C++", "C"]}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        link={"https://www.srkk.com/"}
      />
      <ExperienceItem
        date={{ first: "JUL", end: "SEP", year: "2024" }}
        company={"EH Integrated Systems"}
        position={"Software Developer Intern"}
        technologies={["HTML", "C++", "C"]}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        link={"https://eh-int.com/"}
      />
    </div>
  );
}
