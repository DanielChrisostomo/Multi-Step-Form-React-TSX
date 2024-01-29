import React from "react";

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  gitHub: string;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

const initialData: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  gitHub: "",
};

const FormContext = React.createContext<ContextType | null>(null);

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGitHub,
}

const formReducer = (state: State, action: Action) => {
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

export const FormProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = React.useReducer(formReducer, initialData);

  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = React.useContext(FormContext);

  if (context === null) {
    throw new Error("useForm must be inside of FormProvider");
  }
  return context;
};
