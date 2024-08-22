import React, { createContext, useContext, useReducer } from "react";

interface InitialState {
  openCard: boolean;
  toggleNav: number;
}

interface ContextsData {
  openCard: boolean;
  toggleNav: number;
  handleOpenCard: () => void;
  handleToggleNav: (num: number) => void;
}

interface PlanAction {
  type: string;
  payload?: any;
}

interface Children {
  children: React.ReactNode;
}
const PlanContext = createContext<ContextsData | undefined>(undefined);

const initialState: InitialState = { openCard: false, toggleNav: 0 };

const reducer: React.Reducer<InitialState, PlanAction> = (state, action) => {
  switch (action.type) {
    case "opencard":
      return { ...state, openCard: !state.openCard };
    case "togglenav":
      return { ...state, toggleNav: action.payload };
    default:
      return state;
  }
};

const PlanProvider: React.FC<Children> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openCard, toggleNav } = state;

  const handleOpenCard = () => {
    dispatch({ type: "opencard" });
  };
  const handleToggleNav = (num: number) => {
    dispatch({ type: "togglenav", payload: num });
  };

  return (
    <PlanContext.Provider
      value={{ openCard, toggleNav, handleOpenCard, handleToggleNav }}
    >
      {children}
    </PlanContext.Provider>
  );
};
const usePlan = () => {
  const context = useContext(PlanContext);
  if (context === undefined) throw new Error("Can't access this outside");
  return context;
};

export { PlanProvider, usePlan };
