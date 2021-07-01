import React, { FC } from 'react';

import Router from './web/Router';

import './App.scss';

const App: FC<{}> = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
