// Abraham Lincoln
// 05 JUN 2026
// Passing Values Between Functions

// Project will use functions to calculate and display
// the area of a rectangle

function runProject() {
    const width = getWidth();
    const length = getLength(); 
    const area = calculateArea(width, length);
    
    displayOutput(width, length, area);
}

// Get WIDTH of rectangular room
function getWidth() {
    let width = parseFloat(prompt("Enter the width of the room:\n"));
    return width;
}

// Get LENGTH of rectangular room
function getLength() {
    let length = parseFloat(prompt("Enter the length of the room:\n"));
    return length;
}

// Calculate number of square feet of room
function calculateArea(w, l) {
    return w * l;
}

// Display output
function displayOutput(w, l, a) {
    console.log(`Room Dimensions (ft.): ${w} x ${l}`);
    console.log(`Total Area: ${a} square feet`);
    alert(`The area of the room is ${a} square feet.`);
}

// Start the program
runProject();
