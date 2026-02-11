function RedirectBtn({ children}) {
  return (
    <span
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex group/experience items-center gap-2 group-hover/experience:text-yellow-400 transition-colors text-md `font-semibold`"
    >
      {children}
      <i className="fa-solid fa-arrow-up-right-from-square transition-transform group-hover/experience:translate-x-0.5 group-hover/experience:-translate-y-0.5 duration-200"></i>
    </span>
  );
}

export default RedirectBtn;

