import React, { Component } from "react";
import mainLogo from "../assets/westernlogo_white_sm.png";
import  Student from  "../assets/Student";

export default class TopBar extends Component {
  render() {
    return (
      <header className="TopBar">
        <img src={mainLogo} alt="Western Logo" />
        <h4>Grad Program Manager!</h4>
        <span className="name">{ "Hello, " + Student[0].first_name + " " + Student[0].last_name }</span>
      </header>
    );
  }
}
