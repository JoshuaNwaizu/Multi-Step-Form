import { usePlan } from "../../contexts/PlanContexts";
import Form from "./Form";

const Card = () => {
  const {
    nameInput,
    checkName,
    dispatch,
    checkNumber,
    numberInput,
    checkEmail,
    emailInput,
  } = usePlan();
  return (
    <section className="mx-5 -translate-y-[3rem] rounded-xl bg-[#fff] px-5 py-9">
      <div className="flex flex-col gap-6">
        <span className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[#022959]"> Personal info</h1>
          <p className="text-[1rem] leading-6 text-[#9699AA]">
            Please provide your name, email address, and phone number.
          </p>
        </span>

        <span className="flex flex-col gap-3">
          <Form
            title="Name"
            placeholder="e.g. Stephen King"
            type="text"
            value={nameInput}
            onChange={(e: any) =>
              dispatch({ type: "nameInput/firstPage", payload: e.target.value })
            }
            error={checkName}
          />
          <Form
            title="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            type="email"
            value={emailInput}
            onChange={(e: any) =>
              dispatch({
                type: "emailInput/firstPage",
                payload: e.target.value,
              })
            }
            error={checkEmail}
          />
          <Form
            title="Phone Number"
            placeholder="e.g. +1 234 567 890"
            type="tel"
            value={numberInput}
            onChange={(e: any) =>
              dispatch({
                type: "numberInput/firstPage",
                payload: e.target.value,
              })
            }
            error={checkNumber}
          />
        </span>
      </div>
    </section>
  );
};

export default Card;
