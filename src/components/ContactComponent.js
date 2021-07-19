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

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phoneNum: "",
      email: "",
      contactType: "By Phone",
      text: "",
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
      name: "",
      phoneNum: "",
      email: "",
      contactType: "By Phone",
      text: "",
    });
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
            <h2>Contact us</h2>
            <p>We are here for you! Just fill out the form below</p>
            <hr />
          </div>
          <div className="col-md-10">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="name" md={2}>
                  Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
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
                <Label htmlFor="contactType" md={2}>
                  Preferred contact method
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
                <Label htmlFor="text" md={2}>
                  Your Message
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="text"
                    name="text"
                    rows="12"
                    value={this.state.text}
                    onChange={this.handleInputChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="info">
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
        <Modal
          isOpen={this.state.showModal}
          toggle={this.toggleModal}
          className="modal-md"
        >
          <ModalHeader className="justify-content-center">
            <h3>Thank you...</h3>
          </ModalHeader>
          <ModalBody>
            <p>
              Thanks for contacting us! We will contact you back as soon as
              possible
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
export default Contact;
