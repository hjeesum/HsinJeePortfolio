function Contact() {
  return (
    <div className="mt-20 mb-20">
      <div className="flex items-center gap-2 mt-3 cursor-pointer group/contact">
        <span>hsinjeesum@gmail.com</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 group-hover/contact:-translate-y-0.5 group-hover/contact:translate-x-0.5 duration-200 transition-transform"
          aria-hidden="true"
        >
          <path d="M1.5 4.5h21v15h-21v-15zm2 2v11h17v-11h-17zm1.5.75l7.5 5.25 7.5-5.25v-.75h-15v.75z" />
        </svg>
      </div>

      <div className="flex items-center gap-2 mt-3 cursor-pointer group/contact">
        <span>+44 7858-325-831</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 group-hover/contact:-translate-y-0.5 group-hover/contact:translate-x-0.5 duration-200 transition-transform"
          aria-hidden="true"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.72 11.72 0 003.64.58 1 1 0 011 1v3.5a1 1 0 01-1 1C10.5 22 2 13.5 2 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.49.58 3.64a1 1 0 01-.21 1.11l-2.2 2.2z" />
        </svg>
      </div>
    </div>
  );
}

export default Contact;
