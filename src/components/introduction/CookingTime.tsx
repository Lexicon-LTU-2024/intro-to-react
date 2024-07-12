import { ReactElement } from "react";

export function CookingTime(): ReactElement {
  return (
    <div className="cooking-time">
      <span className="material-symbols-outlined">av_timer</span>
      <span className="time">60+ min</span>
    </div>
  );
}
