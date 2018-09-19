import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <div className="app-home-header">
        <h1>Header</h1>
        <div className="btn">
            <button className="btn-primary">Log In</button>
            <button className="btn-primary">Sign Up</button>
        </div>
      </div>
    );
  }
}
export default Header;
