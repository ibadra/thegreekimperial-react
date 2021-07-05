import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const RenderRoom = ({ room }) => {
  return (
    <div className="col-md-5">
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
      <div className="col-md-5">
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

function RoomInfo(props) {
  if (props.rooms) {
    return (
      <div className="container mt-5 pt-4 mb-5 pb-5">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/rooms">Rooms</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.rooms.name}</BreadcrumbItem>
        </Breadcrumb>
        <h2>Our room options</h2>
        <hr />
        <div className="row mt-5">
          <RenderRoom room={props.rooms} />
          <RenderInfo room={props.rooms} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default RoomInfo;
