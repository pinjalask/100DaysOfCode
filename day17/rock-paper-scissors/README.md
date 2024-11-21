# Rock, Paper, Scissors Game using JavaScript Functions

This project implements the classic Rock, Paper, Scissors game using JavaScript functions and conditional statements (if-else). The program allows a user to compete against the computer by selecting their option and then comparing it to the computer's randomly generated choice.

## Overview

The Rock, Paper, Scissors game is a simple yet engaging exercise that showcases the usage of:

- Functions for modular and reusable code.
- Math.random() for generating random values.
- Conditionals (if-else) for decision-making logic.
- String manipulation (toLowerCase()) for handling user input case-insensitively.

## How It Works

The computer's choice is determined randomly using a function getComputerChoice(). It selects one of the three options: "rock", "paper", or "scissors".

The human's choice is entered via a prompt and processed through the function getHumanChoice() to ensure the input is in lowercase for comparison.

The playRound() function compares the two choices:

- If the choices are the same, the result is a draw.
- Otherwise, the function determines the winner based on the rules of the game: Rock beats Scissors, Paper beats Rock and Scissors beats Paper.

The program outputs the computer's choice, the human's choice, and the result of the round in the console.

## Code Explanation

### 1. Computer's Choice

The getComputerChoice() function uses Math.random() to randomly generate a number between 0 and 1. Depending on the range, it returns one of the three options: Rock, Paper ans Scissors.

### 2. Human's Choice

The getHumanChoice() function takes input from the user and converts it to lowercase using .toLowerCase() to ensure consistent comparisons.

### 3. Game Logic

The playRound() function compares the human and computer choices using a series of if-else statements:

    It checks for a draw first.
    Then evaluates the winning and losing conditions based on the rules of the game.
    If the input is invalid (not "rock", "paper", or "scissors"), it returns an error message:

### 4. Program Execution

The program calls the above functions in sequence and outputs the results to the console.

## Usage Instructions

- **Run the Code:** Copy and paste the JavaScript code into a browser's developer console or an online JavaScript compiler or in a
- **Input Your Choice:** Enter "rock", "paper", or "scissors" when prompted.
- **View the Results:** The program will display: The computer's choice, Your choice and The result of the game (win, lose, or draw).

## Key Learnings

Through this project, the following concepts were practiced and reinforced:

- **Functions:** Modular design with functions like getComputerChoice, getHumanChoice, and playRound.
- **Math.random():** Generating random numbers for game logic.
- **Conditional Statements:** Using if-else to handle multiple conditions.
- **String Methods:** Using .toLowerCase() to standardize user input.
- **Console Output:** Debugging and outputting results using console.log.

This program serves as a foundation for understanding game logic and paves the way for more advanced implementations of Rock, Paper, Scissors (e.g., adding multiple rounds or graphical interfaces).
