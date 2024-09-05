import { Link } from "react-router-dom";
import { usePlan } from "../../contexts/PlanContexts";

const BottomNav = () => {
  const { confirmFirstPage, dispatch } = usePlan();

  const handleCheckValidation = () => {
    dispatch({ type: "validateForm" });
  };
  return (
    <div className="bottom-nav fixed bottom-0 right-0 flex h-[4.5rem] w-full items-center justify-end bg-[#fff] lg:justify-around">
      <button onClick={handleCheckValidation} className="lg:translate-x-[6rem]">
        <Link
          to={confirmFirstPage ? "/select-plan" : "#"}
          className={`${!confirmFirstPage ? "pointer-events-none opacity-50" : ""}`}
        >
          <div className="mr-4 rounded bg-[#022959] px-3 py-2 text-sm capitalize text-[#fff] lg:mr-0">
            next step
          </div>
        </Link>
      </button>
    </div>
  );
};

export default BottomNav;
