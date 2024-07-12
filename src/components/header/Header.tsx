import { ReactElement } from "react";
import { Navbar } from ".";

import "./Header.css"

export function Header(): ReactElement {
  return (
    <header className="header">
      <p className="logo-text">Niklas Smaskisrecept</p>
      <Navbar />
    </header>
  );
}
