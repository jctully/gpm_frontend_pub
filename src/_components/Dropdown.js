import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Student from  "../_assets/Student.json";

export default class DD extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          <span class="name">{ "Hello, " + Student[0].first_name + " " + Student[0].last_name }</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Log out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
