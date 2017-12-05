import React, { Component } from 'react';
import data from './data/data.json';
import Header from './components/header'
import Footer from './components/footer'
import Card from './components/card'
import './stylesheets/App.css';

const eras = data.eras
const genres = data.genres
const challenges = data.challenges

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // era: 'Made',
      genre: 'Made with love by',
      challenge: 'Emilie & Olly',
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
      <div className="App">
        <Header />
        <Card
          // era={this.state.era}
          genre={this.state.genre}
          challenge={this.state.challenge} />
        <Footer
          onClick={() => this._handleClick()}
          totalClicks={this.state.totalClicks} />
      </div>
    );
  }
}



export default App;
