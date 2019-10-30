import React from 'react';

import Routes from './routes';

import GlobalStyle from './styles/globals';
import logo from './assets/ifood-logo.svg';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <div className="container">
        <img src={logo} alt="aircnc" width="120" />
        <div className="content">
          <Routes />
        </div>
      </div>
    </>
  );
};

export default App;
