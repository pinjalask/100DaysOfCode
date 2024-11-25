# Coin Flip Game

This project is a simple Coin Flip Game implemented using HTML and JavaScript. The game allows the user to guess the outcome of a coin flip (either "Heads" or "Tails") and displays the result in the browser's developer console.

## Overview

**The Coin Flip Game simulates a coin toss:**

- The user selects Heads or Tails by clicking a button.
- A random number determines the outcome of the coin flip.
- The user's guess is compared with the result, and a message is displayed in the console indicating whether the user has won or lost.

**Features:**

- **Randomized Coin Toss:** The game uses JavaScript's Math.random() method to simulate a random coin flip.
- **Player Interaction:** Buttons allow the player to choose either Heads or Tails.
- **Immediate Feedback:** The result of the game is logged in the console.
- **Simple Design:** The game is lightweight and easy to use.

## How It Works

**Random Coin Flip:**

- A random number is generated using Math.random().
- If the number is less than 0.5, the result is Heads; otherwise, it is Tails.

**User Guess:**

- The user selects either Heads or Tails by clicking a button.
- The guess is compared to the randomly generated result.

**Game Outcome:**

- If the user's guess matches the result, they win. Otherwise, they lose.
- The outcome is logged in the console along with the computer's choice.

## Usage Instructions

- Copy the HTML code into an .html file and open it in a web browser.
- Click the Heads or Tails button to make your guess.
- Open the browser's developer console (Ctrl+Shift+I or Cmd+Option+I) to see the outcome of the coin flip.
- The log will show:

        Your choice.
        The computer's randomly generated result.
        Whether you won or lost.

        Example log for a Heads guess:
        Your choice is heads. Computer choice is tails. You lose!

This project provides a hands-on introduction to JavaScript basics, including randomization, conditionals, and event-driven programming. It serves as a foundation for creating more interactive and visually appealing games.
