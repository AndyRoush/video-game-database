import React, { Component, Fragment } from "react";
import "./Banner.css";
import banner from '../../assets/Banner_png.png';

class Banner extends Component {
  render() {
    return (
      <Fragment>
        <div className="slideshow">
          <div className="images">
          {/* <img src={banner} alt="Responsive image"/> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Banner;
