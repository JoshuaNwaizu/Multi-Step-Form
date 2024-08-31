import React from "react";
import { Link, To } from "react-router-dom";
import { usePlan } from "../../contexts/PlanContexts";

interface BottomNav {
  back?: string;
  next?: string;
  onClick?: () => void;
}

const BottomNavCard: React.FC<BottomNav> = ({
  back = "go back",
  next = " next step",
  onClick,
}) => {
  const { selectionData } = usePlan();
  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-[4.5rem] items-center justify-between border-t border-t-[#acafbe] bg-[#fff] px-4">
      <div>
        <button
          className="px-3 py-2 text-sm capitalize text-[#9699AA]"
          onClick={onClick}
        >
          {back}
        </button>
      </div>
      <div>
        <Link to={"/pick-adds-on"}>
          {selectionData
            .filter((item) => item.isChecked)
            .map((item) => (
              <button
                className="rounded bg-[#022959] px-3 py-2 text-sm capitalize text-[#fff]"
                onClick={onClick}
                disabled={item.isChecked === false && true}
              >
                {next}
              </button>
            ))}
        </Link>
      </div>
    </div>
  );
};

export default BottomNavCard;
