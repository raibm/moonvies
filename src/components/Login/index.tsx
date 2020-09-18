import React from "react";

import './styles.ts';
import { MoonContainer, Moon } from "./styles";
import { FirstStar, SecondStar } from "../MainGrid/styles";

const LoginPage: React.FC = () => {
  return (
    <MoonContainer>
      <FirstStar/>
      <SecondStar/>
      <Moon>
        
      </Moon>
    </MoonContainer>
  );
}

export default LoginPage;