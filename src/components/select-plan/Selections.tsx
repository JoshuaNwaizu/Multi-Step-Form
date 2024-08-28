import React from "react";
import { usePlan } from "../../contexts/PlanContexts";

export interface Selections {
  image?: string;
  title?: string;
  duration: number;
  offer?: string;
  yearly?: number;
}

const Selections: React.FC<Selections> = ({
  image,
  title,
  duration,
  offer,
  yearly,
}) => {
  const { openCard } = usePlan();
  return (
    <>
      <img src={image} alt={title + " image"} />
      <div className="flex flex-col gap-1">
        <span className="text-[1rem] font-medium capitalize text-[#022959]">
          {title}
        </span>
        <div className="text-sm text-[#9699AA]">
          <span>${openCard ? yearly : duration} </span>
          <span> /{openCard ? "yr" : "mo"}</span>
        </div>
        <span
          className={`${openCard ? "block" : "hidden"} text-xs text-[#022959]`}
        >
          {offer}
        </span>
      </div>
    </>
  );
};

export default Selections;
