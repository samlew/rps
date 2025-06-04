const gameOptions = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let gameChoice = gameOptions[Math.floor(Math.random() * 3)];
  return gameChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper, or scissors?");
  return humanChoice;
}
// testing adding to human score
// function addHumanScore() {
//   humanScore += 99;
//   return humanScore;
// }

// console.log(addHumanScore()); -- testing the add functionality
console.log(getComputerChoice());
console.log(getHumanChoice());