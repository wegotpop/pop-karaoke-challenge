import React, { Component }  from 'react';

class Card extends Component {

  render() {
    return (
      <div className="card">
        <div>
          <span>{this.props.era}</span><span>{this.props.genre}</span>
        </div>
        <div>
          <span>{this.props.challenge}</span>
        </div>
      </div>
    );
  }
}

export default Card;
