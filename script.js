// Set up combination outcomes.
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

// Reset computer and human player scores to 0.
let computerScore = 0;
let humanScore = 0;

// Grab choice from the computer player.
function getComputerChoice() {
  const choices = Object.keys(outcomes);
  return choices[Math.floor(Math.random() * choices.length)]
}

// Grab choice from the human player.
function getHumanChoice() {
  let humanChoice = prompt("Rock, paper, or scissors?").toUpperCase();
  return humanChoice;
}

// Update scores for players
function updateScore(result) {
  if(result === "win") {
    humanScore++;
  }
  else if(result == "lose") {
    computerScore++;
  }
}

// Compare choices and return outcome of a round.
function playRound(humanChoice, computerChoice) {
  const roundResult = outcomes[humanChoice][computerChoice]
  console.log(`You ${roundResult}! ${humanChoice} ${roundResult}s against ${computerChoice}.`)
  return roundResult;
}

// Play a full game with 5 rounds.
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    roundResult = playRound(humanChoice, computerChoice);
    updateScore(roundResult);
    console.log(`Round ${i + 1} results: You have ${humanScore} points. The computer has ${computerScore} points.`);
  }
  
  if (humanScore > computerScore) {
    console.log("You win the game! Final score: " + `You had ${humanScore} points, and the computer had ${computerScore} points.`);
  } else if (computerScore > humanScore) {
    console.log("The computer wins the game! Final score: " + `You had ${humanScore} points, and the computer had ${computerScore} points.`);
  } else {
    console.log("It's a tie! Final score: " + `You had ${humanScore} points, and the computer had ${computerScore} points.`);
  }
}

playGame();