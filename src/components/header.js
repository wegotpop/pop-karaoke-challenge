import React, { Component }  from 'react';
import logo from '../karaoke.svg';

class Header extends Component {

  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title"> Top of the POPSSS </h1>
      </div>
    );
  }
}

export default Header;
