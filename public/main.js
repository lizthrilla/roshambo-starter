const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  console.log(player, computer)
  $('figure.player img').src = `https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/${player}.svg`
  $('figure.computer img').src = `https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/${computer}.svg`

  // rules for how player wins
  if ((player === 'rock' && computer === 'scissors') || (player === 'scissors' && computer === 'paper') || (player === 'paper' || computer === 'rock')) {
    console.log('player wins')
  }

  // rules for how player loses
  if ((computer === 'rock' && player === 'scissors') || (computer === 'scissors' && player === 'paper') || (computer === 'paper' && player === 'rock')) {
    console.log('player loses')
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
}

const main = () => {
  console.log('started')
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
