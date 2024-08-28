import React from "react";

const PickAddBottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-[4.5rem] items-center justify-between border-t border-t-[#acafbe] bg-[#fff] px-4">
      <div>
        <button className="px-3 py-2 text-sm capitalize text-[#9699AA]">
          go back
        </button>
      </div>
      <div>
        <button className="rounded bg-[#022959] px-3 py-2 text-sm capitalize text-[#fff]">
          next step
        </button>
      </div>
    </div>
  );
};

export default PickAddBottomNav;
