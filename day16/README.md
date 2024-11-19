# JavaScript Functions

This repository contains three beginner-friendly JavaScript programs which helped me explore and solidify the concepts of functions. These programs demonstrate how to use functions to perform arithmetic operations, manipulate strings, and handle user input effectively.

## Programs Overview

### 1. Basic Calculator

This program performs addition, subtraction, multiplication, and division based on the operator provided by the user. It makes use of a function and a switch-case statement to determine the operation.

Code Highlights (file: calculator.html):

- The function cal() takes two numbers and an operator as input, all the three give by the user.
- A switch statement processes the operator to execute the appropriate calculation.
- Invalid operators are handled with a default case in the switch statement.

### 2. Get Last Letter of a String

This program includes a function that takes a string as input from the user and returns the very last letter of the string. It showcases basic string manipulation in JavaScript.

Code Highlights (file: last-letter.html):

- The function getLastLetter(string) takes a string as input.
- It uses the string length - 1 property to access the last character.
- Validates input to ensure a string is provided.

### 3. Capitalize the First Letter of a String

This program demonstrates how to capitalize the first letter of a given string while converting the rest of the characters to lowercase. It handles strings in uppercase, lowercase, or mixed case.

Code Highlights (file: string.html):

- The function capitalize() takes a string as input.
- It uses string[0].toUpperCase() for the first letter and string.slice(1).toLowerCase() for the rest.
- Handles edge cases like empty strings.

## What I Learned

**Functions:** Writing reusable blocks of code.

**Switch Statements:** Simplifying multiple conditional checks.

**String Manipulation:** Using properties like length, slice(), and methods like toUpperCase() and toLowerCase() for effective string processing.

**Input Validation:** Ensuring proper handling of edge cases like empty strings or invalid inputs.

Note: The FizzBuzz.html file is just for understanding how we can break the code to smaller chuncks and complete the code in a more effective way.

These programs are part of my journey in the #100DaysOfCode challenge.
