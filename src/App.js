import React from "react";
import * as Mui from "@material-ui/core";

import Calculator from "./Calculator";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div> Basic Calculator </div>
        </header>
        <Calculator />
        {/* The below element is not rendered (obviously) */}
        {/* This is for Material UI task (see the README.md) */}
        <div style={{ display: "none" }}>
          <Mui.Button variant="contained">
            Material UI Button example
          </Mui.Button>
        </div>
      </div>
    );
  }
}
