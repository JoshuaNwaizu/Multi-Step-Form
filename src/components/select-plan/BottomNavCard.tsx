import React from "react";
import { Link, To } from "react-router-dom";

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
        <button
          className="rounded bg-[#022959] px-3 py-2 text-sm capitalize text-[#fff]"
          onClick={onClick}
        >
          {next}
        </button>
      </div>
    </div>
  );
};

export default BottomNavCard;
