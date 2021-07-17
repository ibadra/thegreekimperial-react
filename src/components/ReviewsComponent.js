import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1500,
});

const Reviews = ({ reviews, press }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === reviews.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? reviews.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = reviews.map((review) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={review.id}
      >
        <h2 data-aos="fade-up" className="review-text">
          {review.quote}
        </h2>
        <img src={review.image} alt={review.quote} className="reviews-img" />
        <em>{review.guest}</em>
      </CarouselItem>
    );
  });

  const logos = press.map((logo) => {
    return (
      <img
        data-aos="fade-up"
        className="pressImg"
        src={logo.img}
        alt="social proof trivago expedia trip advisor"
      />
    );
  });
  AOS.init({
    duration: 1500,
  });
  return (
    <React.Fragment>
      <section id="reviews">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            className="indicators"
            items={reviews}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            className="previous"
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            className="next"
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </section>
      <section id="press">{logos}</section>
    </React.Fragment>
  );
};

export default Reviews;
