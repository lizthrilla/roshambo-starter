const $ = (s) => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

let playerEngagementScore = 0
let computerEngagementScore = 0

let playerTextScore = $('.scores .player')

let playerBoutScore = 0
let computerBoutScore = 0

const updatePlayerScore = () => {
  playerEngagementScore += 1
  $('.scores .player').textContent = playerEngagementScore
  if (playerEngagementScore === 2) {
    playerBoutScore += 1
    $('.bout .player').textContent = playerBoutScore
    playerEngagementScore = 0
    $('.scores .player').textContent = playerEngagementScore
    computerEngagementScore = 0
    $('.scores .computer').textContent = computerEngagementScore

    if (playerBoutScore === 2) {
      gameOver(true)
    }
  }
}

const updateComputerScore = () => {
  computerEngagementScore += 1
  $('.scores .computer').textContent = computerEngagementScore
  if (computerEngagementScore === 2) {
    computerBoutScore += 1
    $('.bout .computer').textContent = computerBoutScore
    playerEngagementScore = 0
    $('.scores .player').textContent = playerEngagementScore
    computerEngagementScore = 0
    $('.scores .computer').textContent = computerEngagementScore

    if (computerBoutScore === 2) {
      gameOver(false)
    }
  }
}

const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/${player}.svg`
  $('figure.computer img').src = `https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/${computer}.svg`

  if ((player === 'rock' && computer === 'scissors') || (player === 'scissors' && computer === 'paper') || (player === 'paper' && computer === 'rock')) {
    updatePlayerScore()
  } else if ((computer === 'rock' && player === 'scissors') || (computer === 'scissors' && player === 'paper') || (computer === 'paper' && player === 'rock')) {
    updateComputerScore()
  } else {
    console.log("it's a tie!")
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
  playerEngagementScore = 0
  computerEngagementScore = 0
  playerBoutScore = 0
  computerBoutScore = 0
  $('.scores .computer').textContent = computerEngagementScore
  $('.scores .player').textContent = playerEngagementScore
  $('.bout .player').textContent = playerBoutScore
  $('.bout .computer').textContent = computerBoutScore
  $('figure.player img').src = 'https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/unknown.svg'
  $('figure.computer img').src = 'https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/unknown.svg'
  $('body').className = ''
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  playerTextScore.textContent = playerEngagementScore

  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
