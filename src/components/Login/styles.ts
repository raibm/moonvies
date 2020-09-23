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

  background: #070712;

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

  background: #c4c4c4;
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
`;

export const InputValue = styled.input`
  ${borderRadius};
  ${fontProperties};

  width: 40vh;
  height: 6vh;

  margin-bottom: 5px;
  padding-left: 40px;

  background: rgba(0, 0, 0, 0.4);

  ::placeholder {
    ${fontProperties};

    color: rgba(0, 0, 0, 0.3);

    transition: 0.2s;
  }

  :focus {
    outline: none;
    ::placeholder{
      color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const LoginButton = styled.button`
  ${borderRadius};

  width: 15vh;
  height: 5vh;

  background: rgba(0, 0, 0, 0.8);

  margin-top: 50%;
  margin-bottom: 15%;

  p {
    ${fontProperties};

    color: #ff7a00;
  }
`;

export const NewAccountLink = styled.span`
  a {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: black;

    :link {
      text-decoration: none;
    }
  }
`;
