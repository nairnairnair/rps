var currentGame = new Game()
//training move buttons
var scribeViewButton = document.getElementById('scribeViewButton')
var tournamentViewButton = document.getElementById('tournamentViewButton')
var homeViewButton = document.getElementById('homeViewButton')

var trainingButtons = document.querySelectorAll('.training-button')
var tournamentButtons = document.querySelectorAll('.tournament-button')
var oppButtons = document.querySelectorAll('.opp-button')

var rockButton = document.getElementById('rockButton')
var paperButton = document.getElementById('paperButton')
var scissorsButton = document.getElementById('scissorsButton')

var mixButton = document.getElementById('mixButton')
var campButton = document.getElementById('campButton')
var gertButton = document.getElementById('gertButton')
var prinButton = document.getElementById('prinButton')

var atkButton = document.getElementById('atkButton')
var jumpAtkButton = document.getElementById('jumpAtkButton')
var lowAtkButton = document.getElementById('lowAtkButton')
var highBlockButton = document.getElementById('highBlockButton')
var lowBlockButton = document.getElementById('lowBlockButton')

var playerMoveImage = document.querySelector('.player-move-image')
var oppMoveImage = document.querySelector('.opp-move-image')

var results = document.querySelector('.results')
var playerName = document.querySelector('.player-name')
var oppName = document.querySelector('.opp-name')
var playerPortrait = document.querySelector('.player-portrait')
var oppPortrait = document.querySelector('.opp-portrait')
var playerScore = document.querySelector('.player-score')
var oppScore = document.querySelector('.opp-score')

var playerHpBar = document.getElementById('playerHpBar')
var oppHpBar = document.getElementById('oppHpBar')

var tournamentChoiceIDs = ['atkButton', 'jumpAtkButton', 'lowAtkButton', 'highBlockButton', 'lowBlockButton']

//training move buttons

scribeViewButton.addEventListener('click', displayTrainingView)
tournamentViewButton.addEventListener('click', displayTournamentView)
homeViewButton.addEventListener('click', displayHomeView)

rockButton.addEventListener('click', playGameTraining)
paperButton.addEventListener('click', playGameTraining)
scissorsButton.addEventListener('click', playGameTraining)

mixButton.addEventListener('click', selectMix)
campButton.addEventListener('click', selectCamp)
gertButton.addEventListener('click', selectGert)
prinButton.addEventListener('click', selectPrin)

atkButton.addEventListener('click', playGameTournament)
jumpAtkButton.addEventListener('click', playGameTournament)
lowAtkButton.addEventListener('click', playGameTournament)
highBlockButton.addEventListener('click', playGameTournament)
lowBlockButton.addEventListener('click', playGameTournament)

function displayTrainingView() {
  displayGameView();
  results.innerText = 'On shoot...'
  for (var i = 0; i < trainingButtons.length; i++) {
    trainingButtons[i].classList.remove('hidden');
  }
}

function displayTournamentView() {
  displayGameView();
  haroldHpBar()
  hpBar()
  results.innerText = 'It begins...'
  for (var i = 0; i < oppButtons.length; i++) {
    oppButtons[i].classList.remove('hidden');
  }
}

function displayHomeView() {
document.location.reload();
}

function displayGameView(){
  playerMoveImage.classList.remove('hidden');
  oppMoveImage.classList.remove('hidden');
  playerName.classList.remove('hidden');
  oppName.classList.remove('hidden');
  playerPortrait.classList.remove('hidden');
  oppPortrait.classList.remove('hidden');
  playerScore.classList.remove('hidden');
  oppScore.classList.remove('hidden');
  scribeViewButton.classList.add('hidden');
  tournamentViewButton.classList.add('hidden');
  homeViewButton.classList.remove('hidden');
}

function selectMix(){
  oppName.innerText = 'Lord Mix-A-Lot';
  oppPortrait.src = 'resources/mix.jpeg';
  tournamentChoiceIDs = mixMovelist;
  displayMoveButtons()
}

function selectCamp(){
  oppName.innerText = 'Sir Happy Camperington';
  oppPortrait.src = 'resources/camp.jpeg';
  tournamentChoiceIDs = camperMovelist;
  displayMoveButtons()
}

function selectGert(){
  oppName.innerText = 'Gertrudius the Slayer';
  oppPortrait.src = 'resources/gert.jpeg';
  tournamentChoiceIDs = gertMovelist;
  displayMoveButtons()
}

function selectPrin(){
  oppName.innerText = 'Princess Holsup Sporke';
  oppPortrait.src = 'resources/sporke.jpeg';
  tournamentChoiceIDs = sporkeMovelist;
  displayMoveButtons()
}

function displayMoveButtons(){
  currentGame.playerScore = 0;
  currentGame.oppScore = 0;
  playerScore.innerText = `Rounds Won: 0`;
  playerHpBar.style.backgroundColor = '#1ac734'
  oppHpBar.style.backgroundColor = '#1ac734'
  oppScore.innerText = `Rounds Won: 0`;
  for (var i = 0; i < tournamentButtons.length; i++) {
    tournamentButtons[i].classList.remove('hidden');
  }
}

