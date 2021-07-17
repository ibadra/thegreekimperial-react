import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1500,
});

function RenderAmenitiesEven({ amenity }) {
  return (
    <div key={amenity.id} className="row m-3 my-5 py-md-5">
      <div data-aos="fade-up" className="col-xl-5">
        <img
          src={amenity.image}
          alt={amenity.description}
          className="amenity-image img-fluid"
        />
      </div>
      <div
        data-aos="fade-down"
        className="col-xl-5 align-self-center ml-auto mt-4 mt-xl-0"
      >
        <h3 tag="h3">{amenity.name}</h3>
        <p className="d-none d-md-block">{amenity.description}</p>
      </div>
    </div>
  );
}

function RenderAmenitiesOdd({ amenity }) {
  return (
    <div key={amenity.id} className="row m-4 my-5 py-md-5">
      <div
        data-aos="fade-down"
        className="col-xl-5 align-self-center order-last order-xl-first mt-4 mt-xl-0"
      >
        <h3 tag="h3">{amenity.name}</h3>
        <p className="d-none d-md-block">{amenity.description}</p>
      </div>
      <div data-aos="fade-up" className="col-xl-5 align-self-center ml-auto">
        <img
          src={amenity.image}
          alt={amenity.description}
          className="amenity-image img-fluid"
        />
      </div>
    </div>
  );
}

function Amenities({ amenities }) {
  const amenitiesDisplay = amenities.map((amenity) => {
    if (
      amenities.indexOf(amenity) % 2 === 0 ||
      amenities.indexOf(amenity) === 0
    ) {
      return <RenderAmenitiesEven amenity={amenity} />;
    } else {
      return <RenderAmenitiesOdd amenity={amenity} />;
    }
  });
  return (
    <section id="amenities" className="container-fluid">
      <h2 data-aos="fade-up" tag="h2" className="text-center">
        Amenities
      </h2>
      <div className="container">{amenitiesDisplay}</div>
    </section>
  );
}

export default Amenities;

// SAME CODE AS A CLASS COMPONENT:

// class Amenities extends Component {

//   render() {
//     const amenities = this.props.amenities.map((amenity) => {
//       if (
//         this.props.amenities.indexOf(amenity) % 2 === 0 ||
//         this.props.amenities.indexOf(amenity) === 0
//       ) {
//         return (
//           <div key={amenity.id} className="row m-3 mt-5 mb-5">
//             <div className="col-md-5">
//               <img
//                 src={amenity.image}
//                 alt={amenity.description}
//                 className="img-fluid"
//               />
//             </div>
//             <div className="col-md-5 align-self-center">
//               <h4 tag="h4">{amenity.name}</h4>
//               <p className="d-none d-md-block">{amenity.description}</p>
//             </div>
//           </div>
//         );
//       } else {
//         return (
//           <div key={amenity.id} className="row m-4 mt-5 mb-5">
//             <div className="col-md-5 align-self-center order-last order-md-first">
//               <h4 tag="h4">{amenity.name}</h4>
//               <p className="d-none d-md-block">{amenity.description}</p>
//             </div>
//             <div className="col-md-5">
//               <img
//                 src={amenity.image}
//                 alt={amenity.description}
//                 className="amenity-image img-fluid"
//               />
//             </div>
//           </div>
//         );
//       }
//     });
//     return (
//       <div className="container-fluid">
//         <h2 tag="h2" className="text-center">
//           Amenities
//         </h2>
//         <div className="container">{amenities}</div>
//       </div>
//     );
//   }
// }
