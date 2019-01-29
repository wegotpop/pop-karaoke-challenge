import React, { Component }  from 'react';
import face from '../face.png';
class Card extends Component {

  render() {
    return (
      <div className="card-wrapper">
        <div id="card-top-box">
          {/* <span className="era">{this.props.era}</span>  */}
          <span className="genre">{this.props.genre}</span>
        </div>
        <div className="hr">
          <img src={face} className="card__face" alt="face" />
          <hr className="hr-line"></hr>
        </div>
        <div id="card-bottom-box">
          <span className="challenge"> {this.props.challenge}</span>
        </div>
      </div>
    );
  }
}

export default Card;
