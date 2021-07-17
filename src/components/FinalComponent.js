import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

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
        <div className="col-md-4">
          <h4>Here we are!</h4>
          <p className="d-none d-md-block text-justify line">
            The Greek Imperial welcomes to the "Sponge Capital of the World"...
            Its Greek heritage, and its 51 miles of waterfront allure are
            awaiting for you!...
          </p>
        </div>
        <div className="col-md-8 iframe-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.1383865044636!2d-82.75887040464744!3d28.151382441207534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c28cfd6f0942df%3A0xf4297f0ce0bf24b7!2sTarpon%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1618978464197!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            className="img-fluid ml-xl-5"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      email: "",
      showModal: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    this.toggleModal();
    event.preventDefault();
  }

  resetForm() {
    this.setState({
      firstName: "",
      email: "",
    });
  }
  render() {
    return (
      <section id="newsletter" className="container-fluid">
        <h2>Subscribe to Our Newsletter</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row className="align-items-center">
            <Label className="sr-only" htmlFor="firstName">
              First Name
            </Label>
            <Col md={4}>
              <Input
                className="py-4 mb-2"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </Col>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Col md={4}>
              <Input
                className="py-4 mb-2"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </Col>
            <Col md={3}>
              <Button
                type="submit"
                color="info"
                className="btn btn-lg p-3 px-4 mb-2"
              >
                Subscribe
              </Button>
            </Col>
          </FormGroup>
        </Form>
        <Modal
          isOpen={this.state.showModal}
          toggle={this.toggleModal}
          className="modal-lg"
        >
          <ModalHeader className="justify-content-center">
            <h3>You're subscribed!</h3>
          </ModalHeader>
          <ModalBody>
            <p>
              {`Dear ${this.state.firstName}, now you can have the best, curated
              recommendations to have a great time in Tarpon Springs and the
              Greek Imperial Hotel.`}
            </p>
            <div className="text-center">
              <Button
                className="mt-3 text-center"
                type="submit"
                color="primary"
                onClick={() => {
                  this.toggleModal();
                  this.resetForm();
                }}
              >
                Thank you
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </section>
    );
  }
}
