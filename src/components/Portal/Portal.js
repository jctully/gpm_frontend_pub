import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import TopBar from "./TopBar";
import Menu from "../Menu/Menu"

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>


    {children}
  </Container>
);

export default class Portal extends Component {
  render(  ) {
    return (
      <div>
        <TopBar />
        <Menu />
        <h3>Portal</h3>
      </div>
    );
  }
}
