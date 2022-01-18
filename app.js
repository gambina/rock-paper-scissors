function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie"
  }
  else if ((computerSelection === "scissors" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "scissors") || (computerSelection === "rock" && playerSelection === "paper")) {
    return "win"
  }
  else {
    return "lose"
  }
}

const playerSelection = prompt('What is your poison?');
const computerSelection = computerPlay();
alert(playRound(playerSelection, computerSelection));

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

