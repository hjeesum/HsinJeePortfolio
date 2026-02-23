function RedirectBtn({ children }) {
  return (
    <span
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex group/experience items-center gap-2 group-hover/experience:text-yellow-400 transition-colors text-md font-semibold"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3.5 h-3.5 transition-transform duration-200 group-hover/experience:translate-x-0.5 group-hover/experience:-translate-y-0.5 translate-y-0.5 -translate-x-0.5"
      >
        <path
          fillRule="evenodd"
          d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

export default RedirectBtn;
