import { Link, useLocation } from "react-router-dom";
import { navNum, usePlan } from "../contexts/PlanContexts";

// const navInfo = ["your info", "select plan", "adds-ons", "summary"];

const NavBar = () => {
  const { handleToggleNav } = usePlan();
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <header className="h-[172px] w-full bg-[url('/assets/images/bg-sidebar-mobile.svg')] bg-cover lg:z-30 lg:h-svh lg:w-[274px] lg:rounded-2xl lg:bg-[url('/assets/images/bg-sidebar-desktop.svg')]">
      <ul className="flex h-[130px] items-center justify-center gap-3 lg:ml-10 lg:mt-[7rem] lg:flex-col lg:items-start lg:gap-8">
        {navNum.map((item, i) => (
          <li
            key={item.link}
            className="gap-4 lg:flex"
            onClick={() => handleToggleNav(i)}
          >
            <p
              // to={item.link}
              className={`flex h-[33px] w-[33px] items-center justify-center rounded-full border p-2 text-sm ${i === 3 && pathName === "/confirm" ? "bg-[#BEE2FD] text-black" : "border-[#fff] text-[#fff]"} ${pathName === item.link ? "bg-[#fff] text-black" : "border-[#fff] text-[#fff]"}`}
            >
              {item.position}
            </p>
            <span className="flex flex-col uppercase max-lg:hidden">
              <p className="text-xs text-[#ABBCFF]">Step{i + 1}</p>
              <p className="text-sm font-bold text-white">{item.name}</p>
            </span>
          </li>
        ))}
      </ul>{" "}
    </header>
  );
};

export default NavBar;
