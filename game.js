class Game {
  constructor(){
    this.playerScore = 0;
    this.oppScore = 0;
    this.emma = new Player();
    this.opponent = new Player();
    this.resultsText = "";
  }

  playGameTrainingMode() {
    if ((this.emma.rock) && (this.opponent.scissors) ||
        (this.emma.paper) && (this.opponent.rock) ||
        (this.emma.scissors) && (this.opponent.paper)) {
      this.playerScore++;
      this.resultsText = "win"
    }
    else if ((this.emma.rock) && (this.opponent.paper) ||
        (this.emma.scissors) && (this.opponent.rock) ||
        (this.emma.paper) && (this.opponent.scissors)) {
      this.oppScore++;
      this.resultsText = "lose"
    }
    else {
      this.resultsText = "draw"
    }
    this.emma.resetScores();
    this.opponent.resetScores();
  }
}
