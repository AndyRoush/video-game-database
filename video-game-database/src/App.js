import React, { Component, Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';
import Jumbotron from './Components/Jumbotron/Jumbotron'

class App extends Component {

  render() {
   
    return (
      <Fragment>
      <Jumbotron />
      <Navbar />
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
        </div>
      </Router>
      </Fragment>
    );
  }
}

export default App;
