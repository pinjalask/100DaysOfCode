# Cart Quantity Management with JavaScript

This project demonstrates a basic cart quantity management system implemented using HTML, JavaScript variables, and strings. It allows users to manage the quantity of items in a cart, ensuring the quantity remains within valid limits (0 to 10). The program provides real-time feedback using the browser's console and alerts.

## Table of Contents

    Overview
    Features
    How It Works
    Code Structure
    Usage Instructions
    Key Learnings
    Future Enhancements

## Overview

This project focuses on managing a cart quantity using simple JavaScript logic. It introduces the following concepts:

- **Conditional Statements:** Validating cart operations (e.g., preventing overfilling or underflow).
- **Event Handling:** Triggering JavaScript code via button clicks.
- **Variables:** Using a single variable, cartQuantity, to track the current cart state.
- **Alerts:** Providing immediate feedback for invalid operations.

All interactions are logged in the browser's developer console.

## Features

- **View Cart Quantity:** Display the current quantity in the cart.
- **Add Items:** Add items (in increments of 1, 2, 3, 4, or 5) to the cart.
- **Remove Items:** Remove items (in decrements of 1, 2, or 3) from the cart.
- **Reset Cart:** Clear the cart and reset the quantity to 0.
- **Validation:**
  - Prevent adding items beyond the cart's maximum capacity (10 items).
  - Prevent removing items below the cart's minimum capacity (0 items).

## How It Works

**Cart Quantity Variable:**

- The cartQuantity variable tracks the number of items in the cart.
- Initialized to 0 at the start of the program.

**Adding Items:**

- Each "Add" button increases the cartQuantity by a specific value.
- If adding items exceeds the cart limit (10), an alert is displayed: "The cart is full".

**Removing Items:**

- Each "Remove" button decreases the cartQuantity by a specific value.
- If removing items results in a negative quantity, an alert is displayed: "Not enough items in the cart".

**Reset Cart:**

- The "Reset Cart" button sets cartQuantity to 0 and clears the console log.

**Console Logs:**

- All cart actions (add, remove, reset) are logged in the browser console for real-time tracking.

## Usage Instructions

- **Run the Program:** Copy the HTML code into an .html file and open it in a web browser.
- **View Cart Quantity:** Click the "Show Quantity" button to log the current cartQuantity to the console.
- **Add Items:** Use the "Add" buttons to increase the cart quantity. Ensure the total does not exceed 10.
- **Remove Items:** Use the "Remove" buttons to decrease the cart quantity. Ensure the total does not go below 0.
- **Reset Cart:** Click the "Reset Cart" button to clear the cart and reset the quantity.
- **View Logs:** Open the browser's developer console (Ctrl+Shift+I or Cmd+Option+I) to view logs for each action.

## Key Learnings

- **Conditional Statements:** Implementing if-else logic for validation.
- **Variables:** Using a variable to track state across multiple button clicks.
- **Event Handling:** Triggering JavaScript functions via onclick attributes.
- **String Interpolation:** Using template literals (e.g., `Cart quantity: ${cartQuantity}`) for dynamic messages.
- **Console Logging:** Debugging and tracking actions in the browser console.

This project serves as a hands-on introduction to event-driven programming and state management in JavaScript. It lays the foundation for more complex applications like shopping carts in e-commerce platforms.
