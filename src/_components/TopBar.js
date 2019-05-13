import React, { Component } from "react";
import mainLogo from "../_assets/westernlogo_white_sm.png";
import UserDropdown from "./Dropdown"

export default class TopBar extends Component {
  render() {
    return (
      <header className="TopBar">
        <img src={mainLogo} alt="Western Logo" />
        <h4>Grad Program Manager!</h4>
        <UserDropdown data={this.props.data}/>
      </header>
    );
  }
}
