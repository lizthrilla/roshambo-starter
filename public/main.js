const $ = (s) => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

let playerEngagementScore = 0
let computerEngagementScore = 0

const playerEngagementText = $('.scores .player')
const computerEngagementText = $('.scores .computer')

let playerBoutScore = 0
let computerBoutScore = 0

const playerBoutText = $('.bout .player')
const computerBoutText = $('.bout .computer')

const resetEngagement = () => {
  // reset player score
  playerEngagementScore = 0
  playerEngagementText.textContent = playerEngagementScore
  // reset computer score
  computerEngagementScore = 0
  computerEngagementText.textContent = computerEngagementScore
}

const updateBoutScores = (player) => {
  if (player) {
    playerBoutText.textContent = playerBoutScore += 1
  } else {
    computerBoutText.textContent = computerBoutScore += 1
  }
  resetEngagement()
}

const updateScores = (playerOrComputer) => {
  if (playerOrComputer === 'player') {
    playerEngagementText.textContent = playerEngagementScore += 1
    $('figure.player').className = 'player win'
    $('figure.computer').className = 'computer lose'
    // check if player has 2 engagements
    if (playerEngagementScore === 2) {
      // update player bout score
      updateBoutScores(true)
      // reset engagement scores
      // check if player bout score === 2
      if (playerBoutScore === 2) {
        gameOver(true)
      }
    }
  } else if (playerOrComputer === 'computer') {
    // change computer engagement score
    computerEngagementText.textContent = computerEngagementScore += 1
    $('figure.player').className = 'player lose'
    $('figure.computer').className = 'computer win'
    // check if computer engagement === 2
    if (computerEngagementScore === 2) {
      // change computer bout score
      updateBoutScores(false)
      // game over if computer bout === 2
      if (computerBoutScore === 2) {
        gameOver(false)
      }
    }
  }
}

// const updatePlayerEngagement = () => {
//   // change score
//   playerEngagementText.textContent = playerEngagementScore += 1
//   // check if player has 2 engagements
//   if (playerEngagementScore === 2) {
//     // update player bout score
//     updateBoutScores(true)
//     // reset engagement scores
//     // check if player bout score === 2
//     if (playerBoutScore === 2) {
//       gameOver(true)
//     }
//   }
// }

// const updateComputerEngagement = () => {
//   // change computer engagement score
//   computerEngagementText.textContent = computerEngagementScore += 1
//   // check if computer engagement === 2
//   if (computerEngagementScore === 2) {
//     // change computer bout score
//     updateBoutScores(false)
//     // game over if computer bout === 2
//     if (computerBoutScore === 2) {
//       gameOver(false)
//     }
//   }
// }

const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/${player}.svg`
  $('figure.computer img').src = `https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/${computer}.svg`

  if ((player === 'rock' && computer === 'scissors') || (player === 'scissors' && computer === 'paper') || (player === 'paper' && computer === 'rock')) {
    updateScores('player')
  } else if ((computer === 'rock' && player === 'scissors') || (computer === 'scissors' && player === 'paper') || (computer === 'paper' && player === 'rock')) {
    updateScores('computer')
  } else {
    $('figure.player').className = 'player draw'
    $('figure.computer').className = 'computer draw'
  }
}

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

const gameOver = (didPlayerWin) => {
  if (didPlayerWin) {
    $('.dialog h3').textContent = 'You won!'
  } else {
    $('.dialog h3').textContent = 'You lost!'
  }
  $('body').className = 'modal'
}

const resetGame = () => {
  // TODO: Probably need to do more to reset the game here...
  resetEngagement()
  playerBoutScore = 0
  computerBoutScore = 0
  playerBoutText.textContent = playerBoutScore
  computerBoutText.textContent = computerBoutScore
  $('figure.player img').src = 'https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/unknown.svg'
  $('figure.computer img').src = 'https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/unknown.svg'
  $('body').className = ''
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }

  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
