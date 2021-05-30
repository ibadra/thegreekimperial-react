import React from "react";
import { footerImg } from "../shared/header-footer";

function Footer(props) {
  return (
    <footer
      style={{ backgroundImage: `URL(${footerImg})` }}
      className="text-center"
    >
      <div className="container p-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-facebook-f"></i>
          </a>
          {/* <!-- Twitter --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-twitter"></i>
          </a>
          {/* <!-- Google --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-google"></i>
          </a>
          {/* <!-- Instagram --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-instagram"></i>
          </a>
          {/* <!-- Section: Social media --> */}
        </section>
        {/* <!-- Section: Links --> */}
        <section className="">
          {/* <!--Grid row--> */}
          <div className="row pt-3">
            {/* <!--Grid column--> */}
            <div className="col-12 col-md-6">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Book</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about-us">About Us</a>
                </li>
                <li>
                  <a href="#rooms">Rooms</a>
                </li>
                <li>
                  <a href="#restaurant">Dining</a>
                </li>
                <li>
                  <a href="#store">Shop</a>
                </li>
                <li>
                  <a href="#!">Contact</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column-->
            <!--Grid column--> */}
            <div className="col-12 col-md-6 align-self-center">
              <a href="tel:+12065551234">
                <i className="fa fa-phone"></i> 1-206-555-1234
              </a>
              <br />
              <a href="mailto:campsites@nucamp.co">
                <i className="fa fa-envelope-o"></i>{" "}
                contact@thegreekimperial.com
              </a>
              <br />
              <address>
                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.1383865044636!2d-82.75887040464744!3d28.151382441207534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28cfd6f0942df%3A0xf4297f0ce0bf24b7!2sTarpon%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1618978464197!5m2!1sen!2sus2352">
                  <i className="fa fa-map-marker"></i> Fictional Avenue, Tarpon
                  Springs, FL, 52658, USA.
                </a>
              </address>
            </div>
            <div className="col text-center p-3 mt-4">
              © 2021 Copyright: The Greek Imperial - Ivon Badra.
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
