import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <Navbar dark sticky="top" expand="lg">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img src={this.props.logoImg} className="logo img-fluid" />
          </NavbarBrand>
          <NavbarToggler class="mr-0" onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className="ml-5">
              <NavItem>
                <NavLink className="nav-link navbar-text" to="/home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link navbar-text" to="/home">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link navbar-text" to="/rooms">
                  Rooms
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link navbar-text" to="/contactus">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <span className="navbar-text ml-3 mr-1">
            <Button
              className="btn btn-lg btn-outline-light px-5 book-btn"
              to="/book"
            >
              Book
            </Button>
          </span>
        </div>
      </Navbar>
    );
  }
}

export default Header;
