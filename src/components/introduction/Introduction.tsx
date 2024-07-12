import { ReactElement } from "react";
import { Description, Image } from ".";
import { IImage } from "../../interfaces";
import { images } from "../../assets";

import "./Introduction.css"

export function Introduction(): ReactElement {
  const image: IImage = {
    src: images.frozenCheesecake,
    alt: "Frozen Cheesecake",
  };

  return (
    <section className="introduction">
      <Description />
      <Image image={image} />
    </section>
  );
}
