import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-[4.5rem] items-center justify-end bg-[#fff] shadow-md">
      <div>
        <Link to={"/select-plan"}>
          <button className="mr-4 rounded bg-[#022959] px-3 py-2 capitalize text-[#fff]">
            next step
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
