import { ReactElement } from "react";
import { IImage } from "../../interfaces";

import "./Image.css";

interface IImageProps {
  image: IImage;
}

export function Image({ image }: IImageProps): ReactElement {
  return (
    <figure className="image">
      <img src={image.src} alt={image.alt} />
    </figure>
  );
}
