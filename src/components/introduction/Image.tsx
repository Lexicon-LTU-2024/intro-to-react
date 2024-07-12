import { ReactElement } from "react";
import { IImage } from "../../interfaces";

interface IImageProps {
  image: IImage;
}

export function Image({ image }: IImageProps): ReactElement {
  return (
    <figure>
      <img src={image.src} alt={image.alt} />
    </figure>
  );
}
