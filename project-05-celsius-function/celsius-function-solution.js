// Abraham Lincoln
// 10 JAN 20XX
// Celsius Conversion Function

// Write function to convert F to C 
function convertTemperature(temperature) {
  return (temperature - 32) / (9/5);
};

// Get Fahrenheit temperature from user

let fahrenheitTemp = Number(prompt('Please enter your Fahrenheit temperature (Example: 32):\n'));

// Call the convertTemperature( ) function to do the math
let celsiusTemp = convertTemperature(fahrenheitTemp);

// Display output in alert box
const outputString = `${fahrenheitTemp.toFixed(2)} degrees Fahrenheit is equivalent to ${celsiusTemp.toFixed(2)} degrees Celsius.`;
alert(outputString);



