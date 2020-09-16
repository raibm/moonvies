import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;

  background: linear-gradient(to top, #21404D, #0F2027, #0A1519);

  display: flex;
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
      margin-top: 99vh;
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
      margin-top: 99vh;
      margin-left: 69vw;
    }
    100% {
      opacity: 0;
    }
  }
`;