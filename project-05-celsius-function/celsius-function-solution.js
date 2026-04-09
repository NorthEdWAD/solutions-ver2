// Abraham Lincoln
// 10 JAN 20XX
// Celsius Function

// Write function to convert F to C 
function convertTemperature(temperature) {
  return (temperature - 32) / (9/5);
};

// Get Fahrenheit temperature from user

fahrenheitTemp = Number(prompt('Please enter your Fahrenheit temperature (Example: 32):\n'));

// Call the convertTemperature( ) function to do the math
celsiusTemp = convertTemperature(fahrenheitTemp);

// Display output in alert box
outputString = `${fahrenheitTemp} degrees Fahrenheit is equivalent to ${celsiusTemp} degrees Celsius.`;
alert(outputString);

