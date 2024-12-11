# Rock Paper Scissors - Advanced JavaScript Implementation

This project is an advanced Rock Paper Scissors game created using HTML, CSS, and JavaScript. It incorporates modern JavaScript features like addEventListener, setTimeout, setInterval, arrow functions, and array methods (.map(), .filter(), .reduce()). The game includes an auto-play feature, reset confirmation, keyboard controls, and interactive buttons.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [File Structure](#file-structure)
- [How to Play](#how-to-play)
- [Advanced Concepts Used](#advanced-concepts-used)
- [Key Learnings](#key-learnings)

## Overview

This game is designed for beginner developers to explore advanced JavaScript concepts. It enhances the basic Rock Paper Scissors game by introducing interactive DOM manipulation, event handling, and asynchronous programming with timers.

## Features

- **Interactive Buttons:** Play moves (Rock, Paper, Scissors) using buttons or keyboard shortcuts.
- **Score Tracking:** Wins, losses, and ties are tracked and stored in localStorage.
- **Auto-Play Feature:** Automatically plays rounds at a set interval until stopped.
- **Reset Confirmation:** Confirms before resetting the scores.
- **Dynamic Result Display:** Updates results, moves, and score dynamically in the browser.
- **Keyboard Controls:** Use R, P, S for moves and A to toggle auto-play.
- **Responsive UI:** Clean and interactive design using CSS.

## File Structure

- **HTML** (rock-paper-scissors.html):

  - Structure of the game, including buttons, result display, and score sections.

- **CSS** (rock-paper-scissors.css):

  - Styling for buttons, result display, and responsiveness.

- **JavaScript** (rock-paper-scissors.js):
  - Game logic, event listeners, and advanced functionality.

## How to Play

- **Start the Game:**

  - Open the rock-paper-scissors.html file in a browser.

- **Make a Move:**

  - Click on the Rock, Paper, or Scissors buttons.
  - Alternatively, use keyboard shortcuts:
    - R for Rock
    - P for Paper
    - S for Scissors

- **Auto-Play:**

  - Click the Auto Play button to let the computer play automatically.
  - Click again to stop auto-play.

- **Reset Scores:**

  - Click Reset Score to clear the current scores (requires confirmation).

- **View Results:**
  - See your move, the computer's move, and the result on the screen.
  - The updated score is displayed below the results.

## Advanced Concepts Used

- **addEventListener:** Used for interactive buttons and keyboard controls.
- **setTimeout & setInterval:** Managed delays and auto-play functionality.
- **Arrow Functions:** Used for concise function expressions.
- **localStorage:** Scores are stored and retrieved persistently.
- **Keyboard Event Handling:** Added keyboard shortcuts for game play.
- **Dynamic DOM Manipulation:** Updated the UI dynamically based on game state.

## Key Learnings

- **Event-Driven Programming:** Capturing user input and dynamically responding to events.
- **Asynchronous Programming:** Managing timers with setTimeout and setInterval.
- **State Management:** Storing and retrieving data using localStorage.
- **Code Modularity:** Breaking down functionality into reusable functions.

This project showcases the power of advanced JavaScript concepts combined with responsive UI design to create a feature-rich, engaging game.
