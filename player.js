class Player {
  constructor() {
    this.wins = 0;
    this.rock = false;
    this.paper = false;
    this.scissors = false;

  }
  takeTurn(id){
    if (id === 'rockButton') {
      this.rock = true;
    }
    else if (id === 'paperButton')  {
      this.paper = true;
    }
    else if (id === 'scissorsButton')  {
      this.scissors = true;
    }
  }
  resetScores(){
    this.rock = false;
    this.paper = false;
    this.scissors = false;
  }
}
