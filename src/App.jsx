import "./App.scss";
import Row from "./components/Row";

import React from "react";
import Rows from "./components/Rows";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="App">
      <Banner />
      <Rows />
    </div>
  );
};

export default App;
