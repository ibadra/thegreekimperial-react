import React, { Component } from "react";

class Amenities extends Component {
  
  render() {
    const amenities = this.props.amenities.map((amenity) => {
      if (
        this.props.amenities.indexOf(amenity) % 2 === 0 ||
        this.props.amenities.indexOf(amenity) === 0
      ) {
        return (
          <div key={amenity.id} className="row mt-5 mb-5">
            <div className="col-md-5">
              <img
                src={amenity.image}
                alt={amenity.description}
                className="img-fluid"
              />
            </div>
            <div className="col-md-5 align-self-center">
              <h4 tag="h4">{amenity.name}</h4>
              <p className="d-none d-md-block">{amenity.description}</p>
            </div>
          </div>
        );
      } else {
        return (
          <div key={amenity.id} className="row mt-5 mb-5">
            <div className="col-md-5 align-self-center order-last order-md-first">
              <h4 tag="h4">{amenity.name}</h4>
              <p className="d-none d-md-block">{amenity.description}</p>
            </div>
            <div className="col-md-5">
              <img
                src={amenity.image}
                alt={amenity.description}
                className="amenity-image img-fluid"
              />
            </div>
          </div>
        );
      }
    });
    return (
      <div className="container-fluid">
        <h2 tag="h2" className="text-center">
          Amenities
        </h2>
        <div className="container">{amenities}</div>
      </div>
    );
  }
}

export default Amenities;
