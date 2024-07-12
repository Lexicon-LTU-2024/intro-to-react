import { ReactElement } from "react";

interface IUListProps {
  items: string[];
}

export function UList({ items }: IUListProps): ReactElement {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
