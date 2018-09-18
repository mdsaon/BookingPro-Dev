import React, { Component } from 'react';

class Aside extends Component {
  render() {
    return (
      <div className="app-home-aside">
        <h1>Side Bar</h1>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
    );
  }
}

export default Aside;
