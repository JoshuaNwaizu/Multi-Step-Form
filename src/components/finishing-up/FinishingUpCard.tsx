const finishingUpData = [{}];

const FinishingUpCard = () => {
  return (
    <section className="mx-5 -translate-y-[3rem] rounded-xl bg-[#fff] px-5 py-9">
      <div className="flex flex-col gap-6">
        <span className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[#022959]">Finishing up</h1>
          <p className="text-[1rem] leading-6 text-[#9699AA]">
            Double-check everything looks OK before confirming.
          </p>
        </span>

        <div className="flex flex-col gap-3"></div>
      </div>
    </section>
  );
};

export default FinishingUpCard;
