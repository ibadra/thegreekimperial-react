import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Rooms({ rooms }) {
  AOS.init({
    duration: 1500,
  });
  const room = rooms.map((room) => {
    return (
      <div className="col-md-4 mb-5" key={room.id}>
        <Card>
          <Link to={`/rooms/${room.id}`}>
            <CardImg src={room.image} alt={room.name} className="img-fluid" />
            <CardImgOverlay>
              <CardTitle>
                <h4 tag="h4">{room.name}</h4>
              </CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </div>
    );
  });

  return (
    <section className="container-fluid" id="rooms">
      <h2 tag="h2" data-aos="fade-up" className="text-center">
        Accomodations
      </h2>
      <div data-aos="fade-up" className="row m-4 d-flex justify-content-center">
        {room}
      </div>
    </section>
  );
}

export default Rooms;
