import React from "react";
import Header from "../Header/Header";
import * as C from "./styles";
import SidebarItem from "../SidebarItem/SidebarItem";
import { useForm } from "../../contexts/FormContext";

const Theme = ({ children }: React.PropsWithChildren) => {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.Sidebar>
            <SidebarItem
              title="Person"
              description="Indentify yourself"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />

            <SidebarItem
              title="Profissional"
              description="Your Level"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />

            <SidebarItem
              title="Contact"
              description="How to find you"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};

export default Theme;
