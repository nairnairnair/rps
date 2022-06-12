var currentGame = new Game()
//training move buttons
// var scribeButton = document.getElementById('scribeButton')
var rockButton = document.getElementById('rockButton')
var paperButton = document.getElementById('paperButton')
var scissorsButton = document.getElementById('scissorsButton')

var results = document.querySelector('.results')
var playerScore = document.querySelector('.player-score')
var oppScore = document.querySelector('.opp-score')

//training move buttons
// scribeButton.addEventListener('click', function() {
//   }
// )

rockButton.addEventListener('click', playGame)
paperButton.addEventListener('click', playGame)
scissorsButton.addEventListener('click', playGame)

function playGame(){
  currentGame.emma.takeTurn(event.target.id);
  currentGame.opponent.takeTurn(getRandomTrainingMode())
  currentGame.playGameTrainingMode()
  displayGameResults()
}

function getRandomTrainingMode(){
  var choiceIDs = ['rockButton', 'paperButton', 'scissorsButton'];
  return choiceIDs[Math.floor(Math.random() * choiceIDs.length)]
}

function displayGameResults(){
  results.innerText = currentGame.resultsText;
  playerScore.innerText = currentGame.playerScore;
  oppScore.innerText = currentGame.oppScore;
}
// player must click the train with the scribe button
// player must click rock/paper/scissors

//we can make choiceIDs the parameter to make it dynamic
