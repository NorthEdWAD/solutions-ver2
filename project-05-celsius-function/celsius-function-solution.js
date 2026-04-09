// Abraham Lincoln
// 10 JAN 20XX
// Celsius Conversion Function

// Write function to convert F to C 
function convertTemperature(temperature) {
    // 1. Check if the input is a valid number
    if (isNaN(temperature)) {
        return null; // Return null if it's not a number
    }

    // 2. Perform the calculation FIRST
    const celsius = (temperature - 32) * (5 / 9);

    // 3. Return the result rounded to 2 decimal places
    return Math.round(celsius * 100) / 100;
}

// --- Main Program Execution ---

// Get Fahrenheit temperature from user
let fahrenheitTemp = parseFloat(prompt('Please enter your Fahrenheit temperature (Example: 32):\n'));

// Call the function
let celsiusTemp = convertTemperature(fahrenheitTemp);

// Check if the result is valid before alerting
if (celsiusTemp === null) {
    alert("Invalid input! Please enter a number.");
} else {
    // Display output in alert box
    const outputString = `${fahrenheitTemp.toFixed(2)}°F is equivalent to ${celsiusTemp.toFixed(2)}°C.`;
    alert(outputString);
}



