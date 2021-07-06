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
} from "reactstrap";
import { Link } from "react-router-dom";

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      agree: false,
      contactType: "By Phone",
      feedback: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div className="container mt-5 pt-4 mb-5 pb-5">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact</BreadcrumbItem>
        </Breadcrumb>
        <div className="row row-content">
          <div className="col-12">
            <h2>Contact Us</h2>
            <p>
              Any feedback, special arrangements or comments? We would love to
              hear from you!{" "}
            </p>
            <hr />
          </div>
          <div className="col-md-10">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="phoneNum" md={2}>
                  Phone
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="phoneNum"
                    name="phoneNum"
                    placeholder="Phone number"
                    value={this.state.phoneNum}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="contactType" md={{ size: 3, offset: 2 }}>
                  Preferred Contact Method
                </Label>
                <Col md={4}>
                  <Input
                    type="select"
                    name="contactType"
                    id="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>By Phone</option>
                    <option>By Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your Message
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="12"
                    value={this.state.feedback}
                    onChange={this.handleInputChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default Book;

{
  /* <div id="bookModal" class="modal fade" role="dialog">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Check Availability</h3>
        <button type="button" class="close" data-dismiss="modal">
          &times;
        </button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <form>
            <div class="form-row">
              <div class="col-12 col-lg-5 mx-auto">
                <h5 class="text-center mb-4">Staying in?</h5>
                <div class="row form-group">
                  <label class="col-sm-5 col-form-label" for="check-in">
                    Check in:
                  </label>
                  <div class="col-sm-7">
                    <input
                      class="form-control"
                      type="date"
                      id="check-in"
                      name="check-in"
                    />
                  </div>
                </div>
                <div class="row form-group">
                  <label class="col-sm-5 col-form-label" for="check-out">
                    Check out:
                  </label>
                  <div class="col-sm-7">
                    <input
                      class="form-control"
                      type="date"
                      id="check-out"
                      name="check-out"
                    />
                  </div>
                </div>
                <div class="row form-group">
                  <label class="col-sm-5 col-form-label" for="num-of-rooms">
                    Pick your room(s):
                  </label>
                  <div class="col-sm-7">
                    <select
                      class="form-control"
                      name="num-of-rooms"
                      id="num-of-rooms"
                    >
                      <option value="">Select...</option>
                      <option value="1suite">1 Suite</option>
                      <option value="1room">1 Room</option>
                      <option value="2rooms">2 Rooms</option>
                      <option value="3rooms">3 Rooms</option>
                      <option value="4rooms">4 Rooms</option>
                    </select>
                  </div>
                </div>
                <div class="row form-group">
                  <label class="col-sm-5 col-form-label" for="num-of-adults">
                    Adults:
                  </label>
                  <div class="col-sm-7">
                    <select
                      class="form-control"
                      name="num-of-adults"
                      id="num-of-adults"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
                <div class="row form-group">
                  <label class="col-sm-5 col-form-label" for="num-of-children">
                    Children:
                  </label>
                  <div class="col-sm-7">
                    <select
                      class="form-control"
                      name="num-of-children"
                      id="num-of-children"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr class="d-none d-lg-block" />
              <div class="col-12 col-lg-5 mx-auto">
                <h5 class="text-center mb-4">Have an event?</h5>
                <div class="row form-group">
                  <label class="col-sm-5 col-form-label" for="event-date">
                    Event date:
                  </label>
                  <div class="col-sm-7">
                    <input
                      class="form-control"
                      type="date"
                      id="event-date"
                      name="event-date"
                    />
                  </div>
                </div>
                <div class="row form-group align-items-center">
                  <label class="col-sm-5 col-form-label">Pick one venue:</label>
                  <div class="col-sm-7">
                    <input
                      type="radio"
                      id="ballroom"
                      name="venue"
                      value="ballroom"
                    />
                    <label class="col-form-label" for="ballroom">
                      Ballroom
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="conf-room"
                      name="venue"
                      value="conf-room"
                    />
                    <label class="col-form-label" for="conf-room">
                      Conference Room
                    </label>
                    <br />
                  </div>
                </div>
                <div class="row form-group">
                  <label class="col-sm-5 col-form-label" for="type-of-event">
                    Type of Event:
                  </label>
                  <div class="col-sm-7">
                    <input
                      class="form-control"
                      type="text"
                      id="type-of-event"
                      name="type-of-event"
                      placeholder="Type of Event"
                    />
                  </div>
                </div>
                <div class="row form-group">
                  <label class="col-sm-5 col-form-label" for="num-of-guests">
                    Guests:
                  </label>
                  <div class="col-sm-7">
                    <select
                      class="form-control"
                      name="num-of-guests"
                      id="num-of-guests"
                    >
                      <option value="1-25">1-25</option>
                      <option value="26-50">26-50</option>
                      <option value="51-75">51-75</option>
                      <option value="76-100">76-100</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-center mt-3">Ready?...</p>
            <div class="form-row">
              <button type="submit" class="btn btn-info btn-lg mx-auto">
                Check Availability
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
