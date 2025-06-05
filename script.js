const gameOptions = ["rock", "paper", "scissors"];
const beatOptions = beatOptions = ["paper", "scissors", "rock"];

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let gameChoice = gameOptions[Math.floor(Math.random() * 3)].toUpperCase();
  return gameChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper, or scissors?").toUpperCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
    console.log(`Both players chose ${humanChoice}. It's a tie.`);
  }
  else if(humanChoice)

}
// testing adding to human score
// function addHumanScore() {
//   humanScore += 99;
//   return humanScore;
// }

// console.log(addHumanScore()); -- testing the add functionality
console.log(getComputerChoice());
console.log(getHumanChoice());