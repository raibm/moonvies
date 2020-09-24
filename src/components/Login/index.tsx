import React from "react";

import "./styles.ts";
import {
  MoonContainer,
  Moon,
  InputValue,
  LoginButton,
  InputZone,
  ButtonsZone,
  NewAccountLink,
  FirstStar,
  SecondStar,
  ThirdStar
} from "./styles";

const LoginPage: React.FC = () => {
  return (
    <MoonContainer>
      <FirstStar />
      <SecondStar />
      <ThirdStar/>
      <Moon>
        <InputZone>
          <InputValue placeholder="Login" />
          <InputValue placeholder="Password" type="password"/>
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
};

export default LoginPage;
