import React, { Component }  from 'react';

class Footer extends Component {

  render() {
    return (
    <div className="app-footer">
      <button className="next-button"onClick={this.props.onClick}>
        <span className='button'>{this.props.startButton}</span>
      </button>
      <p className="counter">{this.props.totalClicks} Challenges Completed</p>
    </div>
    );
  }
}

export default Footer;
