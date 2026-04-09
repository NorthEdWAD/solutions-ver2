// Abraham Lincoln
// 10 JAN 20XX
// Celsius Conversion Function

// Write function to convert F to C 
function convertTemperature(temperature) {

  // Is the input a number?
if (isNaN(celsiusTemp)) {
    alert(celsiusTemp); // Displays the "Invalid input" message
} else {
    const outputString = `${fahrenheitTemp.toFixed(2)}°F is ${celsiusTemp.toFixed(2)}°C.`;
    alert(outputString);
}

  const celsius = (temperature - 32) * (5 / 9);

  return Math.round(celsius * 100) / 100;
};

// Get Fahrenheit temperature from user

let fahrenheitTemp = parseFloat(prompt('Please enter your Fahrenheit temperature (Example: 32):\n'));

// Call the convertTemperature( ) function to do the math
let celsiusTemp = convertTemperature(fahrenheitTemp);

// Display output in alert box
const outputString = `${fahrenheitTemp.toFixed(2)} degrees Fahrenheit is equivalent to ${celsiusTemp.toFixed(2)} degrees Celsius.`;

alert(outputString);



