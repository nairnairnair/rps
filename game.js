class Game {
  constructor(){
    this.playerScore = 0;
    this.oppScore = 0;
    this.harold = new Player();
    this.opponent = new Player();
    this.resultsText = "";
  }

  playGameTrainingMode() {
    if ((this.harold.rock) && (this.opponent.scissors) ||
        (this.harold.paper) && (this.opponent.rock) ||
        (this.harold.scissors) && (this.opponent.paper)) {
      this.playerScore++;
      this.resultsText = "YOU'RE GETTIN PAPERRR!!!"
    }
    else if ((this.harold.rock) && (this.opponent.paper) ||
        (this.harold.scissors) && (this.opponent.rock) ||
        (this.harold.paper) && (this.opponent.scissors)) {
      this.oppScore++;
      this.resultsText = "YOU GOT ROCKED!!!"
    }
    else {
      this.resultsText = "CUT! IT'S A DRAW!!!"
    }
    this.harold.resetScores();
    this.opponent.resetScores();
  }

  playGameTournamentMode() {
    if ((this.harold.attack) && (this.opponent.jumpAttack || this.opponent.lowAttack) ||
        (this.harold.highBlock || this.harold.lowBlock) && (this.opponent.attack) ||
        (this.harold.lowAttack) && (this.opponent.highBlock) ||
        (this.harold.jumpAttack) && (this.opponent.lowBlock)) {
      this.playerScore++;
      this.resultsText = "YOU LANDED A HIT"
    }
    else if ((this.opponent.attack) && (this.harold.jumpAttack || this.harold.lowAttack) ||
        (this.opponent.highBlock || this.opponent.lowBlock) && (this.harold.attack) ||
        (this.opponent.lowAttack) && (this.harold.highBlock) ||
        (this.opponent.jumpAttack) && (this.harold.lowBlock)) {
      this.oppScore++;
      this.resultsText = "YOU GOT HIT"
    }
    else {
      this.resultsText = "THE TENSION IS GROWING"
    }
    this.harold.resetScores();
    this.opponent.resetScores();
  }
}
