import React, { createContext, useContext, useReducer } from "react";

interface Selections {
  name: string;
  duration: number;
  image: string;
  offer: string;
  isChecked: boolean;
  yearly: number;
}
interface InitialState {
  openCard: boolean;
  toggleNav: number;
  toggleAddOns: boolean;
  pickAdsData: PickAdd[];
  selectionData: Selections[];
  openConfirmPage: boolean;
  nameInput: string;
  numberInput: string;
  emailInput: string;
  checkName: string;
  checkNumber: string;
  checkEmail: string;
  confirmFirstPage: boolean;
}
interface PickAdd {
  title: string;
  feature: string;
  monthly: number;
  yearly: number;
  checked: boolean;
}

interface ContextsData {
  openCard: boolean;
  toggleNav: number;
  handleOpenCard: () => void;
  handleToggleNav: (num: number) => void;
  handleToggleAddOns: (num: number) => void;
  toggleAddOns: boolean;
  pickAdsData: PickAdd[];
  selectionData: Selections[];
  handleToggleSelectPlan: (num: number) => void;
  openConfirmPage: boolean;
  dispatch: React.Dispatch<PlanAction>;
  nameInput: string;
  checkName: string;
  numberInput: string;
  checkNumber: string;
  emailInput: string;
  checkEmail: string;
  confirmFirstPage: boolean;
}

interface PlanAction {
  type: string;
  payload?: any;
}

interface Children {
  children: React.ReactNode;
}

interface Nav {
  position: number;
  link: string;
  name: string;
}
const PlanContext = createContext<ContextsData | undefined>(undefined);
export const navNum: Nav[] = [
  { position: 1, link: "/", name: "your info" },
  { position: 2, link: "/select-plan", name: "select plan" },
  { position: 3, link: "/pick-adds-on", name: "add-on" },
  { position: 4, link: "/finishing-up", name: "summary" },
];
const pickAddOn: PickAdd[] = [
  {
    title: "Online service",
    feature: "Access to multiplayer games",
    monthly: 1,
    yearly: 10,
    checked: false,
  },
  {
    title: "Larger storage",
    feature: "Extra 1TB of cloud save",
    monthly: 2,
    yearly: 20,
    checked: false,
  },
  {
    title: "Customizable profile",
    feature: "Custom theme on your profile",
    monthly: 2,
    yearly: 20,
    checked: false,
  },
];

