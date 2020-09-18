import React from 'react';

import GlobalStyle from './styles/GlobalStyles';
import MainGrid from './components/MainGrid';
import LoginPage from './components/Login';


function App() {
  return (
    <>
    <LoginPage/>
    {/* <MainGrid/> */}
    <GlobalStyle/>
    </>
  );
}

export default App;
