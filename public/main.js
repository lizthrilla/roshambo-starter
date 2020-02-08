const $ = (s) => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  console.log(player, computer)
  $('figure.player img').src = `https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/${player}.svg`
  $('figure.computer img').src = `https://tiy-tpa-fee.github.io/roshambo/starter-kit/images/${computer}.svg`

  // HINT: Check for win, lose or draw, then call `gameOver()` eventually.
  // playerDidWin === true
  // if player === rock && computer === scissors
  // if player === scissors && computer === paper
  // if player === paper && computer === rock
  if ((player === 'rock' && computer === 'scissors') || (player === 'scissors' && computer === 'paper') || (player === 'paper' && computer === 'rock')) {
    gameOver(true)
  } else if ((computer === 'rock' && player === 'scissors') || (computer === 'scissors' && player === 'paper') || (computer === 'paper' && player === 'rock')) {
    gameOver(false)
  } else {
    console.log("it's a tie!")
  }
}

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  // const randomNumber = Math.random() * moves.length
  // const randomIndex = Math.floor(randomNumber)
  // console.log(moves[randomIndex])
  // return moves[randomIndex]
  return moves[Math.floor(Math.random() * moves.length)]
}

// HINT: Try calling `gameOver(true)` in the console.
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
