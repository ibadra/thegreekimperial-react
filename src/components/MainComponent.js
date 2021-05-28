import React, { Component } from "react";
import Amenities from "./AmenitiesComponent";
import Rooms from "./RoomsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { AMENITIES } from "../shared/amenities";
import { ROOMS } from "../shared/rooms";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: AMENITIES,
      rooms: ROOMS,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Rooms rooms={this.state.rooms} />
        <Amenities amenities={this.state.amenities} />
        <Footer />
      </div>
    );
  }
}

export default Main;
