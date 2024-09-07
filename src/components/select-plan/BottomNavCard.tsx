import React from "react";
import { Link, To } from "react-router-dom";
import { usePlan } from "../../contexts/PlanContexts";

interface BottomNav {
  back?: string;
  next?: string;
  onClick?: () => void;
  to: To;
  onBtnClick?: () => void;
}

const BottomNavCard: React.FC<BottomNav> = ({
  back = "go back",
  next = " next step",
  onClick,
  onBtnClick,
  to,
}) => {
  const { selectionData } = usePlan();

  return (
    <div className="bottom-nav lg:-pl-9 fixed bottom-0 right-0 flex h-[4.5rem] items-center justify-between border-t border-t-[#acafbe] bg-[#fff] px-4 max-md:left-0 lg:justify-around lg:border-none lg:text-[1rem]">
      <div className="lg:-pl-9 fixed bottom-0 left-0 right-0 flex h-[4.5rem] items-center justify-between border-t border-t-[#acafbe] bg-[#fff] px-4 max-md:left-0 lg:justify-evenly lg:border-none lg:text-[1rem] xl:-translate-x-[9rem]">
        <div>
          <button
            className="hover: px-3 py-2 text-sm capitalize text-[#9699AA] transition-all duration-200 hover:text-[#022959]"
            onClick={onClick}
          >
            {back}
          </button>
        </div>
        <div>
          <Link to={to}>
            {selectionData
              .filter((item) => item.isChecked)
              .map((item) => (
                <button
                  className="rounded bg-[#022959] px-3 py-2 text-sm capitalize text-[#fff]"
                  disabled={item.isChecked === false && true}
                  onClick={onBtnClick}
                >
                  {next}
                </button>
              ))}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavCard;
