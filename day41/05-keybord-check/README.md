# Keyboard Check Project

This project is a Keyboard Check application built using HTML, CSS, and JavaScript. It demonstrates how to handle keyboard events and dynamically update the DOM based on user input. By pressing any key on the keyboard, the application displays the corresponding key, keycode, and code.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [How to Run the Project](#how-to-run-the-project)
- [Key Learnings](#key-learnings)

## Overview

This project is designed for beginners learning JavaScript, focusing on:

- Handling keyboard events with keydown.
- Exploring the event object to access properties like key, keyCode, and code.
- Dynamically updating HTML content using DOM manipulation.

## Features

- **Real-Time Key Information:** Displays the key, keycode, and code of the key pressed.
- **Responsive UI:** Dynamically updates the table in real-time when a key is pressed.
- **Lightweight and Fast:** Simple and efficient JavaScript code with minimal styling.

## How It Works

- **Keyboard Event Handling:**

  - The keydown event is used to capture the key pressed by the user.

- **Accessing Event Properties:**

  - The event object provides details like:
    - key: The name of the key pressed.
    - keyCode: The numerical code of the key.
    - code: A physical key location code.

- **Dynamic DOM Update:**
  - The innerHTML of a <div> is updated to display the key information in a table format.

## How to Run the Project

- **Clone or Download:** Save the HTML and JavaScript files in the same directory.
- **Open in Browser:** Open the HTML file (`keyboard-check.html`) in any modern web browser.
- **Start Typing:** Press any key, and the key information will be displayed dynamically.

## Key Learnings

- **Event Handling:** Using addEventListener to listen for specific events like keydown.
- **The event Object:** Accessing key details like event.key, event.keyCode, and event.code.
- **Dynamic DOM Manipulation:** Updating content dynamically using innerHTML.
- **Basic Table Creation:** Creating a table structure dynamically in JavaScript.

This project is a simple yet powerful way to understand keyboard events and JavaScript's asynchronous nature, making it an excellent exercise for beginners in web development.
