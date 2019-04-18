const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

let playerScore = 0
let computerScore = 0

const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/${player}.svg`
  $('figure.computer img').src = `https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/${computer}.svg`

  // rules for how player wins
  if ((player === 'rock' && computer === 'scissors') || (player === 'scissors' && computer === 'paper') || (player === 'paper' && computer === 'rock')) {
    playerScore += 1
    $('.scores .player').textContent = playerScore
    if (playerScore === 3) {
      gameOver(true)
    }
  }

  // rules for how computer wins
  if ((computer === 'rock' && player === 'scissors') || (computer === 'scissors' && player === 'paper') || (computer === 'paper' && player === 'rock')) {
    computerScore += 1
    $('.scores .computer').textContent = computerScore
    if (computerScore === 3) {
      gameOver(false)
    }
  }

  // if player === computer it's a draw
  if (player === computer) {
    console.log('draw')
  }
  // HINT: Check for win, lose or draw, then call `gameOver()` eventually.
}

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

// HINT: Try calling `gameOver(true)` in the console.
const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won!'
  } else {
    $('.dialog h3').textContent = 'You lost!'
  }
  $('body').className = 'modal'
}

const resetGame = () => {
  // TODO: Probably need to do more to reset the game here...
  $('figure.player img').src = 'https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/unknown.svg'
  $('figure.computer img').src = 'https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/unknown.svg'
  $('body').className = ''
  playerScore = 0
  computerScore = 0
  $('.scores .computer').textContent = computerScore
  $('.scores .player').textContent = playerScore
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
