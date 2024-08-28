import { FaCheck } from "react-icons/fa";
import { usePlan } from "../../contexts/PlanContexts";

const PickAdsCard = () => {
  const { openCard, handleToggleAddOns, pickAdsData } = usePlan();
  return (
    <section className="mx-5 -translate-y-[3rem] rounded-xl bg-[#fff] px-5 py-9">
      <div className="flex flex-col gap-6">
        <span className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[#022959]">Pick add-ons</h1>
          <p className="text-[1rem] leading-6 text-[#9699AA]">
            Add-ons help enhance your gaming experience.
          </p>
        </span>

        <ul className="flex flex-col gap-3">
          {pickAdsData.map((item, i) => (
            <li
              key={item.title}
              className={`flex items-center justify-between rounded-lg border px-4 py-3 ${item.checked ? "border-[#483EFF]" : "border-[#D6D9E6]"}`}
              onClick={() => handleToggleAddOns(i)}
            >
              <div className="flex items-center justify-between gap-6">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-md border border-[#D6D9E6] ${item.checked && "bg-[#483EFF]"} `}
                >
                  {item.checked && <FaCheck className="text-xs text-white" />}
                </span>
                <p className="flex flex-col gap-1">
                  <span className="text-sm text-[#022959]">{item.title}</span>
                  <span className="text-xs text-[#9699AA]">{item.feature}</span>
                </p>
              </div>
              <p className="text-xs text-[#483EFF]">
                +${openCard ? item.yearly : item.monthly}/
                {openCard ? "yr" : "mo"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PickAdsCard;
