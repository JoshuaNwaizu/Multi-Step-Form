import { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { usePlan } from "../../contexts/PlanContexts";

const Confirm = () => {
  const navigate: NavigateFunction = useNavigate();
  const { dispatch } = usePlan();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "reset" });
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <section className="mx-5 flex h-[400px] -translate-y-[3rem] justify-center rounded-xl bg-[#fff] px-5 py-9 lg:h-[70svh] lg:w-[470px] lg:translate-y-[2rem] lg:px-0 lg:shadow-none">
      <div className="flex flex-col items-center justify-center gap-6 px-4 py-9 lg:ps-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
        >
          <g fill="none">
            <circle cx="40" cy="40" r="40" fill="#F9818E" />
            <path
              fill="#E96170"
              d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
            />
            <path
              fill="#FFF"
              d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
            />
          </g>
        </svg>
        <span className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-bold text-[#022959]">Thank you!</h1>
          <p className="text-[1rem] leading-6 text-[#9699AA]">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </span>
      </div>
    </section>
  );
};

export default Confirm;
