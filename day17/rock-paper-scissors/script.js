function getComputerChoice() {
  let computer = Math.random();
  if (computer <= 0.33) {
    return "rock";
  } else if (computer <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

let human = prompt("Enter your option");
function getHumanChoice() {
  let humanValue = human.toLowerCase();
  return humanValue;
}

function playRound() {
  if (humanSelection === computerSelection) {
    return "It's a draw";
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper";
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors";
  } else {
    return "Invalid input.";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Computer choice:", computerSelection);
console.log("Human choice:", humanSelection);
console.log(playRound());
