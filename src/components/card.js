import React, { Component }  from 'react';

class Card extends Component {

  render() {
    return (
      <div className="card-wrapper">
        <div id="card-top-box">
          <span className="era">{this.props.era}</span> <span className="genre">{this.props.genre}</span>
        </div>
        <div id="card-bottom-box">
          <span className="challenge"> {this.props.challenge}</span>
        </div>
      </div>
    );
  }
}

export default Card;
