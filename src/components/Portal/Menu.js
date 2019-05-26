import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap'

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Menu</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/portal">Home</Nav.Link>
      <Nav.Link href="/forms">Forms</Nav.Link>
      <Nav.Link href="/student">Student</Nav.Link>
      <Nav.Link href="/admin">Admin</Nav.Link>

    </Nav>
  </Navbar>
    );
  }
}

export default NavbarPage;