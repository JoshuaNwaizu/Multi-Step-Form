import { usePlan } from "../../contexts/PlanContexts";
import Selections from "./Selections";

export const selection = [
  {
    name: "arcade",
    duration: 9,
    image: "/assets/images/icon-arcade.svg",
    offer: "2 months free",
    isChecked: false,
    yearly: 90,
  },
  {
    name: "advanced",
    duration: 12,
    image: "/assets/images/icon-advanced.svg",
    offer: "2 months free",
    isChecked: false,
    yearly: 120,
  },
  {
    name: "pro",
    duration: 15,
    image: "/assets/images/icon-pro.svg",
    offer: "2 months free",
    isChecked: false,
    yearly: 150,
  },
];

const PlanCard = () => {
  const { openCard, handleOpenCard, selectionData, handleToggleSelectPlan } =
    usePlan();
  return (
    <section className="mx-5 mb-9 flex -translate-y-[3.5rem] flex-col gap-3 rounded-xl bg-[#fff] px-5 py-9 shadow-md transition-all duration-150">
      <div className="flex flex-col gap-6">
        <span className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[#022959]">
            {" "}
            Select your plan
          </h1>
          <p className="text-[1rem] leading-6 text-[#9699AA]">
            You have the option of monthly or yearly billing.
          </p>
        </span>
      </div>
      <div className="flex flex-col gap-7">
        <span className="flex flex-col gap-3">
          {selectionData.map((item, i) => (
            <div
              key={i}
              onClick={() => handleToggleSelectPlan(i)}
              className={`flex items-center gap-3 rounded-lg border ${item.isChecked && "border-[#483EFF]"} px-3 py-3`}
            >
              <Selections
                title={item.name}
                duration={item.duration}
                image={item.image}
                offer={item.offer}
                yearly={item.yearly}
              />
            </div>
          ))}
        </span>
        <div className="flex h-12 items-center justify-center gap-5 rounded-lg bg-[#F8F9FF]">
          <p
            className={`font-medium ${openCard ? "text-[#9699AA]" : "text-[#022959]"} `}
          >
            Monthly
          </p>
          <div
            className={`flex h-[20px] w-[35px] items-center rounded-full bg-[#022959] px-1 ${openCard ? "justify-end" : "justify-start"}`}
            onClick={handleOpenCard}
          >
            <div className="h-[15px] w-[15px] rounded-full bg-white"></div>
          </div>
          <p
            className={`font-medium ${openCard ? "text-[#022959]" : "text-[#9699AA]"} `}
          >
            Yearly
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanCard;
