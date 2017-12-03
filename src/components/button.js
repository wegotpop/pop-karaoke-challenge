import React, { Component }  from 'react';

class Button extends Component {


  render() {
    return (
    <div>
      <button onClick={this.props.onClick}>
        <span>Next Challenge</span>
      </button>
      <span>{this.props.totalClicks}</span>
    </div>
    );
  }
}

export default Button;
