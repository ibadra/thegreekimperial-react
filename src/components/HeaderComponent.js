import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <Navbar dark sticky="top">
        <div className="container">
          <NavbarBrand href="/">
            <img src={this.props.logoImg} className="logo" />
          </NavbarBrand>
        </div>
      </Navbar>
    );
  }
}

export default Header;
