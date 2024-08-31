import { Link, useLocation } from "react-router-dom";
import { navNum, usePlan } from "../contexts/PlanContexts";

const NavBar = () => {
  const { toggleNav, handleToggleNav } = usePlan();
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <header className="h-[172px] w-full bg-[url('/assets/images/bg-sidebar-mobile.svg')] bg-cover">
      <ul className="flex h-[130px] items-center justify-center gap-3">
        {navNum.map((item, i) => (
          <li key={item.link}>
            <Link
              to={item.link}
              onClick={() => handleToggleNav(i)}
              className={`flex h-[33px] w-[33px] items-center justify-center rounded-full border p-2 text-sm ${pathName === item.link ? "bg-[#fff] text-[#022959]" : "border-[#fff] text-[#fff]"}`}
            >
              {item.position}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default NavBar;
