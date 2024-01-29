import React from "react";
import Header from "../Header/Header";
import * as C from "./styles";

const Theme = ({ children }: React.PropsWithChildren) => {
  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.Sidebar>...</C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};

export default Theme;
