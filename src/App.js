import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Amenities from "./components/AmenitiesComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">The Greek Imperial</NavbarBrand>
          </div>
        </Navbar>
        <Amenities />
      </div>
    );
  }
}

export default App;
