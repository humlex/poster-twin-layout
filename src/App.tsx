import React, { FC } from "react";

import Router from "./web/Router";
import ClientsPage from "./web/pages/ClientsPage";

import "./App.scss";

const App: FC<{}> = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
