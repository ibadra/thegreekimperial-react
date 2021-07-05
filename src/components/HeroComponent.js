import React from "react";
import ReactPlayer from "react-player";

function Hero({ heroContent }) {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  if (dimensions.width <= 767) {
    return (
      <React.Fragment>
        <ReactPlayer
          url={heroContent.video}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
        <div className="main-text">
          <h1 tag="h1">{heroContent.title}</h1>
          <p className="main-p-small">{heroContent.description}</p>
        </div>
      </React.Fragment>
    );
  } else if (dimensions.width > 767) {
    return (
      <React.Fragment>
        <div className="overlay img-fluid">
          <div className="main-text">
            <h1 tag="h1">{heroContent.title}</h1>
            <p className="main-p">{heroContent.description}</p>
          </div>
        </div>
        <ReactPlayer
          url={heroContent.video}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </React.Fragment>
    );
  }
  return <div />;
}

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default Hero;
