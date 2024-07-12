import { ReactElement } from "react";
import { CookingTime } from ".";

export function Description(): ReactElement {
  return (
    <article className="description">
      <h1 className="recipe-name">Frozen Cheescake</h1>
      <CookingTime />
      <p>
        Fryst cheesecake är en perfekt dessert för stora kalas eller middagar eftersom du kan göra
        den i förväg och frysa in. Ta fram cheesecaken en stund innan servering och garnera med dina
        favoritfrukter och bär.
      </p>
    </article>
  );
}
