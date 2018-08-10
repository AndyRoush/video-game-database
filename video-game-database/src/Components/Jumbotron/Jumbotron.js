import React, { Component, Fragment } from 'react';
import './Jumbotron.css';
import vgdb from '../../assets/VGDB.jpg';

class Jumbotron extends Component {
  render() {
    return(
      <Fragment>
        <img src={vgdb} className="img-fluid" alt="Responsive image"/>
        {/* <img src="https://cdn-images-1.medium.com/max/2000/1*r2AuXvDuxdRWCqvmBhlssw.png" className="img-fluid" alt="Responsive image"/> */}
      </Fragment>
    )
  }
}

export default Jumbotron;