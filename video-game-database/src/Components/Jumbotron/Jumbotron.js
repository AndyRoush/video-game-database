import React, { Component, Fragment } from 'react';
import './Jumbotron.css';
import vgdb from '../../assets/VGDB.jpg';

class Jumbotron extends Component {
  render() {
    return(
      <Fragment>
        <img src={vgdb} className="img-fluid" alt="Responsive image"/>
      </Fragment>
    )
  }
}

export default Jumbotron;