# Calculator with DOM Integration

This project is an improvised calculator application, enhanced with Document Object Model (DOM) manipulation to provide an interactive and dynamic experience. The calculator allows users to perform basic arithmetic operations, clear the input, and dynamically display the calculation and result. Additionally, it uses localStorage to persist the last calculation across browser sessions.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Code Structure](#code-structure)
- [Usage Instructions](#usage-instructions)
- [Key Learnings](#key-learnings)

## Overview

This calculator demonstrates:

- **Interactive Arithmetic Operations:** Addition, subtraction, multiplication, and division.
- **Dynamic Display:** Updates and shows the current calculation on the webpage in real-time using DOM manipulation.
- **LocalStorage Integration:** Persists the last calculated result.
- **Styled Interface:** Uses a modern, minimalist design for an intuitive user experience.

## Features

**Arithmetic Operations:** Perform addition, subtraction, multiplication, division, and handle decimals.

**Real-Time Display:** The current calculation is shown dynamically as users press buttons.

**Clear Functionality:** Reset the calculator to its initial state.

**LocalStorage:** The result of the last calculation is saved and reloaded when the page is refreshed.

## How It Works

### Core Functionalities

**Updating the Calculation**

- The updateCalculation(value) function dynamically appends values (numbers or operators) to the calculation string and updates the display.

**Display Calculation**

- The displayCalculation() function updates the display by directly manipulating the DOM element with the display class.

**Evaluate Expression**

- Clicking the = button evaluates the arithmetic expression using the eval() function and updates the display.

**Clear Functionality**

- Clicking the Clear button resets the calculation variable, clears the display, and updates localStorage.

**LocalStorage Integration**

- On page load, the last calculation is retrieved from localStorage and displayed.

## Code Structure

**1. HTML (calculator.html)**

- Defines the structure and layout of the calculator.
- Includes buttons for numbers, operations, and special actions (=, Clear).

**2. CSS (calculator.css)**

- Styles the calculator for a sleek, modern look.

**3. JavaScript (calculator.js)**

- Implements the logic for updating the calculation, displaying it, and integrating localStorage.

## Usage Instructions

**Setup:**

- Ensure all files (calculator.html, calculator.css, calculator.js) are in the same directory.
- Open calculator.html in a web browser.

**Perform Calculations:**

- Click buttons to input numbers and operators.
- Press = to evaluate the expression.

**Reset:**

- Click the Clear button to reset the calculator.

**Persistent Calculation:**

- Refresh the page to see the last calculation retained from the previous session.

## Key Learnings

- **DOM Manipulation:** Dynamically updating elements using querySelector and .innerText.

- **Event Handling:** Using onclick attributes to trigger JavaScript functions.

- **LocalStorage:** Storing and retrieving data to persist state across sessions.

- **Styling with CSS:** Creating a modern, user-friendly design using color, font, and layout properties.

This project marks a significant step in learning JavaScript and DOM manipulation, showcasing how to build interactive web applications.
