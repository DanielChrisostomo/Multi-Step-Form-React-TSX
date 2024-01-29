import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme/Theme";
import * as C from "./styles";
import { FormActions, useForm } from "../../contexts/FormContext";

const Step1 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  function handleNextStep() {
    navigate("/step2");
  }

  return (
    <Theme>
      <C.Container>
        <p>Step 1/3</p>
        <h1>Let's start</h1>
        <p>Fill the field with your first and second name</p>

        <hr />

        <label htmlFor="name">
          Name
          <input type="text" autoFocus />
        </label>
        <button onClick={handleNextStep}>Next</button>
      </C.Container>
    </Theme>
  );
};

export default Step1;
