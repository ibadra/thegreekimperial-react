import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Amenities from "./AmenitiesComponent";
import { AMENITIES } from "../shared/amenities";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: AMENITIES,
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">The Greek Imperial</NavbarBrand>
          </div>
        </Navbar>
        <Amenities amenities={this.state.amenities} />
      </div>
    );
  }
}

export default Main;
