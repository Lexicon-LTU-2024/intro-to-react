import { ReactElement } from "react";

interface IListProps {
  items: string[];
  listType: "ul" | "ol";
}

export function List({ items, listType }: IListProps): ReactElement {
  const itemsToRender = items.map((item) => <li>{item}</li>);

  // Alternative if checks
  // if (listType === "ol") <ol>{itemsToRender}</ol>;

  // return <ul>{itemsToRender}</ul>;

  // Ternary Operation
  return listType === "ol" ? <ol>{itemsToRender}</ol> : <ul>{itemsToRender}</ul>;
}
