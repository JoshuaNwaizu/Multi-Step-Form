import { useNavigate } from "react-router-dom";
import BottomNavCard from "../select-plan/BottomNavCard";
import FinishingUpCard from "./FinishingUpCard";

const FinishingUp = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/pick-adds-on");
  };
  return (
    <>
      <FinishingUpCard />
      <BottomNavCard next="confirm" onClick={handleGoBack} to={"/"} />
    </>
  );
};

export default FinishingUp;
