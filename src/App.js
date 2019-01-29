import React, { Component } from 'react';
import data from './data/data.json';
import Header from './components/header'
import Footer from './components/footer'
import Card from './components/card'
import './stylesheets/App.css';

const eras = data.eras;
const genres = data.genres;
const challenges = data.challenges;
let lastGenreSelected = 0;
let lastChallengeSelected = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // era: 'Made',
      genre: 'Can you beat',
      challenge: 'The king of karaoke?',
      totalClicks: 0,
      complete: 0,
      startButton: 'Start'
    }
  }

  _handleClick = (e) => {

    const total = this.state.totalClicks;
    const completedChallenge = this.state.complete;
    let genreSelect = genres[Math.floor(Math.random() * genres.length)];
    let challengeSelect = challenges[Math.floor(Math.random() * challenges.length)];
    const eraSelect = eras[Math.floor(Math.random() * eras.length)];

    while(genreSelect === lastGenreSelected) {
      genreSelect = genres[Math.floor(Math.random() * genres.length)];
    }
    lastGenreSelected = genreSelect;

    while(challengeSelect === lastChallengeSelected) {
      challengeSelect = challenges[Math.floor(Math.random() * challenges.length)];
    }
    lastChallengeSelected = challengeSelect;

    this.setState(
      { totalClicks: total + 1,
        era: eraSelect,
        genre: genreSelect,
        challenge: challengeSelect,
        startButton: 'Next Challenge'
      });

    if (total >= 1 ){
      this.setState({
        complete: completedChallenge + 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Card
          genre={this.state.genre}
          challenge={this.state.challenge} />
        <Footer
          onClick={() => this._handleClick()}
          startButton={this.state.startButton}
          totalClicks={this.state.complete} />
      </div>
    );
  }
}



export default App;
