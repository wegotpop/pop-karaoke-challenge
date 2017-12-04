import React, { Component }  from 'react';

class Footer extends Component {

  render() {
    return (
    <div className="app-footer">
      <button className="next-button"onClick={this.props.onClick}>
        <span>Next Challenge</span>
      </button>
      <span className="counter">{this.props.totalClicks} Completed</span>
    </div>
    );
  }
}

export default Footer;
