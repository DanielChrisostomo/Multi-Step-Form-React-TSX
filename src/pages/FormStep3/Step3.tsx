import React from "react";
import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme/Theme";
import * as C from "./styles";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Link } from "react-router-dom";

const Step3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  React.useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  }

  function handleGithubChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setGitHub,
      payload: e.target.value,
    });
  }

  function handleNextStep() {
    if (state.email !== "" && state.gitHub !== "") {
      console.log(state);
    } else {
      alert("Please fill in all fields to complete your registration");
    }
  }

  return (
    <Theme>
      <C.Container>
        <p>Step 3/3</p>
        <h1>Cool ! {state.name}, where can we find you ?</h1>
        <p>
          Please, fill the field with your contact information and we will get
          in touch
        </p>

        <hr />

        <label htmlFor="email">
          Email
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label htmlFor="github">
          GitHub
          <input
            type="url"
            value={state.gitHub}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">
          Back
        </Link>
        <button onClick={handleNextStep}>Done</button>
      </C.Container>
    </Theme>
  );
};

export default Step3;
