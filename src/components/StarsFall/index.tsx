import React from 'react';
import { Background, FirstStar, SecondStar } from './styles';

import './styles';

const StarsFall: React.FC = () => {
  return (
  <Background>
    <FirstStar/>
    <SecondStar/>
  </Background>
  );
};

export default StarsFall;
