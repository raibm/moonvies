import styled from "styled-components";

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

  background: #C4C4C4;
  border-radius: 50%;

  justify-self: center;
  align-self: center;

  @media (max-width: 500px) {
    width: 40vh;
    height: 40vh;
  }

  @media (max-width: 500px) and (max-height: 670px) {
    width: 50vh;
    height: 50vh;
  }
`;
