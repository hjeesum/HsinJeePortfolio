import ProjectItem from "../components/ProjectItem";

export default function ListProject() {
  return (
    <div className="group flex flex-col gap-4 mb-6">
      <ProjectItem
        project={"Cohere RAG app for research paper"}
        technologies={["Cohere API", "Python", "Docker", "GROBID"]}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        link={"https://github.com/hjeesum/ResearchPaperSystem"}
        images={["cohere1.jpg", "cohere2.png", "cohere3.png"]}
      />
      <ProjectItem
        project={"Hsin Jee Portfolio"}
        technologies={["React", "Vite", "HTML/CSS", "JavaScript"]}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        link={"https://github.com/hjeesum/HsinJeePortfolio"}
        images={["portfolio1.gif"]}
      />
      <ProjectItem
        project={"Custom CNN model for Breast Cancer Histopathology Images"}
        technologies={["TensorFlow", "Python", "PyTorch", "NumPy"]}
        description={
          "Developed custom Convolutional Neural Network from scratch in pure NumPy for breast cancer tumor detection from histopathological images. Outperformed existing TensorFlow CNNs such as VGG16 and ResNet50, achieving a final result of 90% model accuracy while reducing the model size by 40x."
        }
        link={"https://github.com/hjeesum/BreastCancerCNN"}
        images={["CNN1.png", "CNN2.png", "CNN3.png", "CNN4.png", "CNN5.png"]}
      />
      <ProjectItem
        project={"Formula Studnet AI"}
        technologies={["ROS2", "C", "C++", "MongoDB"]}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        link={"https://github.com/GryphonRacingAI/gra-ros2"}
        images={["projectimage.avif"]}
      />
    </div>
  );
}
