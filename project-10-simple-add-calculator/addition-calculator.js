// First and last name
// Current date
// JS Addition Calculator

// Add event listener to button element
document.getElementById("btn").addEventListener("click", btnClicked);

// Create function to make Calculate button work
function btnClicked(){
    // INPUT
    let num1 = document.getElementById("num1-in").value;
    let num2 = document.getElementById("num2-in").value;

    // Convert text input into numbers so JS can do math for us
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);


    // PROCESS
    const total = num1 + num2;

    // OUTPUT
    document.getElementById("output").innerHTML = total;
}



