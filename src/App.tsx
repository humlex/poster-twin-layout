import React, { FC } from "react";

import AuthorizationForm from "./web/components/AuthorizationForm";

import "./App.scss";

const App: FC<{}> = () => {
  return (
    <div className="App">
      <AuthorizationForm />
    </div>
  );
};

export default App;
