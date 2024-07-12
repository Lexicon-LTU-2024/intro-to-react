import { ReactElement } from "react";
import { Ingredients, Instructions } from ".";

import "./HowToDo.css"

export function HowToDo(): ReactElement {
  return (
    <section className="how-to-do">
      <Ingredients />
      <Instructions />
    </section>
  );
}
