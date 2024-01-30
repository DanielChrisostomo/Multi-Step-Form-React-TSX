import React from "react";
import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme/Theme";
import * as C from "./styles";
import { FormActions, useForm } from "../../contexts/FormContext";

const Step1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  React.useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  function handleNextStep() {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Please fill in all fields to complete your registration");
    }
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  }

  return (
    <Theme>
      <C.Container>
        <p>Step 1/3</p>
        <h1>Let's start</h1>
        <p>Please, fill the field with your first and second name</p>

        <hr />

        <label htmlFor="name">
          Name
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};

export default Step1;
