import React from "react";

const RenderRoom = ({ room }) => {
  return (
    <div className="col-md-5" key={room.id}>
      <h3>{room.name}</h3>
      <img
        src={room.image}
        alt={room.description}
        className="w-100 img-fluid mt-3"
      />
    </div>
  );
};

const RenderInfo = ({ room }) => {
  if (room.icon1) {
    return (
      <div className="col-md-5" key={room.id}>
        <p className="room-info">{room.description}</p>
        <h4 className="ml-3">Facts at a Glance:</h4>
        <div className="icon-container ml-3 mt-5">
          <div className="text-center">
            {room.icon1}
            <p className="mt-1">{room.guests}</p>
          </div>
          <div className="text-center">
            {room.icon2}
            <p className="mt-1">{room.beds}</p>
          </div>
          <div className="text-center">
            {room.icon3}
            <p className="mt-1">
              Breakfast
              <br />
              Included
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="col-md-5" key={room.id}>
      <p className="room-info">{room.description}</p>
    </div>
  );
};

function RoomInfo({ rooms }) {
  const roomsDisplay = rooms.map((room) => {
    return (
      <React.Fragment key={room.id}>
        <RenderRoom room={room} />
        <RenderInfo room={room} />
      </React.Fragment>
    );
  });
  return (
    <div className="container">
      <h2>Our room options</h2>
      <hr />
      <div className="row mt-5">{roomsDisplay}</div>
    </div>
  );
}

export default RoomInfo;
