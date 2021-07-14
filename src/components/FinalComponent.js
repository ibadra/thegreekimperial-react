import React from "react";

export function CTA() {
  return (
    <section id="CTA" className="container-fluid">
      <h2>We can't wait to meet you</h2>
      <form>
        <div className="form-group text-center">
          <a className="btn btn-lg btn-info" role="button">
            Book Now
          </a>
        </div>
        <div className="form-group text-center">
          <a className="btn btn-outline-info" role="button">
            Contact Us
          </a>
        </div>
      </form>
    </section>
  );
}

export function Location() {
  return (
    <section id="location" className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-4">
          <h4>Here we are!</h4>
          <p className="d-none d-md-block text-justify line">
            The Greek Imperial welcomes to the "Sponge Capital of the World"...
            Its Greek heritage, and its 51 miles of waterfront allure are
            awaiting for you!...
          </p>
        </div>
        <div className="col-12 col-md-8 iframe-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.1383865044636!2d-82.75887040464744!3d28.151382441207534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28cfd6f0942df%3A0xf4297f0ce0bf24b7!2sTarpon%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1618978464197!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            className="img-fluid"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section id="newsletter" className="container-fluid">
      <h2>Subscribe to Our Newsletter</h2>
      <form>
        <div className="form-group row align-items-center">
          <label className="sr-only" htmlFor="firstName">
            First Name:
          </label>
          <div className="col-12 col-md-4">
            <input
              className="form-control py-4"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <label className="sr-only" htmlFor="email">
            Email:
          </label>
          <div className="col-12 col-md-4 mr-4 email-input">
            <input
              className="form-control py-4"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="col-12 col-md-3">
            <button type="submit" className="btn btn-lg btn-info p-3 px-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
