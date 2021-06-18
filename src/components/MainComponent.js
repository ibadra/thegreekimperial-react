import React, { Component } from "react";
import Amenities from "./AmenitiesComponent";
import Rooms from "./RoomsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Hero from "./HeroComponent";
import { AMENITIES } from "../shared/amenities";
import { ROOMS } from "../shared/rooms";
import { heroContent } from "../shared/header-footer";
import { logoImg } from "../shared/header-footer";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: AMENITIES,
      rooms: ROOMS,
      heroContent: heroContent,
      logoImg: logoImg,
    };
  }

  render() {
    return (
      <div>
        <Header logoImg={this.state.logoImg} />
        <Hero heroContent={this.state.heroContent} />
        <Rooms rooms={this.state.rooms} />
        <Amenities amenities={this.state.amenities} />
        <Footer />
      </div>
    );
  }
}

export default Main;
