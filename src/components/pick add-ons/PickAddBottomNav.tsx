import { Link, useNavigate } from "react-router-dom";
import { usePlan } from "../../contexts/PlanContexts";

const PickAddBottomNav = () => {
  const { pickAdsData } = usePlan();

  const navigate = useNavigate();
  const addOnsChecked = pickAdsData.every((item) => !item.checked);
  console.log(addOnsChecked);

  const handleGoBack = () => {
    navigate("/select-plan");
  };
  return (
    <div className="bottom-nav lg:-pl-9 fixed bottom-0 right-0 flex h-[4.5rem] items-center justify-between border-t border-t-[#acafbe] bg-[#fff] px-4 max-md:left-0 lg:justify-around lg:border-none lg:text-[1rem]">
      <div className="lg:-pl-9 fixed bottom-0 left-0 right-0 flex h-[4.5rem] items-center justify-between border-t border-t-[#acafbe] bg-[#fff] px-4 max-md:left-0 lg:justify-evenly lg:border-none lg:text-[1rem] xl:-translate-x-[9rem]">
        <div>
          <button
            className="px-3 py-2 text-sm capitalize text-[#9699AA]"
            onClick={handleGoBack}
          >
            go back
          </button>
        </div>
        <div>
          <Link
            to={!addOnsChecked ? "/finishing-up" : "#"}
            className={`${addOnsChecked && "opacity-50 transition-opacity duration-200"}`}
          >
            <button className="rounded bg-[#022959] px-3 py-2 text-sm capitalize text-[#fff]">
              next step
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PickAddBottomNav;
