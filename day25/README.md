# To-Do List Application

This project is a To-Do List application built with HTML, CSS, and JavaScript. It leverages arrays and loops to manage and dynamically render tasks. The application allows users to add tasks with due dates, display them in a structured format, and delete tasks when completed.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Code Structure](#code-structure)
- [Usage Instructions](#usage-instructions)
- [Key Learnings](#key-learnings)

## Overview

This project demonstrates:

- **Dynamic Array Management:** Tasks are stored in an array, allowing dynamic addition and deletion.
- **DOM Manipulation:** Tasks are displayed using JavaScript and updated interactively.
- **Responsive Design:** Styled using CSS grid for a clean and structured layout.

## Features

- **Add Tasks:** Enter a task name and due date to add it to the list.
- **Display Tasks:** Shows all tasks in a structured grid format.
- **Delete Tasks:** Removes tasks from the list dynamically.
- **Real-Time Updates:** The to-do list updates in real-time when tasks are added or deleted.

## How It Works

### Core Workflow

**1. Task Addition:**

- The user inputs a task name and selects a due date.
- Clicking the Add button adds the task to the todoList array.
- The task is then rendered dynamically on the webpage.

**2. Task Deletion:**

- Clicking the Delete button removes the task from the array using the splice() method.
- The list is re-rendered without the deleted task.

**3. Real-Time Rendering:**

- The renderTodoList() function iterates over the todoList array and dynamically creates HTML elements for each task.

## Code Structure

**1. HTML (to-do-list.html)**

- Provides the structure of the to-do list application.
- Includes input fields for task name and due date, an Add button, and a container for the task list.

**2. CSS (to-do-list.css)**

- Styles the application for a clean and intuitive user experience.
- Uses CSS grid for layout and button styles for interactivity.

**3. JavaScript (to-do-list.js)**

- Implements the logic for managing and rendering tasks.

## Usage Instructions

**1. Setup:**

- Ensure all files (to-do-list.html, to-do-list.css, to-do-list.js) are in the same directory.
- Open to-do-list.html in a web browser.

**2. Add a Task:**

- Enter a task name in the input field.
- Select a due date using the date picker.
- Click the Add button to add the task to the list.

**3. Delete a Task:**

- Click the Delete button next to a task to remove it from the list.

**4. View Updates:**

- The list dynamically updates whenever tasks are added or deleted.

## Key Learnings

**Arrays:**

- Used to store and manage the list of tasks.
- Learned how to dynamically add and remove items from an array.

**Loops:**

- Used for loop to iterate over the todoList array and render tasks.

**DOM Manipulation:**

- Updated the webpage dynamically using querySelector and .innerHTML.

**Event Handling:**

- Attached JavaScript functions to HTML elements using the onclick attribute.

This To-Do List Application is an excellent project for practicing JavaScript arrays, loops, and DOM manipulation. It provides a practical foundation for building more complex applications.
