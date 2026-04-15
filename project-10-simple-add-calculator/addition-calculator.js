// First and last name
// Current date
// JS Addition Calculator

// Add event listener to button element
document.getElementById("btn").addEventListener("click", btnClicked);

// Create function to place pizza order
function btnClicked(){
    // INPUT
    const num1 = document.getElementById("num1-in").value;
    const num2 = document.getElementById("num2-in").value;

    // PROCESS
    const total = num1 + num2;

    // OUTPUT
    document.getElementById("output").innerHTML = total;
}



