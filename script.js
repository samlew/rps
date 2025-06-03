const gameOptions = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return gameOptions[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());