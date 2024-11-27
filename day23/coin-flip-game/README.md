# Coin Flip Game with Score Tracking

This is a simple Coin Flip Game implemented using HTML and JavaScript, where users can flip a virtual coin by choosing either Heads or Tails which was previously made, Now the game also keeps track of the player's wins and losses across sessions using the localStorage feature.

## Features

**User Interaction:**

- The player can choose between Heads or Tails by clicking the respective button.
- A Reset button clears the score history and resets the game.

**Randomized Results:**

- The computer generates a random coin flip result (heads or tails).

**Score Tracking:**

- The game tracks wins and losses and saves the data in the browser's localStorage, ensuring scores persist even after refreshing or closing the page.

**Console Feedback:**

- The result of each round and the updated score are displayed in the browser's console.

## How It Works

**Game Logic**

- When the player clicks Heads or Tails, the playGame() function is triggered.
- The function generates a random coin flip result using Math.random():
  - A number less than 0.5 results in heads.
  - A number greater than or equal to 0.5 results in tails.
- The player's guess is compared with the random result:
  - If they match, the player wins, and their win count increases.
  - If they don't match, the player loses, and their loss count increases.
- The score is updated and saved to localStorage.

**Reset Functionality**

- Clicking the Reset button clears the scores (both wins and losses) and saves the reset score in localStorage.

## How to Play

- Start the Game:
  - Open the game in your browser.
  - Click Heads or Tails to make your guess.
- Check the Console:
  - View the round result (You win! or You lose!) in the browser's console.
  - Check the updated score in the console.
- Reset the Game:
  - Click the Reset button to clear the score history.
