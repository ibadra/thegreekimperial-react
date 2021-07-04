import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function Rooms({ rooms }) {
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
    <div className="container-fluid" id="rooms">
      <h2 tag="h2" className="text-center">
        Accomodations
      </h2>
      <div className="row m-4 d-flex justify-content-center">{room}</div>
    </div>
  );
}

export default Rooms;
