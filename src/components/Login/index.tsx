import React from "react";

import './styles.ts';
import { MoonContainer, Moon, InputValue, LoginButton, InputZone, ButtonsZone, NewAccountLink } from "./styles";
import { FirstStar, SecondStar } from "../MainGrid/styles";

const LoginPage: React.FC = () => {
  return (
    <MoonContainer>
      <FirstStar />
      <SecondStar />
      <Moon>
        <InputZone>
          <InputValue placeholder="Login"/>
          <InputValue placeholder="Password"/>
        </InputZone>
        <ButtonsZone>
        <LoginButton>
          <p>Login</p>
        </LoginButton>
        <NewAccountLink>
         <a href="/">New account...</a> 
        </NewAccountLink>
        </ButtonsZone>
      </Moon>
    </MoonContainer>
  );
}

export default LoginPage;