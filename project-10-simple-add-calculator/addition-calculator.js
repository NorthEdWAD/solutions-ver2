// First and last name
// Current date
// JS Addition Calculator

// Add event listener to run placeOrder function
document.getElementById("btn").addEventListener("click", placeOrder);

// Create function to place pizza order
function placeOrder(){
    // INPUT
    const size = prompt("Enter size of pizza (small/medium/large):\n");
    const topping1 = prompt("Enter first topping (Example: mushrooms)\n");
    const topping2 = prompt("Enter second topping (Example: pepperoni)\n");

    // PROCESS
    const msg = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

    // OUTPUT
    alert(msg);
}



