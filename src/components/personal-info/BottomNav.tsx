import { Link } from "react-router-dom";
import { usePlan } from "../../contexts/PlanContexts";

const BottomNav = () => {
  const { confirmFirstPage, dispatch } = usePlan();

  const handleCheckValidation = () => {
    dispatch({ type: "validateForm" });
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-[4.5rem] items-center justify-end bg-[#fff] shadow-md">
      <button onClick={handleCheckValidation}>
        <Link
          to={confirmFirstPage ? "/select-plan" : "#"}
          className={`${!confirmFirstPage ? "pointer-events-none opacity-50" : ""}`}
        >
          <div className="mr-4 rounded bg-[#022959] px-3 py-2 text-sm capitalize text-[#fff]">
            next step
          </div>
        </Link>
      </button>
    </div>
  );
};

export default BottomNav;
