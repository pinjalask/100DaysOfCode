# Basic Calculator Using HTML and JavaScript

This project is a Basic Calculator implemented using only HTML, JavaScript variables, and strings. It provides basic arithmetic operations: addition, subtraction, multiplication, and division. The program handles user input through buttons and dynamically updates the calculation string, which is evaluated to display the result.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Code Structure](#how-it-works)
- [Usage Instructions](#usage-instructions)
- [Key Learnings](#key-learnings)

## Overview

This project focuses on building a simple calculator to demonstrate:

- Basic HTML structure for UI elements.
- Using JavaScript variables to store and manipulate user inputs.
- Dynamic operations using the eval() function to calculate expressions.
- Implementing a clear functionality to reset calculations.

The program outputs logs in the browser's developer console, enabling real-time debugging and understanding of the calculation process.

## Features

- **Basic Arithmetic:** Supports addition (+), subtraction (-), multiplication (\*), and division (/).
- **Decimal Support:** Allows operations on decimal numbers.
- **Clear Functionality:** Resets the calculation string and clears the console log.
- **Step-by-Step Console Logs:** Logs the calculation process after each button click.

## How It Works

**UI Interaction:**
Buttons for numbers (0–9) and operations (+, -, \*, /) dynamically append their values to a calculation string.
The user clicks buttons to build a mathematical expression.

**Expression Evaluation:**
Clicking the = button evaluates the calculation string using the eval() function and updates the string with the result.

**Clearing:**
The "Clear" button resets the calculation string and clears the console log.

### Code Structure

**HTML: User Interface**

- The calculator UI is built using <button> elements for each number and operator.
- Buttons trigger JavaScript code through the onclick attribute.

**JavaScript: Core Logic**

- **Variable Declaration:** A single variable calculation holds the expression being constructed by the user.
- **Appending Input:** Each button appends its value to the calculation string.
- **Expression Evaluation:** The = button uses the eval() function to compute the result of the string.
- **Clearing:** Resets the calculation string and clears the console.

## Usage Instructions

- **Run the Program:**
  Copy the HTML code into an .html file and open it in a web browser.

- **Perform Calculations:**
  Click buttons to enter numbers and operators.
  View the ongoing calculation in the browser's console (open DevTools with Ctrl+Shift+I or Cmd+Option+I).

- **Get Results:**
  Click the = button to compute the result.
  The result is logged in the console.

- **Clear Calculations:**
  Click the "Clear" button to reset the calculator and console.

## Key Learnings

- **Dynamic Variables:** Using a variable to store and manipulate user inputs.
- **Event Handling:** Attaching JavaScript logic directly to HTML elements using onclick.
- **String Operations:** Building a mathematical expression as a string.
- **Debugging:** Using console.log() for real-time debugging.
- **eval() Function:** Evaluating strings as mathematical expressions.

This simple calculator is a great starting point for learning JavaScript event handling, variables, and basic string operations in web development. It provides a hands-on approach to building functional projects while reinforcing foundational concepts.
