import ProjectItem from "../components/ProjectItem";
import Reveal from "../components/Reveal";

// The main page shows a short, strongest-first selection. Everything
// (including projects not listed here) is in src/data/archive.js.
export default function ListProject() {
  return (
    <div className="group flex flex-col gap-4 mb-6">
      <Reveal>
        {/* The 4-minute presentation is too long for a thumbnail, so the
            card cycles stills and the video is an extra link. The
            -web.jpg files are 16:10 crops made from the originals. */}
        <ProjectItem
          project={"Automated Methods for AI Video Detection (Master's Thesis)"}
          technologies={["Python", "PyTorch", "Video Swin Transformer", "HPC"]}
          description={
            "Five of us tried to catch AI-generated video. I built the Video Swin Transformer (97% precision), made training 35% faster on the uni's supercomputer, and we pitted 8 models against each other. Turns out the data matters more than the model."
          }
          link={"https://github.com/archivehaze/mastersproj26"}
          extraLinks={[
            { label: "▶ Watch the presentation (4 min)", url: "/masters-presentation" },
            { label: "Read the report", url: "/masters-report" },
            { label: "View the poster", url: "/masters-poster" },
          ]}
          images={["mastersproj_group-web.jpg", "mastersproj_poster-web.jpg", "mastersproj_results-web.jpg"]}
        />
      </Reveal>
      <Reveal>
        <ProjectItem
          project={"Custom CNN model for Breast Cancer Histopathology Images (Bachelor's Thesis)"}
          technologies={["TensorFlow", "Python", "PyTorch", "NumPy"]}
          description={
            "Wrote a CNN from scratch in plain NumPy, backprop and all, to spot breast cancer in tissue images. It hit 90% accuracy and beat VGG16 and ResNet50 while being 40x smaller."
          }
          link={"https://github.com/hjeesum/BreastCancerCNN"}
          extraLinks={[{ label: "Read the report", url: "/bachelors-report" }]}
          images={["CNN1.png", "CNN2.png", "CNN3.png", "CNN4.png", "CNN5.png"]}
        />
      </Reveal>
      <Reveal>
        <ProjectItem
          project={"Real-Time Anime Hand Sign Detection & 3D Animation Engine"}
          technologies={["MediaPipe", "ThreeJS", "TensorFlowJS"]}
          description={
            "Do a Jujutsu Kaisen hand sign at your webcam and watch it burst into half a million particles. A model I trained reads the signs at 99% accuracy, and Three.js handles the show."
          }
          link={"https://github.com/hjeesum/DomainExpansion"}
          extraLinks={[
            { label: "LinkedIn post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7435398417788329984/" },
          ]}
          videos={["JJK-cropped.mp4"]}
          mediaPosition="right"
        />
      </Reveal>
      <Reveal>
        {/* Group coursework (3 people) that I led; no repo, so the card
            opens the report. Images are the report's figures on 16:10. */}
        <ProjectItem
          project={"Phase Transitions and Criticality in Conway's Game of Life"}
          technologies={["Python", "NumPy", "SciPy", "Matplotlib"]}
          description={
            "Led a team of three asking whether Conway's Game of Life lives on the edge of chaos. After hundreds of simulations: pretty much, and not at one tipping point but across most starting densities."
          }
          link={"/game-of-life-report"}
          images={["gameoflife_regime-web.jpg", "gameoflife_stabilisation-web.jpg", "gameoflife_population-web.jpg"]}
        />
      </Reveal>
    </div>
  );
}
