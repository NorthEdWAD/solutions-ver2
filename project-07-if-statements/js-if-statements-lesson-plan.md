## Unit: JavaScript Logic & Decision Making

### Objective for Week
*By Friday, students will be able to use `if/else` statements to create a "Pass/Fail" logic system and a simple "Night Mode" toggle on a webpage.*

### Possible Obstacles
* **The Comparison Trap:** Using a single `=` (assignment) instead of `===` (comparison) inside the condition.
* **Syntax Scaffolding:** Forgetting the parentheses `()` for the condition or curly braces `{}` for the action.
* **Boolean Confusion:** Misunderstanding that the code inside the `{}` only runs if the condition is `true`.
* **The "One and Done" Error:** Thinking an `if` statement runs constantly like a loop, rather than checking once when triggered.

### Sketch The Week

| Intro + short demo | Guided practice | Independent work | Debug/feedback | Assessment/reflection |
| :---- | :---- | :---- | :---- | :---- |
| *The Logic Gate* | *Number Comparison* | *The Password Check* | *The Comparison Bug* | *Project: Night Mode* |

**What I Will NOT Do This Week**
* Skip: Practical "real world" examples. We will avoid abstract math and focus on UI changes (like changing colors or showing/hiding text).
* Overcomplicate: We will stick to `if` and `else`. We will save `else if` for the following week to ensure the core concept is mastered.

---

### Prep for Day 1: The Logic Gate (Booleans)
1. **Short demo:** Use a real-life "If" scenario (e.g., "If you have a ticket, you can enter"). Show the code equivalent: `if (hasTicket === true) { console.log("Welcome!"); }`.
2. **Guided practice:** Create a variable `let age = 15`. Write an `if` statement together that logs "You can drive!" if the age is 16 or older.
3. **Independent task:** Write a "Weather App" logic. Create a variable `let isRaining = true`. If it is raining, log "Bring an umbrella!" Otherwise (`else`), log "Enjoy the sun!"

**Day 1 Resources** - `logic_basics.md`
- `gatekeeper_lab.js`

---

### Prep for Day 2: The DOM Toggle (Color Switch)
1. **Short demo:** Show a page with a white background. Use `document.body.style.backgroundColor` inside an `if` statement to change it to black.
2. **Guided practice:** Create a "Light/Dark" variable. Practice writing a function that checks the variable and changes the CSS of the page based on its value.
3. **Independent task:** Create a "Traffic Light" simulator. Use a variable `let lightColor`. If it's "green", change a `div` on the screen to green. If it's "red", change it to red.

**Day 2 Resources**
- `dom_styles.md`
- `traffic_light.html`
- `script.js`

---

### Prep for Day 3: Input Validation
1. **Short demo:** Introduce `input.value`. Show how to grab a string from a text box and compare it to a "Secret Password."
2. **Guided practice:** Build a simple login form. If the user types "Seskame", show a "Secret Message" `<div>`. If they type anything else, show "Access Denied."
3. **Independent task:** Build a "Grade Checker." The user enters a number. If the number is 60 or higher, display "You Passed!" in green text. Otherwise, display "Try Again" in red text.

**Day 3 Resources**
- `input_validation.md`
- `login_challenge.html`

---

### Prep for Day 4: Debugging Comparison Operators
1. **Short demo:** The "Single Equals" Disaster. Show how `if (score = 100)` actually *sets* the score to 100 instead of checking it. 
2. **Guided practice:** "The Broken Gate." Give students 3 snippets of `if` statements with common syntax errors (missing braces, wrong operators) and fix them as a class.
3. **Independent task:** Refactor the "Night Mode" project from Day 2. Add a button that toggles a variable back and forth, using an `if/else` statement to flip the background color each time the button is clicked.

**Day 4 Resources**
- `comparison_errors.js`
- `toggle_project.html`
