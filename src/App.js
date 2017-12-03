import React, { Component } from 'react';
import data from './data/data.json';
import logo from './karaoke.svg';
import Header from './components/header'
import Button from './components/button'
import Card from './components/card'
import './stylesheets/App.css';

const eras = data.eras
const genres = data.genres
const challenges = data.challenges

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      era: '',
      genre: '',
      challlenge: '',
      totalClicks: 0
    }
  }
  _handleClick = (e) => {

    const total = this.state.totalClicks
    const genreSelect = genres[Math.floor(Math.random() * genres.length)];
    const challengeSelect = challenges[Math.floor(Math.random() * challenges.length)];
    const eraSelect = eras[Math.floor(Math.random() * eras.length)];

    this.setState(
      { totalClicks: total + 1,
        era: eraSelect,
        genre: genreSelect,
        challenge: challengeSelect,
      });
  }

  render() {
    return (
      <div className="Box">
        <Header />
        <Card
          era={this.state.era}
          genre={this.state.genre}
          challenge={this.state.challenge} />
        <Button
          onClick={() => this._handleClick()}
          totalClicks={this.state.totalClicks} />
      </div>
    );
  }
}



export default App;
