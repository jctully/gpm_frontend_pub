import React, { Component } from "react";

import TopBar from "../_components/TopBar";
import Menu from "../_components/Menu"

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
