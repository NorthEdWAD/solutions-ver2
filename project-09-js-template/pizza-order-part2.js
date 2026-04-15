// First and last name
// Current date
// JS Pizza Order (Part 1)

// Add event listener to run placeOrder function
document.getElementById("btn").addEventListener("click", placeOrder);

// Create function to place pizza order
function placeOrder(){
    // INPUT
    const size = document.getElementById("size-in").value;
    const topping1 = document.getElementById("topping1-in").value;
    const topping2 = document.getElementById("topping2-in").value;

    // PROCESS
    const msg = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

    // OUTPUT
    document.getElementById("output").innerHTML = msg;
}



