import React from "react";

const RenderRoom = (rooms) => {
  rooms.map((room) => {
    return (
      <div className="col-md-5">
        <h3>{room.name}</h3>
        <img src={room.image} alt={room.description} />
      </div>
    );
  });
};

const RenderInfo = (rooms) => {
  rooms.map((room) => {
    return (
      <div className="col-md-5">
        <p className="mb-3">{room.description}</p>
        <h4>Facts at a Glance</h4>
      </div>
    );
  });
};

function RoomInfo({ rooms }) {
  return (
    <div className="container">
      <h2>Our room options</h2>
      <hr />
      <div className="row">
        <RenderRoom rooms={rooms} />
        <RenderInfo rooms={rooms} />
      </div>
    </div>
  );
}

export default RoomInfo;
