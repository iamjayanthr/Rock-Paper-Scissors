
const totalScore = { computerScore: 0, playerScore: 0 }

function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissors']
  let random = Math.floor(Math.random() * 3)
  return choice[random]

}

function getResultPlayer(playerChoice, computerChoice) {

  let pScore;
  if (playerChoice == computerChoice) {
    pScore = 0
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    pScore = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    pScore = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    pScore = 1
  } else { pScore = -1 }
  return pScore
}
function getResultComputer(playerChoice, computerChoice) {

  let cscore;
  if (playerChoice == computerChoice) {
    cscore = 0
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    cscore = -1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    cscore = -1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    cscore = -1
  } else { cscore = 1 }
  return cscore
}


function showResult(plyrscore,cmptrscore, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  if (plyrscore == -1) {
    resultDiv.innerText = 'You lose!'
  } else if (plyrscore == 0) {
    resultDiv.innerText = 'Its a tie!'
  } else {
    resultDiv.innerText = 'You won!'
  }
  handsDiv.innerText = `${playerChoice} V/S ${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScore.playerScore} || Computer Score: ${totalScore.computerScore}`
  
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const playerScore = getResultPlayer(playerChoice, computerChoice)
  const computerScore = getResultComputer(playerChoice, computerChoice)
  totalScore.playerScore += playerScore
  totalScore.computerScore += computerScore
  showResult(playerScore,computerScore, playerChoice, computerChoice)

}


function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach(button => {
    button.onclick = () => { onClickRPS(button.value) }
  })
  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)

}


function endGame(totalScore) {
  totalScore.playerScore = 0
  totalScore.compyterScore = 0
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  playerScoreDiv.innerText = ''
  handsDiv.innerText = ''
  resultDiv.innerText = ''

}

playGame()