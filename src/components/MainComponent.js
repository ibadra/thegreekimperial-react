import React, { Component } from "react";
import Amenities from "./AmenitiesComponent";
import Rooms from "./RoomsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Hero from "./HeroComponent";
import Reviews from "./ReviewsComponent";
import RoomInfo from "./RoomInfoComponent";
import { CTA, Location, Newsletter } from "./FinalComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { AMENITIES } from "../shared/amenities";
import { ROOMS } from "../shared/rooms";
import { heroContent, logoImg } from "../shared/header-footer";
import { reviews, press } from "../shared/reviews";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: AMENITIES,
      rooms: ROOMS,
      heroContent: heroContent,
      logoImg: logoImg,
      reviews: reviews,
      press: press,
    };
  }

  render() {
    return (
      <div>
        <Header logoImg={this.state.logoImg} />
        <Hero heroContent={this.state.heroContent} />
        <Switch>
          <Rooms rooms={this.state.rooms} />
        </Switch>
        <RoomInfo rooms={this.state.rooms} />
        <Reviews reviews={this.state.reviews} press={this.state.press} />
        <Amenities amenities={this.state.amenities} />
        <CTA />
        <Location />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default Main;
