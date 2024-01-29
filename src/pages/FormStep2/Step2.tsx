import React from "react";
import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme/Theme";
import * as C from "./styles";
import { FormActions, useForm } from "../../contexts/FormContext";
import SelectOption from "../../components/SelectOption/SelectOption";

const Step2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  React.useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  function handleNextStep() {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Please fill in all fields to complete your registration");
    }
  }

  function setLevel(level: number) {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  }

  return (
    <Theme>
      <C.Container>
        <p>Step 2/3</p>
        <h1>Let's start</h1>
        <p>Fill the field with your first and second name</p>

        <hr />

        <SelectOption
          title="I am a Beginner"
          description="It have been less than 2 years that I started programming"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="I am a Developer"
          description="It have been more than 2 years that I started programming"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};

export default Step2;
