import { usePlan } from "../../contexts/PlanContexts";

const FinishingUpCard = () => {
  const { pickAdsData, openCard, handleOpenCard, selectionData } = usePlan();

  const pickAdsTotal = pickAdsData.reduce((total, item) => {
    return item.checked
      ? total + (openCard ? item.yearly : item.monthly)
      : total;
  }, 0);

  return (
    <section className="mx-5 -translate-y-[3rem] rounded-xl bg-[#fff] px-5 py-9">
      <div className="flex flex-col gap-6">
        <span className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[#022959]">Finishing up</h1>
          <p className="text-[1rem] leading-6 text-[#9699AA]">
            Double-check everything looks OK before confirming.
          </p>
        </span>

        <div className="flex flex-col gap-4 bg-[#F8F9FF] px-4 py-6">
          {selectionData.map(
            (item) =>
              item.isChecked && (
                <div className="flex items-center justify-between font-bold text-[#022959]">
                  <span className="flex flex-col gap-1">
                    <h2 className="capitalize">
                      {item.name} ({openCard ? "Yearly" : "Monthly"})
                    </h2>
                    <p
                      className="cursor-pointer font-normal text-[#9699AA] underline"
                      onClick={handleOpenCard}
                    >
                      Change
                    </p>
                  </span>
                  <p className="">
                    ${openCard ? item.yearly : item.duration}/mo
                  </p>
                </div>
              ),
          )}

          <hr />
          <div className="flex flex-col gap-3">
            {pickAdsData.map(
              (item, i) =>
                item.checked && (
                  <span key={i} className="flex items-center justify-between">
                    <p className="text-[#9699AA]">{item.title}</p>
                    <p className="text-[#022959]">
                      +{openCard ? item.yearly : item.monthly}$/
                      {openCard ? "yr" : "mo"}
                    </p>
                  </span>
                ),
            )}
          </div>
        </div>
        <span className="flex items-center justify-between mx-4">
          <h2 className="text-[#9699AA]">
            Total (per {openCard ? "year" : "month"})
          </h2>
          {selectionData
            .filter((item) => item.isChecked)
            .map((item) => (
              <p className="font-bold text-[#022959]">
                +{pickAdsTotal + (item.isChecked ? item.yearly : item.duration)}
                /mo
              </p>
            ))}
        </span>
      </div>
    </section>
  );
};

export default FinishingUpCard;
