# Online Code Editor

This project is a simple Online Code Editor built using HTML, CSS, and JavaScript. It allows users to write and preview their HTML, CSS, and JavaScript code in real-time. The output is displayed in an embedded iframe, providing a live coding experience.

## Table of Contents

Overview
Features
Technologies Used
How It Works
Code Highlights
How to Run the Project
Key Learnings
Limitations
Future Enhancements

## Overview

This code editor provides a minimalistic and user-friendly interface for beginners to:

- Experiment with HTML, CSS, and JavaScript code.
- View live changes instantly in the output section.

## Features

- **Real-Time Preview:** As you type code in the HTML, CSS, and JavaScript sections, the changes are instantly reflected in the output.
- **Separate Code Sections:** Three dedicated areas for HTML, CSS, and JavaScript.
- **Simple Interface:** Minimalistic design for beginners.
- **Live Output:** The output is rendered in an embedded iframe, providing a sandbox environment.
- **Responsive Design:** The layout adjusts for different screen sizes.

## Technologies Used

- **HTML:** For structuring the editor and output interface.
- **CSS:** For styling the editor layout and controls.
- **JavaScript:** For dynamic interaction and real-time updates.

## How It Works

**1. User Inputs Code:**

- Users enter their HTML, CSS, and JavaScript code in separate text areas.

**2. Dynamic Code Combination:**

- The JavaScript program combines the inputs into a single HTML document:
  - HTML code is directly appended.
  - CSS code is wrapped in `<style>` tags.
  - JavaScript code is wrapped in `<script>` tags.

**3. Rendering in iframe:**

- The combined code is written to the iframe's document using `document.write()`.

**4. Live Updates:**

- Event listeners monitor user input and trigger updates to the iframe.

## How to Run the Project

**1. Download or Clone:** Save the HTML, CSS, and JavaScript files in the same directory.

**2. Open the HTML File:** Open `index.html` in any modern web browser.

**3. Write Code:** Enter HTML, CSS, or JavaScript code in the respective sections.

**4. View Output:** The output will be displayed instantly in the iframe.

## Key Learnings

- **Dynamic DOM Manipulation:** Using `document.write()` to inject content into an iframe.
- **Event Handling:** Adding event listeners to monitor user input.
- **Real-Time Updates:** Combining asynchronous updates with JavaScript to provide a seamless user experience.
- **Responsive Design:** Using CSS to create a layout that adapts to different screen sizes.

## Limitations

**1. No Console Support:**

- `console.log()` and other console methods are not displayed in the output.
- This is because the iframe does not include a developer console.

**2. Security Restrictions:**

- JavaScript code runs in a sandboxed environment, limiting certain operations.

## Future Enhancements

- **Integrated Console:** Add a built-in console to display `console.log()` outputs.
- **Code Validation:** Include syntax validation and error highlighting for user code.
- **Save and Load:** Allow users to save their work locally or load saved projects.
- **Dark Mode:** Provide a dark mode toggle for better accessibility.
- **Predefined Templates:** Offer sample templates for users to get started quickly.

This project is an excellent stepping stone for beginners to practice HTML, CSS, and JavaScript together and understand the dynamics of a live coding environment.
