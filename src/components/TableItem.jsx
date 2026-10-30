import RedirectBtn from "./RedirectBtn";
import SkillTag from "./SkillTag";
import LinkLabel from "./LinkLabel";
import SmartLink from "./SmartLink";

function TableItem({
  year,
  project,
  made,
  technologies = [],
  link,
  linkLabel,
  extraLinks = [],
}) {
  const techList = Array.isArray(technologies)
    ? technologies
    : [technologies].filter(Boolean);

  return (
    <tr className="border-b h-16 border-rule-soft last:border-none">
      <td className="py-4 pr-8 align-top whitespace-nowrap text-muted">{year}</td>
      <td className="py-4 pr-8 align-top font-bold sm:table-cell hidden">{project}</td>
      <td className="py-4 pr-8 align-top font-bold sm:hidden">
        {link ? (
          <SmartLink href={link} className="group/experience">
            <RedirectBtn>{project}</RedirectBtn>
          </SmartLink>
        ) : (
          project
        )}
        {extraLinks.map(({ label, url }) => (
          <SmartLink
            key={url}
            href={url}
            className="group/experience mt-2 block text-sm font-normal text-muted"
          >
            <RedirectBtn><LinkLabel url={url} label={label} /></RedirectBtn>
          </SmartLink>
        ))}
      </td>
      <td className="py-4 pr-8 align-top text-muted lg:table-cell hidden">{made}</td>
      <td className="py-4 pr-8 align-top lg:table-cell hidden">
        {techList.length > 0 && (
          <ul className="flex flex-wrap gap-1">
            {techList.map((technology, i) => (
              <li key={i}>
                <SkillTag>{technology}</SkillTag>
              </li>
            ))}
          </ul>
        )}
      </td>
      <td className="py-4 pr-8 align-top text-muted sm:table-cell hidden">
        {link && (
          <SmartLink href={link} className="group/experience">
            <RedirectBtn><LinkLabel url={link} label={linkLabel} /></RedirectBtn>
          </SmartLink>
        )}
        {extraLinks.map(({ label, url }) => (
          <SmartLink key={url} href={url} className="group/experience mt-2 block">
            <RedirectBtn><LinkLabel url={url} label={label} /></RedirectBtn>
          </SmartLink>
        ))}
      </td>
    </tr>
  );
}

export default TableItem;
