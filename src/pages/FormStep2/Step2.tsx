import React from "react";
import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme/Theme";
import * as C from "./styles";
import { FormActions, useForm } from "../../contexts/FormContext";
import SelectOption from "../../components/SelectOption/SelectOption";
import { Link } from "react-router-dom";

const Step2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  React.useEffect(() => {
    if (state.name === "") {
      navigate("/");
    }
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
        <h1>{state.name}, Which best describes you?</h1>
        <p>Please select the option that best describes you</p>

        <hr />

        <SelectOption
          title="I am a Beginner"
          description="It has been less than 2 years since I started programming."
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="I am a Developer"
          description="It has been more than 2 years since I started programming"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">
          Back
        </Link>
        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};

export default Step2;
