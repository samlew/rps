const outcomes = {
  "ROCK": {
    "ROCK": "tie",
    "PAPER": "lose",
    "SCISSORS": "win",
  },
    "PAPER": {
    "ROCK": "win",
    "PAPER": "tie",
    "SCISSORS": "lose",
  },
    "SCISSORS": {
    "ROCK": "lose",
    "PAPER": "win",
    "SCISSORS": "tie",
  }
}

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const choices = Object.keys(outcomes);
  return choices[Math.floor(Math.random() * choices.length)]
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper, or scissors?").toUpperCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  const result = outcomes[humanChoice][computerChoice]
  return result;
}
function addScore(result) {
  if(result === "win") {
    humanScore++;
  }
  else if(result == "lose") {
    computerScore++;
  }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
const result = playRound(humanChoice, computerChoice);
console.log(result);
addScore(result);
console.log(`You have ${humanScore} points. The computer has ${computerScore} points.`)
