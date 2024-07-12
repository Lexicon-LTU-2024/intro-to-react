import { ReactElement } from "react";

interface IOListProps {
  items: string[];
}

export function OList({ items }: IOListProps): ReactElement {
  return (
    <ol>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ol>
  );
}
