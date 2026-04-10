The DOM Toggle (Styling with JS)

### 1. What is the DOM?
The **DOM** (Document Object Model) is how JavaScript "talks" to your HTML. Every element on your page can be changed by JS—including its colors, sizes, and visibility.

### 2. Selecting Elements
Before you can change something, you have to find it. We use the element's **ID** to do this:
```javascript
const box = document.getElementById("my-box");
```

### 3. Changing Styles
Once you have the element, you can access its CSS properties using `.style`. 
**Note:** In JS, CSS properties like `background-color` become `backgroundColor` (Camel Case).

```javascript
// Change the background color
box.style.backgroundColor = "blue";

// Change the text color
box.style.color = "white";
```

### 4. Logic + Styling
We use `if` statements to toggle styles based on user input or current settings.

```javascript
let mode = "dark";

if (mode === "dark") {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
} else {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}
```

---

### Today's Goal: The Traffic Light
We will create a script that checks a variable and "lights up" the correct circle on our web page while turning the others off.
