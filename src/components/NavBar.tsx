// import navImage from "/assets/images/bg-sidebar-mobile.svg";

import { usePlan } from "../contexts/PlanContexts";

const NavBar = () => {
  const { toggleNav, handleToggleNav } = usePlan();
  const navNum = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <header className="h-[172px] w-full bg-[url('/assets/images/bg-sidebar-mobile.svg')] bg-cover">
      <ul className="flex h-[130px] items-center justify-center gap-3">
        {navNum.map((num, i) => (
          <li
            key={num}
            onClick={() => handleToggleNav(i)}
            className={`flex h-[33px] w-[33px] items-center justify-center rounded-full border p-2 text-sm ${toggleNav === i ? "bg-[#fff] text-[#022959]" : "border-[#fff] text-[#fff]"}`}
          >
            {num}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default NavBar;
