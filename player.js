// var Game = require('./game.js');

class Player {
  constructor() {
    this.name = 'Herald Harold';
    // this.facePic = ;
    this.wins = 0;
    this.rock = false;
    this.paper = false;
    this.scissors = false;
    // this.atk = input || false;
    // this.jumpA = input || false;
    // this.lowA = input || false;
    // this.highB = input || false;
    // this.lowB = input || false;
  }
  takeTurn(event){
    if (event.target === rockButton) {
      this.rock = true;
      console.log(this.rock)
    }
    else if (event.target === paperButton)  {
      this.paper = true;
    }
    else if (event.target === scissorsButton)  {
      this.scissors = true;
    }
  }
}

var emma = new Player

emma.takeTurn()

module.exports = Player

// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// takeTurn
