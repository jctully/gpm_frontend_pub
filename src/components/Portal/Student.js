import React, { Component } from "react";

import TopBar from "./TopBar";
import Menu from "./Menu"

export default class Student extends Component {
  render(  ) {
    return (
      <div>
        <TopBar />
        <Menu />
        <h3>Student information</h3>
      </div>
    );
  }
}
