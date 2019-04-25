import React, { Component } from "react";

import mainLogo from "../../Assets/westernlogo_white_sm.png";
import { NAME } from "../../App";

export default class TopBar extends Component {
  render() {
    return (
      <header className="TopBar">
        <img src={mainLogo} alt="Western Logo" />
        <h4>Grad Program Manager!</h4>
        <span class="name">{NAME}</span>
      </header>
    );
  }
}
