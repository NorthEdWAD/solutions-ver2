/* Abe Lincoln
April 10, 2026
Traffic Light Script
*/

// Objective
// Create a traffic light simulator using JS

// 1. Create a variable for the current light color ("red", "yellow", or "green")
let lightColor = "green";

// 2. Select the HTML elements
const redCircle = document.getElementById("red-light");
const yellowCircle = document.getElementById("yellow-light");
const greenCircle = document.getElementById("green-light");

// 3. Logic to "turn on" the light
if (lightColor === "red") {
    redCircle.style.backgroundColor = "red";
} else if (lightColor === "yellow") {
    yellowCircle.style.backgroundColor = "yellow";
} else if (lightColor === "green") {
    greenCircle.style.backgroundColor = "lime";
} else {
    console.log("Invalid light color!");
}

/* INDEPENDENT TASK:
Change the lightColor variable at the top to "red" and refresh the page.
Does the red light turn on?
*/
