import React from 'react';
import { Background, Header, Main, Footer, FirstStar, SecondStar } from './styles';

import './styles';

const MainGrid: React.FC = () => {
  return (
  <Background>
    <Header>
    </Header>
    <Main>
      <FirstStar/>
      <SecondStar/>
    </Main>
    <Footer>
    </Footer>
  </Background>
  );
};

export default MainGrid;
