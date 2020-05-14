import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark" expand="sm">
        <Navbar.Brand className="brand" href="#">Online Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link  href="/About">About</Nav.Link>
            <NavDropdown className="link" title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Products/Clothes">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="/Products/Shoes">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="/Products/Spectacles">Spectacles</NavDropdown.Item>
              <NavDropdown.Item href="/Products/Mobile">Mobile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Products/Electronics">Electronics</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Contact">Contact Us</Nav.Link>
          </Nav>
          <Form inline className="form">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}