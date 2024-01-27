import React, { useContext } from "react";

const initialData = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  gitHub: "",
};

const FormContext = React.createContext(null);

enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGitHub,
}

const formReducer = (state, action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGitHub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};

const FormProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(formReducer, initialData);

  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

const useForm = () => {
  const context = useContext(FormContext);

  if (context === null) {
    throw new Error("useForm must be inside of FormProvider");
  }
  return context;
};
