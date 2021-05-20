import React, { Component } from "react";

class Amenities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: [
        {
          id: 0,
          name: "Complimentary Privileges",
          image: "assets/img/valet.jpg",
          description:
            "Your stay at the Imperial includes free premium wi-fi, complimentary Greek and American breakfast and complimentary Valet Parking for every guest.",
        },
        {
          id: 1,
          name: "Dining",
          image: "assets/img/food.jpg",
          description:
            "At the Imperial you feel the Greek vibes, what better than a Dolmades, a Moussaka and a variety of traditional dishes and signature cocktails to create the right atmosphere?! Aphrodite's Cave is your place.",
        },
        {
          id: 2,
          name: "Pool",
          image: "assets/img/pool.jpg",
          description:
            "Enjoy a great time at our outdoors pool, refresh and repeat surrounded by a stylish setting for relaxing, outdoor recreation, and dining.",
        },
        {
          id: 3,
          name: "Gym and Spa",
          image: "assets/img/spa.jpg",
          description:
            "At our indoors gym you don't have to sacrifice your workout, you are welcome to join our exclusive training routines and equipment and afterward, let yourself go in our luxurious spa.",
        },
        {
          id: 4,
          name: "Store",
          image: "assets/img/store.jpg",
          description:
            "Getting that last souvenir from your trip to Tarpon Springs? Come on down and take a look at our great selection of Greek products and Tarpon Springs exclusives at our Korintos Shoppe.",
        },
        {
          id: 5,
          name: "Rooms for Special Events",
          image: "assets/img/wedding.jpg",
          description:
            "Hosting you dream wedding, sweet sixteen, fundraising event? We are here for you, we can help you plan your party or just reserving one of our elegant ballrooms.",
        },
      ],
    };
  }

  render() {
    const amenities = this.state.amenities.map((amenity) => {
      if (
        this.state.amenities.indexOf(amenity) % 2 === 0 ||
        this.state.amenities.indexOf(amenity) === 0
      ) {
        return (
          <div key={amenity.id} className="row mt-5 mb-5">
            <div className="col-5">
              <img
                src={amenity.image}
                alt={amenity.description}
                className="amenity-image img-fluid"
              />
            </div>
            <div className="col-5 align-self-center">
              <h4 tag="h4">{amenity.name}</h4>
              <p className="d-none d-md-block">{amenity.description}</p>
            </div>
          </div>
        );
      } else {
        return (
          <div key={amenity.id} className="row mt-5 mb-5">
            <div className="col-5 align-self-center">
              <h4 tag="h4">{amenity.name}</h4>
              <p className="d-none d-md-block">{amenity.description}</p>
            </div>
            <div className="col-5">
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
