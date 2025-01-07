// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Example of what a test for this may look like:
// describe('add', () => {
//     it('should add two numbers', () => {
//         expect(add(1, 2)).toBe(3);
//     });
// });


// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Export the functions for testing
module.exports = { add, subtract, multiply, divide };