function playGameTraining(){
  currentGame.harold.takeTurnTraining(event.target.id);
  currentGame.opponent.takeTurnTraining(getRandomTrainingMode())
  imageAssignerTrainingPlayer(currentGame)
  imageAssignerTrainingOpponent(currentGame)
  currentGame.playGameTrainingMode()
  displayGameResults()
}

function playGameTournament(){
  currentGame.harold.takeTurnTournament(event.target.id);
  currentGame.opponent.takeTurnTournament(getRandomTournamentMode())
  imageAssignerTournamentPlayer(currentGame)
  imageAssignerTournamentOpponent(currentGame)
  currentGame.playGameTournamentMode()
  displayGameResults()
}

function getRandomTrainingMode(){
  var trainingChoiceIDs = ['rockButton', 'paperButton', 'scissorsButton'];
  return trainingChoiceIDs[Math.floor(Math.random() * trainingChoiceIDs.length)]
}

function getRandomTournamentMode(){
  return tournamentChoiceIDs[Math.floor(Math.random() * tournamentChoiceIDs.length)]
}

function imageAssignerTrainingPlayer(currentGame) {
  if (currentGame.harold.rock) {
  playerMoveImage.src = './resources/rockPlayer.jpeg';
  }
  else if (currentGame.harold.paper) {
  playerMoveImage.src = './resources/paperPlayer.jpeg';
  }
  else if (currentGame.harold.scissors) {
  playerMoveImage.src = './resources/scissorsPlayer.jpeg';
  }
}

function imageAssignerTrainingOpponent(currentGame) {
  if (currentGame.opponent.rock) {
    oppMoveImage.src = 'resources/rockOpp.jpeg';
  }
  else if (currentGame.opponent.paper) {
    oppMoveImage.src = 'resources/paperOpp.jpeg';
  }
  else if (currentGame.opponent.scissors) {
    oppMoveImage.src = 'resources/scissorsOpp.jpeg';
  }
}

function imageAssignerTournamentPlayer(currentGame) {
  if (currentGame.harold.attack) {
  playerMoveImage.src = './resources/attackPlayer.png';
  }
  else if (currentGame.harold.jumpAttack) {
  playerMoveImage.src = './resources/jumpAttackPlayer.png';
  }
  else if (currentGame.harold.lowAttack) {
  playerMoveImage.src = './resources/lowAttackPlayer.png';
  }
  else if (currentGame.harold.highBlock) {
  playerMoveImage.src = './resources/highBlockPlayer.png';
  }
  else if (currentGame.harold.lowBlock) {
  playerMoveImage.src = './resources/lowBlockPlayer.png';
  }
}

function imageAssignerTournamentOpponent(currentGame) {
  if (currentGame.opponent.attack) {
    oppMoveImage.src = 'resources/attackOpp.png';
  }
  else if (currentGame.opponent.jumpAttack) {
    oppMoveImage.src = 'resources/jumpAttackOpp.png';
  }
  else if (currentGame.opponent.lowAttack) {
    oppMoveImage.src = 'resources/lowAttackOpp.png';
  }
  else if (currentGame.opponent.highBlock) {
    oppMoveImage.src = 'resources/highBlockOpp.png';
  }
  else if (currentGame.opponent.lowBlock) {
    oppMoveImage.src = 'resources/lowBlockOpp.png';
  }
}

function haroldHpBar(){
    playerHpBar.style.backgroundColor = '#1ac734'
  if (currentGame.oppScore === 1){
    playerHpBar.style.backgroundColor = '#79c71a'
  } else if (currentGame.oppScore === 2){
    playerHpBar.style.backgroundColor = '#eff229'
  } else if (currentGame.oppScore === 3){
    playerHpBar.style.backgroundColor = '#f27929'
  } else if (currentGame.oppScore === 4){
    playerHpBar.style.backgroundColor = '#e30e0e'
  } else if (currentGame.oppScore >= 5){
    playerHpBar.style.backgroundColor = '#000000'
  }
}

function hpBar(){
    oppHpBar.style.backgroundColor = '#1ac734'
  if (currentGame.playerScore === 1){
    oppHpBar.style.backgroundColor = '#79c71a'
  } else if (currentGame.playerScore === 2){
    oppHpBar.style.backgroundColor = '#eff229'
  } else if (currentGame.playerScore === 3){
    oppHpBar.style.backgroundColor = '#f27929'
  } else if (currentGame.playerScore === 4){
    oppHpBar.style.backgroundColor = '#e30e0e'
  } else if (currentGame.playerScore >= 5){
    oppHpBar.style.backgroundColor = '#000000'
  }
}

function displayGameResults(){
  results.innerText = currentGame.resultsText;
  playerScore.innerText = `Rounds Won: ${currentGame.playerScore}`;
  oppScore.innerText = `Rounds Won: ${currentGame.oppScore}`;
}

// player must click the train with the scribe button
// player must click rock/paper/scissors

//we can make choiceIDs the parameter to make it dynamic

//questions for olivia:
//would they prefer we hid things by adding a 'hidden' class and toggling it on or off? or some other form of dom manipulation?
//
