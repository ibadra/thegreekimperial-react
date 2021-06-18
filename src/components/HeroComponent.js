import React from "react";
import ReactPlayer from "react-player";

function Hero(props) {
  return (
    <React.Fragment>
      <section>
        <ReactPlayer
          url={props.heroContent.video}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </section>
      <div className="overlay">
        <div className="main-text">
          <h1 tag="h1">{props.heroContent.title}</h1>
          <p className="main-p">{props.heroContent.description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
