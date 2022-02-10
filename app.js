function computerPlay() {
  const computer = Math.floor(Math.random() * 3 + 1)
  if (computer === 1) {
    return "rock"
  } else if (computer === 2) {
    return "paper"
  } else {
    return "scissors"
  }
}

let computerScore = 0
let playerScore = 0

while ((computerScore < 5) && (playerScore < 5)) {
  const playerSelection = prompt('What is your poison?');
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    console.log('tie')
  }
  else if ((computerSelection === "scissors" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "scissors") || (computerSelection === "rock" && playerSelection === "paper")) {
    playerScore += 1;
    console.log('You win');
  }
  else {
    computerScore += 1
    console.log('You lose')
  }
  console.log('PC: ', computerScore)
  console.log('You: ', playerScore)
  if (computerScore === 5) {
    console.log('Humanity is lost')
  }
  if (playerScore === 5) {
    console.log('We survived another day')
  }
}