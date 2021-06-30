import React, { FC } from "react";

import SideBar from "./web/components/SideBar";

import "./App.scss";

const App: FC<{}> = () => {
  return (
    <div className="App">
      <SideBar />
    </div>
  );
};

export default App;
