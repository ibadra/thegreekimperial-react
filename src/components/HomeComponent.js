import React from "react";
import Hero from "./HeroComponent";
import Rooms from "./RoomsComponent";
import Amenities from "./AmenitiesComponent";
import Reviews from "./ReviewsComponent";
import { CTA, Location, Newsletter } from "./FinalComponent";

function Home(props) {
  return (
    <div>
      <Hero heroContent={props.heroContent} />
      <Rooms rooms={props.rooms} />
      <Amenities amenities={props.amenities} />
      <Reviews reviews={props.reviews} press={props.press} />
      <CTA />
      <Location />
      <Newsletter />
    </div>
  );
}

export default Home;
