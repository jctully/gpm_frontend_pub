import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { userService } from '../_services/user.service';
import Student from  "../_assets/Student.json";

export default class DD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      users: []
    };

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

  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem('user')),
      users: { loading: true }
    });
    userService.getAll().then(users => this.setState({ users }));
  }

  render() {

    const { user, users } = this.state;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            <span class="name">User
            </span>
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><Link to="/login">Logout</Link></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
