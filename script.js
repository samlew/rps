const gameOptions = ["rock", "paper", "scissors"];


function getComputerChoice() {
  let gameChoice = gameOptions[Math.floor(Math.random() * 3)];
  return gameChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper, or scissors?");
  return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());