# Rock Paper Scissors Game with Score Tracking

This is a Rock Paper Scissors game implemented using HTML and JavaScript. The game allows the user to play against a computer while keeping track of the wins, losses, and ties, which I've made it previously. Now I've improvised the game to keep the scores tracked and stored in the browser's localStorage, ensuring they persist even after refreshing or closing the browser.

## Features

**Game Mechanics:**

- Choose Rock, Paper, or Scissors to play against the computer.
- The result of each round is determined based on the traditional rules of the game:
  - Rock beats Scissors.
  - Scissors beats Paper.
  - Paper beats Rock.
  - Identical choices result in a tie.

**Score Tracking:**

- Tracks the number of wins, losses, and ties for the player.
- The score is saved in localStorage and persists across browser sessions.

**Reset Score:**

- Allows the player to reset the scores and clear the localStorage.

**Console Feedback:**

- Displays the game result, the computer’s move, and the updated scores in the browser's console.

## How It Works

**Game Logic**

- The player selects Rock, Paper, or Scissors by clicking the respective button.
- The playGame() function is triggered with the player's choice.
- The computer randomly selects its move using the getComputerMove() function.
- The player's choice is compared with the computer's choice to determine the result:
  - You win!, You lose, or Tie.
- The score is updated based on the result:
  - Wins, losses, and ties are stored in the score object.
- The updated score is saved to the browser's localStorage.

**Reset Functionality**

- Clicking the Reset Score button clears the scores and removes them from localStorage.

## How to Play

- **Choose a Move:** Click Rock, Paper, or Scissors to make your choice.
- **View Results:** Open the browser's console to see the result of the round and the updated scores.
- **Reset Scores:** Click the Reset Score button to clear all scores and start fresh.
