var currentGame = new Game()
//training move buttons
// var scribeButton = document.getElementById('scribeButton')
var rockButton = document.getElementById('rockButton')
var paperButton = document.getElementById('paperButton')
var scissorsButton = document.getElementById('scissorsButton')

var atkButton = document.getElementById('atkButton')
var jumpAtkButton = document.getElementById('jumpAtkButton')
var lowAtkButton = document.getElementById('lowAtkButton')
var highBlockButton = document.getElementById('highBlockButton')
var lowBlockButton = document.getElementById('lowBlockButton')

var results = document.querySelector('.results')
var playerScore = document.querySelector('.player-score')
var oppScore = document.querySelector('.opp-score')

//training move buttons
// scribeButton.addEventListener('click', function()

rockButton.addEventListener('click', playGameTraining)
paperButton.addEventListener('click', playGameTraining)
scissorsButton.addEventListener('click', playGameTraining)

atkButton.addEventListener('click', playGameTournament)
jumpAtkButton.addEventListener('click', playGameTournament)
lowAtkButton.addEventListener('click', playGameTournament)
highBlockButton.addEventListener('click', playGameTournament)
lowBlockButton.addEventListener('click', playGameTournament)

function playGameTraining(){
  currentGame.harold.takeTurnTraining(event.target.id);
  currentGame.opponent.takeTurnTraining(getRandomTrainingMode())
  currentGame.playGameTrainingMode()
  displayGameResults()
}

function playGameTournament(){
  currentGame.harold.takeTurnTournament(event.target.id);
  currentGame.opponent.takeTurnTournament(getRandomTournamentMode())
  currentGame.playGameTournamentMode()
  displayGameResults()
}

function getRandomTrainingMode(){
  var trainingChoiceIDs = ['rockButton', 'paperButton', 'scissorsButton'];
  return trainingChoiceIDs[Math.floor(Math.random() * trainingChoiceIDs.length)]
}

function getRandomTournamentMode(){
  var tournamentChoiceIDs = ['atkButton', 'jumpAtkButton', 'lowAtkButton', 'highBlockButton', 'lowBlockButton'];
  return tournamentChoiceIDs[Math.floor(Math.random() * tournamentChoiceIDs.length)]
}

function displayGameResults(){
  results.innerText = currentGame.resultsText;
  playerScore.innerText = `Rounds Won: ${currentGame.playerScore}`;
  oppScore.innerText = `Rounds Won: ${currentGame.oppScore}`;
}
// player must click the train with the scribe button
// player must click rock/paper/scissors

//we can make choiceIDs the parameter to make it dynamic