const selection: Selections[] = [
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

const initialState: InitialState = {
  openCard: false,
  toggleNav: 0,
  toggleAddOns: false,
  pickAdsData: pickAddOn,
  selectionData: selection.map((item, i) => ({
    ...item,
    isChecked: i === 0 ? true : false,
    navToogle: false,
  })),
  openConfirmPage: false,
  nameInput: "",
  numberInput: "",
  checkName: "",
  checkNumber: "",
  checkEmail: "",
  emailInput: "",
  confirmFirstPage: false,
};
const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const phoneNumberReg = /^(0|\+)\d{9,14}$/;

const reducer: React.Reducer<InitialState, PlanAction> = (state, action) => {
  switch (action.type) {
    case "opencard":
      return { ...state, openCard: !state.openCard };

    case "togglenav":
      return { ...state, toggleNav: action.payload };

    case "toggleAddOn":
      const newToggle = !state.toggleAddOns;
      const updatedPickAdsData = state.pickAdsData.map((item) => ({
        ...item,
        checked: newToggle ? true : item.checked,
      }));
      console.log(updatedPickAdsData);
      return {
        ...state,
        toggleAddOns: newToggle,
      };

    case "toggle/pickAddCard":
      const toggleChecked = state.pickAdsData.map((item, index) =>
        index === action.payload ? { ...item, checked: !item.checked } : item,
      );
      return { ...state, pickAdsData: toggleChecked };

    case "toggle/selectPlan":
      const toggleSelectPlan = state.selectionData.map((item, index) =>
        index === action.payload
          ? { ...item, isChecked: true }
          : { ...item, isChecked: false },
      );
      return { ...state, selectionData: toggleSelectPlan };

    case "openConfirmPage/finalPage":
      return { ...state, openConfirmPage: true };

    case "nameInput/firstPage":
      const validName =
        action.payload.trim() !== "" && action.payload.length >= 9;

      return {
        ...state,
        nameInput: action.payload,
        checkName: !validName ? "Invalid Input" : "",
        confirmFirstPage:
          validName &&
          state.emailInput.trim() !== "" &&
          state.emailInput.length >= 14 &&
          state.numberInput.trim() !== "" &&
          state.numberInput.length >= 9,
      };

    case "numberInput/firstPage":
      const validNumber =
        action.payload.trim() !== "" &&
        phoneNumberReg.test(action.payload) &&
        action.payload.length >= 9;
      return {
        ...state,
        numberInput: action.payload,
        checkNumber: !validNumber ? "Invalid Input " : "",
        confirmFirstPage:
          validNumber &&
          state.nameInput.trim() !== "" &&
          state.nameInput.length >= 9 &&
          state.emailInput.trim() !== "" &&
          state.emailInput.length >= 14,
      };

    case "emailInput/firstPage":
      const validEmail =
        action.payload.trim() !== "" &&
        emailReg.test(action.payload) &&
        action.payload.length >= 14;
      return {
        ...state,
        emailInput: action.payload,
        checkEmail: !validEmail ? "Invalid Input" : "",
        confirmFirstPage:
          validEmail &&
          state.nameInput.trim() !== "" &&
          state.nameInput.length >= 9 &&
          state.numberInput.trim() !== "" &&
          state.numberInput.length >= 9,
      };

    case "validateForm":
      const isNameValid =
        state.nameInput.trim() !== "" && state.nameInput.length > 9;

      const isEmailValid =
        state.emailInput.trim() !== "" &&
        emailReg.test(state.emailInput) &&
        state.emailInput.length >= 14;

      const isNumberValid =
        state.numberInput.toString().trim() !== "" &&
        state.numberInput.length >= 17;
      return {
        ...state,
        checkName: isNameValid ? "" : "This field is required",
        checkEmail: isEmailValid ? "" : "This field is required",
        checkNumber: isNumberValid ? "" : "This field is required",
        confirmFirstPage: isNameValid && isEmailValid && isNumberValid,
      };

    case "reset":
      return {
        ...state,
        openCard: false,
        toggleNav: 0,
        toggleAddOns: false,
        pickAdsData: pickAddOn,
        selectionData: selection.map((item, i) => ({
          ...item,
          isChecked: i === 0 ? true : false,
          navToogle: false,
        })),
        openConfirmPage: false,
        nameInput: "",
        numberInput: "",
        checkName: "",
        checkNumber: "",
        checkEmail: "",
        emailInput: "",
        confirmFirstPage: false,
      };

    default:
      return state;
  }
};

const PlanProvider: React.FC<Children> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    openCard,
    toggleNav,
    toggleAddOns,
    pickAdsData,
    selectionData,
    openConfirmPage,
    nameInput,
    checkName,
    numberInput,
    checkNumber,
    emailInput,
    checkEmail,
    confirmFirstPage,
  } = state;

  const handleOpenCard = () => {
    dispatch({ type: "opencard" });
  };
  const handleToggleNav = (num: number) => {
    dispatch({ type: "togglenav", payload: num });
  };
  const handleToggleAddOns = (num: number) => {
    dispatch({ type: "toggle/pickAddCard", payload: num });
  };
  const handleToggleSelectPlan = (num: number) => {
    dispatch({ type: "toggle/selectPlan", payload: num });
  };
  return (
    <PlanContext.Provider
      value={{
        openCard,
        toggleNav,
        handleOpenCard,
        handleToggleNav,
        toggleAddOns,
        handleToggleAddOns,
        pickAdsData,
        selectionData,
        handleToggleSelectPlan,
        dispatch,
        openConfirmPage,
        nameInput,
        checkName,
        numberInput,
        checkNumber,
        checkEmail,
        emailInput,
        confirmFirstPage,
      }}
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
