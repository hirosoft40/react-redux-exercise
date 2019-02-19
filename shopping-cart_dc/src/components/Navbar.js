import React, { Component } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return(
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Redux Shopping Cart</Navbar.Brand>
        <Nav className="mr-auto">SUM</Nav>
      </Navbar>
    </div>)
  }
}

export default NavBar;
