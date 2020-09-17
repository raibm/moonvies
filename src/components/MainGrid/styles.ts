import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;

  background: #f9cb9c;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 8vh 92vh 20vh;
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
`;

export const Main = styled.div`
  /* height: 140%; */
  background: blue;
  grid-area: main;
  /* grid-column: 1/3; */
  /* grid-row:2/3; */
`;
export const Footer = styled.div`
  /* height: 100%; */
  background: red;
  grid-area: footer;
  /* grid-column:1/3; */
`;
