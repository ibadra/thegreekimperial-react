import React, { Component } from "react";
import Rooms from "./RoomsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import RoomInfo from "./RoomInfoComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Book from "./BookComponent";
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

    const RoomWithId = ({ match }) => {
      return (
        <RoomInfo
          rooms={this.state.rooms.find(
            (room) => room.id === +match.params.roomId
          )}
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
          <Route path="/rooms/:roomId" component={RoomWithId} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/book" component={Book} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
