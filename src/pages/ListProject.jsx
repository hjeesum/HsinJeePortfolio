import ProjectItem from "../components/ProjectItem";

export default function ListProject() {
  return (   
    <div className="group flex flex-col gap-4 mb-6">
      <ProjectItem
        project={"Repo Radar: Beginner-Friendly GitHub Issue Finder"}
        technologies={["Python", "GitHub REST API", "Requests", "uv"]}
        description={
          "Built a Python command-line tool that scans the most-starred GitHub repositories through the REST API and surfaces recent, unassigned 'good first issue' tickets. It filters out pull requests, stale threads and heavily discussed issues, authenticates with a token to handle rate limits, and prints a colour-coded, copy-ready list of links. Used it to find an issue in Dify that I submitted three pull requests for."
        }
        link={"https://github.com/hjeesum/repo-radar"}
      />
      <ProjectItem
        project={"Real-Time Anime Hand Sign Detection & 3D Animation Engine"}
        technologies={["MediaPipe", "ThreeJS", "TensorFlowJS"]}
        description={
          "Developed a real-time gesture recognition system using TensorFlow.js and MediaPipe. I trained a custom classification model on normalized landmark coordinates to identify iconic Jujutsu Kaisen hand signs, triggering complex Three.js animations powered by Gemini and Codex. Built a Handsign detector."
        }
        link={"https://github.com/hjeesum/DomainExpansion"}
        videos={["JJK.mp4"]}
      />
      <ProjectItem
        project={"Cohere RAG app for research paper"}
        technologies={["Cohere API", "Python", "Docker", "GROBID"]}
        description={
          "Built an AI assistant using Cohere that implements a RAG pipeline to analyze research papers. The system parses PDFs with Dockerized GROBID, performs intelligent chunking and semantic embedding for similarity search, and delivers context-aware answers through a streamlined CLI interface."
        }
        link={"https://github.com/hjeesum/ResearchPaperSystem"}
        images={["cohere1.jpg", "cohere2.png", "cohere3.png"]}
      />
      <ProjectItem
        project={"Hsin Jee Portfolio"}
        technologies={["React", "Vite", "HTML/CSS", "JavaScript"]}
        description={
          "Portfolio website."
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
        project={"Formula Student AI"}
        technologies={["ROS2", "C", "C++"]}
        description={
          "Part of a Formula Student racing team, worked on autonomous systems development, focusing on training and optimizing a YOLOv8-based vision model for real-time racetrack object detection, while contributing to sensor fusion and simulation testing."
        }
        link={"https://github.com/GryphonRacingAI/gra-ros2"}
        images={["formula1.png", "formula2.png", "formula3.png"]}
      />
    </div>
  );
}
