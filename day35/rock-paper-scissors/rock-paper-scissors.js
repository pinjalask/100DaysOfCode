let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

// if (!score) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0,
//   };
// }

let isAutoPlay = false;
let intervalId;

// const autoPlay = () => {};

function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      const playerMove = getComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlay = true;
    document.querySelector(".auto-play-button").innerHTML = "Stop play";
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
    document.querySelector(".auto-play-button").innerHTML = "Auto play";
  }
}

document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("paper");
});

document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("scissors");
});

document
  .querySelector(".js-reset-score-button")
  .addEventListener("click", () => {
    showResetConfirmation();
  });

document.querySelector(".js-auto-play-button").addEventListener("click", () => {
  autoPlay();
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  } else if (event.key === "a") {
    autoPlay();
  } else if (event.key === "Backspace") {
    showResetConfirmation();
  }
});

function playGame(playerMove) {
  computerMove = getComputerMove();
  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      result = "Tie.";
    } else if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win!";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    } else if (computerMove === "rock") {
      result = "You win!";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win!";
    }
  }

  if (result === "You win!") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="./images/${playerMove}-emoji.png" class="move-icon" />
      <img src="./images/${computerMove}-emoji.png" class="move-icon" />Computer`;

  // console.log(
  //   `You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  // );
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function getComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
  document.querySelector(".js-moves").innerHTML = "";
  document.querySelector(".js-result").innerHTML = "";
}

function showResetConfirmation() {
  document.querySelector(
    ".js-reset-confirmation"
  ).innerHTML = `Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">
        Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>`;
  document
    .querySelector(".js-reset-confirm-yes")
    .addEventListener("click", () => {
      resetScore();
      hideResetConfirmation();
    });

  document
    .querySelector(".js-reset-confirm-no")
    .addEventListener("click", () => {
      hideResetConfirmation();
    });
}

function hideResetConfirmation() {
  document.querySelector(".js-reset-confirmation").innerHTML = "";
}
