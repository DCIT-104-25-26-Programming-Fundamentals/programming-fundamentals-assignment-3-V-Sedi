// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

// ---------- ARITHMETIC FUNCTIONS ----------
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return null; // signal error
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function exponentiation(a, b) {
    return a ** b;
}

// ---------- DISPLAY MENU ----------
function displayMenu() {
    console.log("\n=====================");
    console.log("   SIMPLE CALCULATOR");
    console.log("=====================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

// ---------- MAIN ----------
function main() {
    let choice;

    do {
        displayMenu();
        choice = readlineSync.questionInt("Select an operation (1-7): ");

        if (choice >= 1 && choice <= 6) {
            let num1 = readlineSync.questionFloat("Enter first number: ");
            let num2 = readlineSync.questionFloat("Enter second number: ");
            let result;

            if (choice === 1) {
                result = addition(num1, num2);
                console.log(`Result: ${num1} + ${num2} = ${result.toFixed(2)}`);
            } else if (choice === 2) {
                result = subtraction(num1, num2);
                console.log(`Result: ${num1} - ${num2} = ${result.toFixed(2)}`);
            } else if (choice === 3) {
                result = multiplication(num1, num2);
                console.log(`Result: ${num1} * ${num2} = ${result.toFixed(2)}`);
            } else if (choice === 4) {
                result = division(num1, num2);
                if (result === null) {
                    console.log("Error: Cannot divide by zero.");
                } else {
                    console.log(`Result: ${num1} / ${num2} = ${result.toFixed(2)}`);
                }
            } else if (choice === 5) {
                result = modulus(num1, num2);
                console.log(`Result: ${num1} % ${num2} = ${result.toFixed(2)}`);
            } else if (choice === 6) {
                result = exponentiation(num1, num2);
                console.log(`Result: ${num1} ** ${num2} = ${result.toFixed(2)}`);
            }
        } else if (choice === 7) {
            console.log("Goodbye!");
        } else {
            console.log("Error: Invalid choice. Please enter 1-7.");
        }

    } while (choice !== 7);
}

main();
