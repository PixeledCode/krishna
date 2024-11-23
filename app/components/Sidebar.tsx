import React from "react";
import { getHeading } from "./layouts/Common";

export const Sidebar = () => {
  const [headings, setHeadings] = React.useState<string[]>();

  React.useEffect(() => {
    const pagehHeadings = getHeading();
    setHeadings(pagehHeadings);
  }, []);

  if (!headings) return null;

  return (
    <nav className="hidden xl:block absolute px-6 pt-24 h-full">
      <ul className="capitalize sticky top-32 flex flex-col gap-3">
        {headings?.map((heading) => (
          <li key={heading}>
            <a
              href={`#${heading}`}
              className="flex gap-2 items-center hover:text-primary group font-semibold text-base"
            >
              <span className="w-[14px] h-[14px] rounded-full border-2 border-solid border-black group-hover:border-primary group-hover:bg-primary" />
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
