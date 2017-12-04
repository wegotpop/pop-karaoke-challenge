import React, { Component }  from 'react';

class Footer extends Component {

  render() {
    return (
    <div className="app-footer">
      <button className="next-button"onClick={this.props.onClick}>
        <span className='button'>Next Challenge</span>
      </button>
      <p className="counter">{this.props.totalClicks} Completed</p>
    </div>
    );
  }
}

export default Footer;
