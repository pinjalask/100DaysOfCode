# Rock Paper Scissors Game

This is a simple Rock Paper Scissors game implemented using HTML and JavaScript. The program allows users to play against the computer by clicking one of three buttons: rock, paper, or scissors. The result of the game is displayed in the browser's console. This game is an updated version of the Rock Paper Scissors game, which happened on day 20. In this I have made it user-interactive by adding the buttons, but this doesn't show the winner based on the score yet; that needs to be done.

## Features

- Players can choose between Rock, Paper, or Scissors by clicking the corresponding button.
- The computer randomly selects its move using the getComputerMove() function.
- The game determines the result of each round (Win, Lose, or Tie) based on the standard Rock Paper Scissors rules.

## How It Works

****playGame(playerMove)****

This function is triggered when the player clicks a button. It determines the result of the round by comparing the player's move with the computer's move.

- **Input:** The player's move (rock, paper, or scissors).
- **Logic:**
  - Retrieves the computer's move using the getComputerMove() function.
  - Compares the player's move with the computer's move.
  - Determines the result (Win, Lose, or Tie) based on the rules:
    - Rock beats Scissors.
    - Scissors beat Paper.
    - Paper beats Rock.
  - Logs the moves and the result to the console.
- **Output:** A message indicating the result of the game.

****getComputerMove()****

This function generates a random move for the computer.

- **Logic:**
  - Uses Math.random() to generate a random number between 0 and 1.
  - Maps the random number to one of three moves: rock, paper, or scissors.
- **Output:** The computer's move.

## How to Play

- Open the game in a web browser.
- Choose your move by clicking one of the following buttons:
  - Rock
  - Paper
  - Scissors
- The computer will automatically select its move.
- The result of the game will be displayed in the browser's console.
