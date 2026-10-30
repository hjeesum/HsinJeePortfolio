import SubPage, { SubPageButton } from "../components/SubPage";

// Shows a PDF inside the site (résumé, reports). <object> falls back to
// its children on browsers that can't show PDFs inline (most phones),
// so they still get a way to open it.
function PdfPage({ title, pdf, downloadName }) {
  return (
    <SubPage
      title={title}
      actions={
        <SubPageButton href={pdf} download={downloadName}>
          Download PDF
        </SubPageButton>
      }
    >
      <object
        data={pdf}
        type="application/pdf"
        aria-label={title}
        className="mt-10 block w-full h-[85vh] min-h-[560px] border border-rule-soft"
      >
        <div className="flex h-full flex-col items-start justify-center gap-4 p-8 text-muted">
          <p>Your browser can't show this PDF here.</p>
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-rule px-5 py-2 text-sm text-ink transition-colors hover:border-accent"
          >
            Open the PDF
          </a>
        </div>
      </object>
    </SubPage>
  );
}

export default PdfPage;
