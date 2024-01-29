import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from "./pages/FormStep1/Step1";
import Step2 from "./pages/FormStep2/Step2";
import Step3 from "./pages/FormStep3/Step3";
import { FormProvider } from "./contexts/FormContext";

const App = () => {
  return (
    <BrowserRouter>
      <FormProvider>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
        </Routes>
      </FormProvider>
    </BrowserRouter>
  );
};

export default App;
