import React, { Component } from 'react';
import Header from './Header';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div className="app-home">
        <div className="home-header">
          <Header />
        </div>
        <div className="main-view">
        <div className="home-aside">
          <Aside />
        </div>
        <div className="home-main">
          <Main />
        </div>
        </div>
        <div className="home-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
