import React, { Component, Fragment } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
          </nav>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
