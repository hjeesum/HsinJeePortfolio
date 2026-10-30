import { Link } from "react-router-dom";
import SubPage, { SubPageButton } from "../components/SubPage";

const VIDEO = "/mastersproj_video.mp4";

// The master's thesis presentation video, in the same layout as the
// résumé, with the report and code one click away.
function Presentation() {
  return (
    <SubPage
      title="Thesis Presentation"
      actions={
        <>
          <Link
            to="/masters-report"
            className="inline-flex items-center border border-rule px-5 py-2 text-sm transition-colors hover:border-accent"
          >
            Read the report
          </Link>
          <Link
            to="/masters-poster"
            className="inline-flex items-center border border-rule px-5 py-2 text-sm transition-colors hover:border-accent"
          >
            View the poster
          </Link>
          <SubPageButton href="https://github.com/archivehaze/mastersproj26" target="_blank" rel="noopener noreferrer">
            GitHub
          </SubPageButton>
        </>
      }
    >
      <p className="mt-4 max-w-2xl text-muted">
        Automated Methods for AI Video Detection: comparing 8 architectures,
        from CNN baselines to a Video Swin Transformer, on AI-generated video
        from sources none of them saw in training.
      </p>
      <video
        src={VIDEO}
        poster="/mastersproj_title-web.jpg"
        controls
        playsInline
        preload="metadata"
        className="mt-10 block w-full aspect-video bg-black border border-rule-soft"
      >
        <a href={VIDEO}>Download the presentation video</a>
      </video>
    </SubPage>
  );
}

export default Presentation;
