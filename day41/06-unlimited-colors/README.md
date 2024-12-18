# Random Background Color Changer

This project is a Random Background Color Changer built using HTML, CSS, and JavaScript. It allows users to dynamically change the background color of the page every second with the Start button and stop the changes with the Stop button.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [How to Run the Project](#how-to-run-the-project)
- [Key Learnings](#key-learnings)

## Overview

This project focuses on:

- Understanding JavaScript events like click.
- Implementing asynchronous behavior using setInterval and clearInterval.
- Generating random colors dynamically with JavaScript.
- Manipulating the DOM to update the page style.

## Features

**1. Start and Stop Controls:**

- **Start:** Changes the background color every second.
- **Stop:** Stops the color changes and resets the background to the default color.

**2. Dynamic Random Colors:**

- Colors are randomly generated in hexadecimal format (#RRGGBB).

**3. Lightweight Design:**

- Simple and responsive layout.

## How It Works

- **Random Color Generation:** A function generates random hexadecimal colors.
- **Interval for Color Changes:** The setInterval function changes the background color every second when the Start button is clicked.
- **Stop Interval:** The clearInterval function stops the color change process when the Stop button is clicked.
- **Default State Reset:** The background color is reset to the default (#212121) when stopped.

## How to Run the Project

**1. Clone or Download:**

- Save the HTML and JavaScript files in the same directory.

**2. Open in Browser:**

- Open the HTML file (`index.html`) in any modern web browser.

**3. Interact:**

- Click the Start button to see the background color change every second.
- Click the Stop button to stop the color changes.

## Key Learnings

- **JavaScript Event Listeners:** Handling click events with addEventListener.
- **Asynchronous JavaScript:** Using setInterval and clearInterval for recurring tasks.
- **Random Number Generation:** Creating dynamic random values using Math.random().
- **DOM Manipulation:** Dynamically updating CSS properties via JavaScript.

This project is a simple yet effective demonstration of JavaScript's asynchronous capabilities and DOM manipulation, making it an excellent learning exercise for beginners in web development.
