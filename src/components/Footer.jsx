export default function Footer() {
  return (
    <footer
      className="max-w-md text-slate-500 pb-16 sm:pb-0"
    >
      <p>
        Designed and coded in{" "}
        <a
          className="font-medium text-slate-400"
          href="https://code.visualstudio.com/"
        >
          Visual Studio Code
        </a>{" "}
        by yours truly, built with Vite and deployed with Vercel
      </p>
    </footer>
  );
}
