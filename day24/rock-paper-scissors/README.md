## Rock Paper Scissors Game with DOM Manipulation

This project is an enhanced version of the Rock Paper Scissors game that uses Document Object Model (DOM) manipulation to provide a dynamic and interactive user experience. The game features a visually appealing interface, real-time score updates, and persistent score storage using localStorage.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Code Structure](#code-structure)
- [Usage Instructions](#usage-instructions)
- [Key Learnings](#key-learnings)

## Overview

This project builds upon the classic Rock Paper Scissors game mechanics by integrating DOM manipulation for:

- **Dynamic Score Display:** Real-time score updates visible on the webpage.
- **Result Feedback:** Displays the result of each round along with the player's and computer's moves.
- **Persistent Score Tracking:** Utilizes localStorage to save the score across browser sessions.
- **Interactive Design:** Includes styled buttons with images for an intuitive and engaging interface.

## Features

**Interactive Gameplay:**

- Players select Rock, Paper, or Scissors by clicking buttons with corresponding images.
- The computer randomly selects its move.

**Dynamic Updates:**

- The result, player/computer moves, and scores are updated dynamically on the webpage using DOM manipulation.

**Score Tracking:**

- Tracks wins, losses, and ties.
- Scores are saved in localStorage and persist across sessions.

**Reset Functionality:**

- Allows players to reset the score and clear the game state.

**Visual Feedback:**

- Displays moves with emojis for a visually engaging experience.

## How It Works

**Game Mechanics**

- The player selects a move by clicking one of the buttons (Rock, Paper, or Scissors).
- The computer's move is randomly generated using the getComputerMove() function.
- The playGame() function compares the player’s move with the computer’s move:
  - Win: Player beats the computer.
  - Lose: Computer beats the player.
  - Tie: Both select the same move.
- The result is displayed on the webpage, and the scores are updated accordingly.
- Scores are stored in localStorage for persistence across sessions.

## Code Structure

**1. HTML (rock-paper-scissors.html)**

- Defines the structure of the game, including:
  - Buttons for selecting moves.
  - Containers for displaying the result, moves, and scores.

**2. CSS (rock-paper-scissors.css)**

- Styles the game interface for a clean, modern look.

**3. JavaScript (rock-paper-scissors.js)**

- Implements the game logic, DOM manipulation, and score tracking.

## Usage Instructions

**Setup:**

- Ensure the rock-paper-scissors.html, rock-paper-scissors.css, rock-paper-scissors.js, and images folder are in the same directory.
- Open rock-paper-scissors.html in a web browser.

**Play:**

- Click on a move button (Rock, Paper, or Scissors) to make your choice.
- The result, moves, and updated score will be displayed dynamically.

**Reset:**

- Click the Reset Score button to clear the scores and reset the game.

## Key Learnings

- **DOM Manipulation:** Using querySelector and .innerHTML to dynamically update webpage content.
- **Event Handling:** Attaching functions to button clicks using the onclick attribute.
- **LocalStorage:** Storing and retrieving persistent data to save game scores across sessions.
- **CSS Styling:** Designing an intuitive and visually appealing interface.

This project provides a hands-on experience with JavaScript DOM manipulation, helping beginners understand how to create interactive and dynamic web applications. It’s a fun and educational way to build on core web development skills!
