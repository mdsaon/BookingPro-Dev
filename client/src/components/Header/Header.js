import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="app-home-header">
        <h1>Header</h1>
        <button color="primary">Log Out</button>
      </div>
    );
  }
}

export default Header;
