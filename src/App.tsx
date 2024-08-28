import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FinishingUp from "./components/finishing-up/FinishingUp";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import PickAddsOn from "./components/pick add-ons/PickAddsOn";

import SelectPlan from "./components/select-plan/SelectPlan";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PersonalInfo />,
      },
      {
        path: "/select-plan",
        element: <SelectPlan />,
      },
      {
        path: "/pick-adds-on",
        element: <PickAddsOn />,
      },
      {
        path: "/finishing-up",
        element: <FinishingUp />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
