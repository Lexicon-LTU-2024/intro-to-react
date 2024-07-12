import { ReactElement } from "react";
import { List } from ".";

import "./Ingredients.css";

const items = {
  bottom: ["15st digistivetex", "Lite smör"],
  paste: [
    "3st ägg",
    "1,5dl strösocker",
    "3tsk vaniljsocker",
    "3dl vispgrädde",
    "400g naturell philadelphiaost",
  ],
};

export function Ingredients(): ReactElement {
  return (
    <article className="ingredients">
      <h3 className="ingredients-header">Ingridienser</h3>
      <h4 className="to-bottom">Till Botten</h4>
      <List items={items.bottom} listType="ul" />
      <h4 className="to-paste">Till Smeten</h4>
      <List items={items.paste} listType="ul" />
    </article>
  );
}
