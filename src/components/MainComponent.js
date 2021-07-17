import React, { Component } from "react";
import Rooms from "./RoomsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import RoomInfo from "./RoomInfoComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Book, SpecialBooking } from "./BookComponent";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTopComponent";
import { AMENITIES } from "../shared/amenities";
import { ROOMS } from "../shared/rooms";
import { heroContent, logoImg } from "../shared/header-footer";
import { reviews, press } from "../shared/reviews";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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

    const Content = () => {
      const location = useLocation();

      return (
        <div>
          <Header logoImg={this.state.logoImg} />
          <ScrollToTop>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="page" timeout={300}>
                <Switch>
                  <Route path="/home" component={HomePage} />
                  <Route
                    exact
                    path="/rooms"
                    render={() => <Rooms rooms={this.state.rooms} />}
                  />
                  <Route path="/rooms/:roomId" component={RoomWithId} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/book" component={Book} />
                  <Route
                    exact
                    path="/specialbooking"
                    component={SpecialBooking}
                  />
                  <Redirect to="/home" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </ScrollToTop>
          <Footer />
        </div>
      );
    };

    return <Content />;
  }
}

export default Main;

//I had to make use of an arrow function as intermediary to access the location via the useLocation function provided by react-router-dom. I could not use that hook (useLocation) inside the class component. So I took the whole return statement from the Main Component and moved it to the arrow function Content. Then rendered content in the return method in the Main Component. I used arrow function instead of function declaration because I had a reference to the state, with the function declaration it would not have worked. See previous version in the Book Forms and Scroll to Top commit in git
