import React, { Component } from "react";
import Rooms from "./RoomsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import RoomInfo from "./RoomInfoComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
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
    const HomePage = () => {
      return (
        <Home
          heroContent={this.state.heroContent}
          rooms={this.state.rooms}
          amenities={this.state.amenities}
          reviews={this.state.reviews}
          press={this.state.press}
        />
      );
    };
    return (
      <div>
        <Header logoImg={this.state.logoImg} />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/home#rooms"
            render={() => <Rooms rooms={this.state.rooms} />}
          />
          <RoomInfo rooms={this.state.rooms} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
