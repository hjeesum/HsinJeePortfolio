import { Link } from "react-router-dom";

// Pages on this site ("/masters-report") open in place through the
// router; anything external opens in a new tab.
export default function SmartLink({ href, children, ...props }) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
