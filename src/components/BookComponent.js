import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
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
import { Link } from "react-router-dom";

export class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkIn: new Date(),
      checkOut: new Date(),
      rooms: "Select...",
      adults: 1,
      children: 0,
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
      checkIn: new Date(),
      checkOut: new Date(),
      rooms: "Select...",
      adults: 1,
      children: 0,
    });
  }

  render() {
    const number = Math.floor(Math.random() * 9000000 + 1);
    return (
      <div className="container mt-5 pt-4 mb-5 pb-5">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Book a room</BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/specialbooking">Special Events</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="row row-content">
          <div className="col-12">
            <h2>Staying In?</h2>
            <p>Check room availability</p>
            <hr />
          </div>
          <div className="col-md-10">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="checkIn" md={2}>
                  Check In
                </Label>
                <Col md={3}>
                  <Input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    placeholder="Check In"
                    value={this.state.checkIn}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="checkOut" md={2}>
                  Check In
                </Label>
                <Col md={3}>
                  <Input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    placeholder="Check Out"
                    value={this.state.checkOut}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="room" md={2}>
                  Pick your room(s)
                </Label>
                <Col md={4}>
                  <Input
                    type="select"
                    name="rooms"
                    id="room"
                    value={this.state.rooms}
                    onChange={this.handleInputChange}
                  >
                    <option>Select...</option>
                    <option value="1 suite">1 Suite</option>
                    <option value="1 room">1 Room</option>
                    <option value="2 rooms">2 Rooms</option>
                    <option value="3 rooms">3 Rooms</option>
                    <option value="4 rooms">4 Rooms</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="adults" md={2}>
                  Adults
                </Label>
                <Col md={4}>
                  <Input
                    type="select"
                    name="adults"
                    id="adults"
                    value={this.state.adults}
                    onChange={this.handleInputChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="children" md={2}>
                  Children
                </Label>
                <Col md={4}>
                  <Input
                    type="select"
                    name="children"
                    id="children"
                    value={this.state.children}
                    onChange={this.handleInputChange}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="info">
                    Check Availability
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
        <Modal
          isOpen={this.state.showModal}
          toggle={this.toggleModal}
          className="modal-lg"
        >
          <ModalHeader className="justify-content-center">
            <h3>Opa!</h3>
          </ModalHeader>
          <ModalBody>
            <p>{`Your room selection is available (Reference # ${number}).`}</p>
            <p>
              To make your reservation, please call us at 1-206-555-1234 with
              your reference number at hand.
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
      </div>
    );
  }
}

///////////////SPECIALBOOK COMPONENT /////////////////

export class SpecialBooking extends Component {
  constructor() {
    super();
    this.state = {
      day: new Date(),
      selectedOption: "Conference Room",
      typeOfEvent: "",
      guests: "3-25",
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

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    this.toggleModal();
    event.preventDefault();
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    this.setState({
      selectedOption: e.target.value,
      [name]: e.target.value,
    });
  }

  resetForm() {
    this.setState({
      day: new Date(),
      selectedOption: "Conference Room",
      typeOfEvent: "",
      guests: "3-25",
    });
  }

  render() {
    const number = Math.floor(Math.random() * 9000000 + 1);
    return (
      <div className="container mt-5 pt-4 mb-5 pb-5">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/book">Book a room</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Special Events</BreadcrumbItem>
        </Breadcrumb>
        <div className="row row-content">
          <div className="col-12">
            <h2>Have an event?</h2>
            <p>Tell us more about your event!</p>
            <hr />
          </div>
          <div className="col-md-10">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="day" md={2}>
                  Event Date
                </Label>
                <Col md={3}>
                  <Input
                    type="date"
                    id="day"
                    name="day"
                    placeholder="Event Date"
                    value={this.state.day}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="typeOfEvent" md={2}>
                  Type of event
                </Label>
                <Col md={4}>
                  <Input
                    type="text"
                    name="typeOfEvent"
                    id="typeOfEvent"
                    value={this.state.typeOfEvent}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="guests" md={2}>
                  Guests
                </Label>
                <Col md={4}>
                  <Input
                    type="select"
                    name="guests"
                    id="guests"
                    value={this.state.guests}
                    onChange={this.handleInputChange}
                  >
                    <option value="3-25">3-25</option>
                    <option value="26-50">26-50</option>
                    <option value="51-75">51-75</option>
                    <option value="76-100">76-100</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label md={2}>Venue</Label>
                <Col md={3}>
                  <div onChange={this.handleInputChange}>
                    <div className="form-check">
                      <Label>
                        <Input
                          type="radio"
                          value="Conference Room"
                          checked={
                            this.state.selectedOption === "Conference Room"
                          }
                          onChange={this.handleInputChange}
                        />
                        Conference Room
                      </Label>
                    </div>
                    <div className="form-check">
                      <Label>
                        <Input
                          type="radio"
                          value="Ballroom"
                          checked={this.state.selectedOption === "Ballroom"}
                          onChange={this.handleInputChange}
                        />
                        Ballroom
                      </Label>
                    </div>
                  </div>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="info">
                    Check Availability
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
        <Modal
          isOpen={this.state.showModal}
          toggle={this.toggleModal}
          className="modal-lg"
        >
          <ModalHeader className="justify-content-center">
            <h3>Opa!</h3>
          </ModalHeader>
          <ModalBody>
            <p>{`We have a ${this.state.selectedOption} available for you. (Reference # ${number}).`}</p>
            <p>
              To make your reservation, please call us at 1-206-555-1234 with
              your reference number at hand.
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
      </div>
    );
  }
}
