// Abe Lincoln
// 10 JUN 2025
// Calculate Area of Right Triangle

// Function 1: Get base with validation
function getBase() {
    let base = prompt("Enter the base of the right triangle:");
    // Check if the input is not a number OR if the user left it empty
    while (isNaN(base) || base === "" || base === null) {
        base = prompt("Invalid input. Please enter a numeric value for the base:");
    }
    return parseFloat(base);
}

// Function 2: Get height with validation
function getHeight() {
    let height = prompt("Enter the height of the right triangle:");
    while (isNaN(height) || height === "" || height === null) {
        height = prompt("Invalid input. Please enter a numeric value for the height:");
    }
    return parseFloat(height);
}

// Function 3: Calculate and display answer
function calculateAndDisplayArea(b, h) {
    const area = (b * h) / 2;
    
    // Using template string for output
    alert(`The area of a right triangle with base ${b} and height ${h} is: ${area}`);
}

// Calling functions
const triangleBase = getBase();
const triangleHeight = getHeight();

calculateAndDisplayArea(triangleBase, triangleHeight);