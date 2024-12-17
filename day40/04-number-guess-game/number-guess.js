let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submitButton = document.querySelector("#submitBtn");
const pastGuesses = document.querySelector(".prevGuesses");
const remainGuess = document.querySelector(".remainGuess");
const highOrLow = document.querySelector(".highOrLow");
const resultParas = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuesses = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuesses.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed is right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Your guess us TOO LOW");
  } else if (guess > randomNumber) {
    displayMessage("Your guess us TOO HIGH");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  pastGuesses.innerHTML += `${guess} `;
  numGuess++;
  if (remainGuess.innerHTML <= 0) {
    remainGuess.innerHTML = "Game over";
    endGame();
  } else {
    remainGuess.innerHTML = 11 - numGuess;
  }
}

function displayMessage(message) {
  highOrLow.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start new game</h2>`;
  resultParas.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.value = "";
    prevGuesses = [];
    numGuess = 1;
    pastGuesses.innerHTML = "";
    remainGuess.innerHTML = 11 - numGuess;
    userInput.removeAttribute("disabled");
    resultParas.removeChild(p);

    playGame = true;
  });
}
