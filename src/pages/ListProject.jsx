import ProjectItem from "../components/ProjectItem";

export default function ListProject() {
  return (
    <div className="group flex flex-col gap-4 mb-6">
      <ProjectItem
        project={"AI App"}
        technologies={["React", "Node.js", "Express", "MongoDB"]}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        link={""}
      />
      <ProjectItem
        project={"AI App"}
        technologies={["React", "Node.js", "Express", "MongoDB"]}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        link={""}
      />
      <ProjectItem
        project={"AI App"}
        technologies={["React", "Node.js", "Express", "MongoDB"]}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        link={""}
      />
      <ProjectItem
        project={"AI App"}
        technologies={["React", "Node.js", "Express", "MongoDB"]}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        link={""}
      />
    </div>
  );
}
