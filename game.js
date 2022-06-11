var Player = require('./player.js');

class Game {
  constructor(){

  }

  trainingRPS() {
    if ((playerMove === 'rock') && (oppMove === 'scissors') ||
        (playerMove === 'scissors') && (oppMove === 'paper') ||
        (playerMove === 'paper') && (oppMove === 'rock')) {
      playerScore++;
      resultsText.innerText = "GOTTEM";
    }
    else if ((oppMove === 'rock') && (playerMove === 'scissors') ||
            (oppMove === 'scissors') && (playerMove === 'paper') ||
            (oppMove === 'paper') && (playerMove === 'rock')) {
      oppScore++;
      resultsText.innerText = "YOU GOT ROCKED";
    }
    else {
      resultsText.innerText = "A DRAW. WOW...";
    }
  }

  tournamentRPS() {
    if ((playerMove === 'atk') && (oppMove === 'lowA' || 'lowB') ||
        (playerMove === 'highB' || 'lowB') && (oppMove == 'atk') ||
        (playerMove === 'lowA') && (oppMove === 'highB') ||
        (playerMove === 'jumpA') && (oppMove === 'lowB')) {
      playerScore++;
      resultsText.innerText = "GOTTEM";
    }
    else if ((oppMove === 'atk') && (playerMove === 'lowA' || 'lowB') ||
            (oppMove === 'highB' || 'lowB') && (playerMove == 'atk') ||
            (oppMove === 'lowA') && (playerMove === 'highB') ||
            (oppMove === 'jumpA') && (playerMove === 'lowB'))  {
      oppScore++;
      resultsText.innerText = "YOU GOT ROCKED";
    }
    else {
      resultsText.innerText = "A DRAW. WOW...";
    }
  }
}

module.exports = Game
