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
  background: #f9cb9c;
  grid-area: header;
  /* grid-column:1/3; */
  box-shadow: 0 0 10px;
  z-index: 2;

`;

export const Main = styled.div`
  /* height: 140%; */
  background: #f9cb9c;
  grid-area: main;
  /* grid-column: 1/3; */
  /* grid-row:2/3; */
`;
export const Footer = styled.div`
  /* height: 100%; */
  background: #f9cb9c;
  grid-area: footer;
  z-index: 1; 
  box-shadow: 0 0 1 0px;
  /* grid-column:1/3; */
`;
