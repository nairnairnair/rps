// var Player = require('./player.js');

class Game {
  constructor(){
    this.playerScore = 0;
    this.oppScore = 0;
    // this.gameType = ' ';
    // this.resultsText = ' ';
    var emma = new Player();
    var opponent = new Player();
  }

  trainingRPS() {
    if ((playerMove === 'rock') && (oppMove === 'scissors') ||
        (playerMove === 'scissors') && (oppMove === 'paper') ||
        (playerMove === 'paper') && (oppMove === 'rock')) {
      this.playerScore++;
      this.resultsText = "GOTTEM";
    }
    else if ((oppMove === 'rock') && (playerMove === 'scissors') ||
            (oppMove === 'scissors') && (playerMove === 'paper') ||
            (oppMove === 'paper') && (playerMove === 'rock')) {
      this.oppScore++;
      this.resultsText = "YOU GOT ROCKED";
    }
    else {
      this.resultsText = "A DRAW. WOW...";
    }
  }

  tournamentRPS() {
    if ((playerMove === 'atk') && (oppMove === 'lowA' || 'lowB') ||
        (playerMove === 'highB' || 'lowB') && (oppMove == 'atk') ||
        (playerMove === 'lowA') && (oppMove === 'highB') ||
        (playerMove === 'jumpA') && (oppMove === 'lowB')) {
      this.playerScore++;
      resultsText.innerText = "GOTTEM";
    }
    else if ((oppMove === 'atk') && (playerMove === 'lowA' || 'lowB') ||
            (oppMove === 'highB' || 'lowB') && (playerMove == 'atk') ||
            (oppMove === 'lowA') && (playerMove === 'highB') ||
            (oppMove === 'jumpA') && (playerMove === 'lowB'))  {
      this.oppScore++;
      resultsText.innerText = "YOU GOT ROCKED";
    }
    else {
      resultsText.innerText = "A DRAW. WOW...";
    }
  }
}

// module.exports = Game
//
// A Game should include:
// // Two Player instances
// // A way to keep track of the data for the game board
// // A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
