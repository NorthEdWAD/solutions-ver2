### Student Handout (Markdown)

# JavaScript if/else Statements - Student Handout

## Unit Overview

This week, we will learn how to use **if/else statements** in JavaScript. By the end of this unit, you will be able to:
- Write basic `if` and `if/else` statements
- Use JavaScript to make a webpage respond to user input
- Build an interactive decision-making webpage

## Unit Breakdown

### **Day 1: Introduction to if Statements**

**Objective:**  
Learn how to write a basic `if` statement in JavaScript.

#### Steps:
1. **What is an `if` statement?**
   - It’s used to make decisions in code.
   - If a condition is true, some code runs; if not, it does nothing.

2. **Example:**
   ```javascript
   let age = 16;
   
   if (age >= 16) {
     console.log("You can drive!");
   }
```

3. **Your Task:**

   * Write an `if` statement that checks if a number is greater than or equal to 18 and prints "Adult" or "Not an adult".

---

### **Day 2: Adding Else - Two Outcomes**

**Objective:**
Learn how to use the `else` part of an `if...else` statement to handle both true and false conditions.

#### Steps:

1. **What is `else`?**

   * The `else` block runs when the `if` condition is false.

2. **Example:**

   ```javascript
   let age = 16;

   if (age >= 18) {
     console.log("You are an adult.");
   } else {
     console.log("You are a minor.");
   }
   ```

3. **Your Task:**

   * Write an `if...else` statement that checks if a score is above or below 50. Print "Pass" or "Fail" accordingly.

---

### **Day 3: Using JavaScript with HTML**

**Objective:**
Connect user input (from an HTML form) to an `if...else` statement.

#### Steps:

1. **Getting Input from the User:**

   * Use JavaScript to get values from input fields in your HTML.

2. **Example:**

   ```javascript
   let age = document.getElementById("ageInput").value;

   if (age >= 18) {
     result.textContent = "You are old enough to drive!";
   } else {
     result.textContent = "You are too young to drive!";
   }
   ```

3. **Your Task:**

   * Create an input field where users can enter their age. Use an `if...else` statement to check if they are old enough to drive (age >= 16).

---

### **Day 4: Completing Your Interactive Decision Page**

**Objective:**
Finish and polish your interactive webpage, then present your work.

#### Steps:

1. **Finalizing the Project:**

   * Choose an idea for your webpage (e.g., age checker, pass/fail calculator).
   * Use your `if...else` logic with HTML form inputs.
   * Test your code using-- different inputs.

2. **Presentation:**

   * Share your webpage with the class. Explain:

     * What the condition is
     * What happens for each outcome

---

## Example Project: Age Checker

You will create a webpage that checks if a user is old enough to drive. This will involve:

* Getting the user’s age from an input field.
* Using an `if...else` statement to check if the user is old enough (16 or older).
* Displaying the result on the page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Checker</title>
</head>
<body>

    <h1>Are you old enough to drive?</h1>
    <label for="ageInput">Enter your age: </label>
    <input type="number" id="ageInput">
    <button onclick="checkAge()">Check</button>

    <p id="result"></p>

    <script>
        function checkAge() {
            let age = document.getElementById("ageInput").value;
            let result = document.getElementById("result");

            if (age >= 16) {
                result.textContent = "You can drive!";
            } else {
                result.textContent = "You aren't old enough to drive yet!";
            }
        }
    </script>

</body>
</html>
```

---

## Additional Resources

* [JavaScript Tutorial](https://www.w3schools.com/js/js_if_else.asp)

---

Good luck! Keep testing your code, and don't hesitate to ask questions if you get stuck!

---


