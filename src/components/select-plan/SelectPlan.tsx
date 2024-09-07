import { useNavigate } from "react-router-dom";

import BottomNavCard from "./BottomNavCard";
import PlanCard from "./PlanCard";

const SelectPlan = () => {
  const navigate = useNavigate();

  const handleGoBack = (to: string) => {
    navigate(to);
  };
  return (
    <div className="">
      <PlanCard />
      <BottomNavCard to="/pick-adds-on" onClick={() => handleGoBack("/")} />
    </div>
  );
};

export default SelectPlan;
