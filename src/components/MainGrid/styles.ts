import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;

  background: #f9cb9c;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5vh 95vh 20vh;
  grid-row-gap: 0px;
  grid-template-areas:
    "header header"
    "main main"
    "footer footer";
`;

export const Header = styled.div`
  /* height: 100%; */
  background: white;
  grid-area: header;
  /* grid-column:1/3; */
  box-shadow: 0 0 10px;
  z-index: 2;

`;

export const Main = styled.div`
  /* height: 140%; */
  background: linear-gradient(to top, #21404D, #0F2027, #0A1519);
  grid-area: main;
  /* grid-column: 1/3; */
  /* grid-row:2/3; */
`;
export const Footer = styled.div`
  /* height: 100%; */
  background: white;
  grid-area: footer;
  z-index: 1; 
  box-shadow: 0 0 10px;
  /* grid-column:1/3; */
`;


export const FirstStar = styled.div`
  width: 1px;
  height: 1px;
  border-radius: 50%;

  background: white;

  animation: 6s fall ease infinite;
  position: absolute;

  @keyframes fall{
    0% {
      opacity: 0;
      margin-top: 0;
    }
    20% {
      width: 3px;
      height: 3px;
      opacity: 0.4
    }
    25%{
      opacity: 1;
    }
    29%{
      opacity: 0.5
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

  @keyframes fallTwo{
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