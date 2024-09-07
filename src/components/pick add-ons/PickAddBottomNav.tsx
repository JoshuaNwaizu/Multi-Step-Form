import { Link, useNavigate } from "react-router-dom";

const PickAddBottomNav = () => {
  const navigate = useNavigate();

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
          <Link to={"/finishing-up"}>
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
