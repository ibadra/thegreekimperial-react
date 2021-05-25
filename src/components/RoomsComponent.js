import React from "react";

function Rooms({ rooms }) {
  const room = rooms.map((room) => {
    return (
      <div className="col-md-4 mb-5" key={room.id}>
        <img src={room.image} alt={room.name} className="img-fluid" />
        <h4 tag="h4">{room.name}</h4>
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <h2 tag="h2" className="text-center">
        Accomodations
      </h2>
      <div className="row m-5 d-flex justify-content-center">{room}</div>
    </div>
  );
}

export default Rooms;
