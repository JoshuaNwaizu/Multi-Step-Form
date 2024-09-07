import { Link } from "react-router-dom";
import { usePlan } from "../../contexts/PlanContexts";

const BottomNav = () => {
  const { confirmFirstPage, dispatch } = usePlan();

  const handleCheckValidation = () => {
    dispatch({ type: "validateForm" });
  };
  return (
    <div className="bottom-nav fixed bottom-0 left-0 right-0 flex h-[4.5rem] items-center justify-between border-t border-t-[#acafbe] bg-[#fff] px-4 max-md:left-0 lg:justify-around lg:border-none">
      <div className="bottom-nav fixed bottom-0 right-0 flex h-[4.5rem] items-center justify-end bg-[#fff] max-md:left-0 md:pr-10 lg:justify-around">
        <button
          onClick={handleCheckValidation}
          className="lg:translate-x-[6rem]"
        >
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
    </div>
  );
};

export default BottomNav;
