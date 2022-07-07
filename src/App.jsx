import "./App.scss";
import Row from "./components/Row";

import React from "react";
import Rows from "./components/Rows";
import Banner from "./components/Banner";
import NavTop from "./components/NavTop";

const App = () => {
  return (
    <div className="App">
      <NavTop />
      <Banner />
      <Rows />
    </div>
  );
};

export default App;
