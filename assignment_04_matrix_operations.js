// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// ---------- HELPER FUNCTIONS ----------

// Read a matrix of size rows x cols from user
function readMatrix(rows, cols, name) {
    let matrix = [];
    console.log(`\nEnter values for ${name}:`);
    for (let i = 0; i < rows; i++) {
        let rowInput = readlineSync.question(`Enter row ${i + 1}: `);
        let row = rowInput.split(' ').map(Number);
        matrix.push(row);
    }
    return matrix;
}

// Display a matrix in grid format
function displayMatrix(matrix, title) {
    console.log(`\n${title}`);
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

// ---------- PART A: TRANSPOSE ----------
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = [];

    for (let i = 0; i < cols; i++) {
        result[i] = [];
        for (let j = 0; j < rows; j++) {
            result[i][j] = matrix[j][i]; // rows become columns
        }
    }
    return result;
}

// ---------- PART B: ADD TWO MATRICES ----------
function addMatrices(mat1, mat2) {
    let rows = mat1.length;
    let cols = mat1[0].length;
    let result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = mat1[i][j] + mat2[i][j]; // element-wise sum
        }
    }
    return result;
}

// ---------- PART C: MULTIPLY TWO MATRICES ----------
function multiplyMatrices(matA, matB) {
    let rowsA = matA.length;
    let colsA = matA[0].length;
    let colsB = matB[0].length;
    let result = [];

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            result[i][j] = 0;
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matA[i][k] * matB[k][j];
            }
        }
    }
    return result;
}

// ---------- MAIN ----------
function main() {
    console.log("=== PART A: TRANSPOSE ===");
    let rowsA = readlineSync.questionInt("Enter number of rows: ");
    let colsA = readlineSync.questionInt("Enter number of columns: ");
    let matrixA = readMatrix(rowsA, colsA, "Matrix A");
    displayMatrix(matrixA, "Original Matrix:");
    let transposed = transposeMatrix(matrixA);
    displayMatrix(transposed, "Transposed Matrix:");

    console.log("\n=== PART B: ADD TWO MATRICES ===");
    let rowsB = readlineSync.questionInt("Enter number of rows: ");
    let colsB = readlineSync.questionInt("Enter number of columns: ");
    let matrixB1 = readMatrix(rowsB, colsB, "Matrix B1");
    let matrixB2 = readMatrix(rowsB, colsB, "Matrix B2");
    let sum = addMatrices(matrixB1, matrixB2);
    displayMatrix(matrixB1, "Matrix 1:");
    displayMatrix(matrixB2, "Matrix 2:");
    displayMatrix(sum, "Sum:");

    console.log("\n=== PART C: MULTIPLY TWO MATRICES ===");
    let rowsC1 = readlineSync.questionInt("Enter number of rows for Matrix A: ");
    let colsC1 = readlineSync.questionInt("Enter number of columns for Matrix A: ");
    let matrixC1 = readMatrix(rowsC1, colsC1, "Matrix A");

    let rowsC2 = readlineSync.questionInt("Enter number of rows for Matrix B: ");
    let colsC2 = readlineSync.questionInt("Enter number of columns for Matrix B: ");

    // Check multiplication rule: colsA == rowsB
    if (colsC1!== rowsC2) {
        console.log("Error: Number of columns in A must equal number of rows in B.");
        return;
    }

    let matrixC2 = readMatrix(rowsC2, colsC2, "Matrix B");
    let product = multiplyMatrices(matrixC1, matrixC2);
    displayMatrix(matrixC1, "Matrix A:");
    displayMatrix(matrixC2, "Matrix B:");
    displayMatrix(product, "Product A x B:");
}

main();