import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Amenities from "./AmenitiesComponent";
import Rooms from "./RoomsComponent";
import { AMENITIES } from "../shared/amenities";
import { ROOMS } from "../shared/rooms";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: AMENITIES,
      rooms: ROOMS
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
        <Rooms rooms={this.state.rooms} />
        <Amenities amenities={this.state.amenities} />
      </div>
    );
  }
}

export default Main;
