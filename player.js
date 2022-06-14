class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.rock = false;
    this.paper = false;
    this.scissors = false;
    this.attack = false;
    this.jumpAttack = false;
    this.lowAttack = false;
    this.highBlock = false;
    this.lowBlock = false;

  }
  takeTurnTraining(id){
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

  takeTurnTournament(id){
    if (id === 'atkButton') {
      this.attack = true;
    }
    else if (id === 'jumpAtkButton')  {
      this.jumpAttack = true;
    }
    else if (id === 'lowAtkButton')  {
      this.lowAttack = true;
    }
    else if (id === 'highBlockButton')  {
      this.highBlock = true;
    }
    else if (id === 'lowBlockButton')  {
      this.lowBlock = true;
    }
  }

  resetScores(){
    this.rock = false;
    this.paper = false;
    this.scissors = false;
    this.attack = false;
    this.jumpAttack = false;
    this.lowAttack = false;
    this.highBlock = false;
    this.lowBlock = false;
  }
}
