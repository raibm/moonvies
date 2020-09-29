import styled, { css } from "styled-components";

const borderRadius = css`
  border: none;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
`;

const fontProperties = css`
  font-family: Rounded Mplus 1c Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
`;

export const MoonContainer = styled.div`
  width: 100%;
  height: 100vh;

  background: var(--main-color);

  display: grid;
  grid-row-gap: 0px;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 15vh 35vh 35vh 15vh;
`;

export const Moon = styled.div`
  width: 60vh;
  height: 60vh;

  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 2;

  background: var(--moon-color);
  border-radius: 50%;

  justify-self: center;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 40vh;
    height: 40vh;
  }

  @media (max-width: 500px) and (max-height: 670px) {
    width: 50vh;
    height: 50vh;
  }

  @media (max-width: 300px) {
    width: 40vh;
    height: 40vh;
  }
`;

export const InputZone = styled.div`
  height: 35vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-end;
`;

export const ButtonsZone = styled.div`
  height: 20vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  
  @media(max-width: 420px){
    height: 25vh;
  }
`;

export const InputValue = styled.input`
  ${borderRadius};
  ${fontProperties};

  width: 40vh;
  height: 6vh;

  margin-bottom: 5px;
  padding-left: 40px;

  background: var(--input-soft-color);

  ::placeholder {
    ${fontProperties};

    color: var(--input-placeholder-soft-color);

    transition: 0.2s;
  }

  :focus {
    outline: none;
    ::placeholder {
      color: var(--input-placeholder-focus-soft-color);
    }
  }
`;

export const LoginButton = styled.button`
  ${borderRadius};

  width: 15vh;
  height: 5vh;

  background: var(--dark-button-color);

  margin-top: 50%;
  margin-bottom: 15%;

  outline: none;

  p {
    ${fontProperties};

    color: #ff7a00;
    transition: 0.2s;
  }

  :hover {
    background: #ff7a00;
    cursor: pointer;

    p {
      color: var(--dark-button-color);
    }
  }

  @media (max-width: 420px) {
    width: 12vh;
    height: 4vh;

    p {
      ${fontProperties};
      font-size: 14px;
      line-height: 14px;
      color: #ff7a00;
      transition: 0.2s;
    }

    :hover {
      background: #ff7a00;
      cursor: pointer;

      p {
        color: var(--dark-button-color);
      }
    }

  }

  @media (max-height: 360px){
    margin-top: 25%;

    p {
    font-size: 10px;
    }
  }
`;

export const NewAccountLink = styled.span`
  a {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    margin-left: 10px;
    color: black;

    :link {
      text-decoration: none;
    }

    :hover {
      text-decoration: underline;
    }
  }

  @media(max-width: 420px){
    a{
      font-size: 10px;
    }
  }
  @media (max-height: 360px){
    a{
      font-size: 10px;
    }
  }
`;

export const FirstStar = styled.div`
  width: 1px;
  height: 1px;
  border-radius: 50%;

  background: white;

  animation: 6s fall ease infinite;
  position: absolute;

  @keyframes fall {
    0% {
      opacity: 0;
      margin-top: 0;
    }
    20% {
      width: 3px;
      height: 3px;
      opacity: 0.4;
    }
    25% {
      opacity: 1;
    }
    29% {
      opacity: 0.5;
    }
    35% {
      opacity: 1;
    }
    65% {
      width: 2px;
      height: 2px;
      opacity: 0.1;
    }
    99% {
      margin-top: 60vh;
      margin-left: 99vw;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const SecondStar = styled.div`
  width: 1px;
  height: 1px;
  border-radius: 50%;

  position: absolute;

  background: white;

  animation: 5s fallTwo ease infinite;

  @keyframes fallTwo {
    0% {
      opacity: 0;
      margin-left: 2vw;
    }
    20% {
      opacity: 0.4;
    }
    35% {
      opacity: 1;
    }
    65% {
      opacity: 0.2;
    }
    99% {
      margin-top: 60vh;
      margin-left: 69vw;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const ThirdStar = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;

  position: absolute;

  background: white;

  animation: 8s fallThree ease-out infinite;

  @keyframes fallThree {
    0% {
      opacity: 0;
      margin-top: 30vh;
      margin-left: 2vw;
    }
    20% {
      opacity: 0.4;
    }
    35% {
      opacity: 1;
    }
    65% {
      opacity: 0.2;
    }
    99% {
      margin-top: 90vh;
      margin-left: 69vw;
    }
    100% {
      opacity: 0;
    }
  }
`;
