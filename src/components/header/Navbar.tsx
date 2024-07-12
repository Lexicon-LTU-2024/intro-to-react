import { ReactElement } from "react";
import { Link } from ".";
import { ILink } from "../../interfaces";

const links: ILink[] = [
  {
    href: "#",
    text: "Correct Version",
  },
  {
    href: "#",
    text: "Wrong Version",
  },
];

export function Navbar(): ReactElement {
  return (
    <nav className="navbar">
      {links.map((link) => (
        <Link link={link} />
      ))}
    </nav>
  );
}
