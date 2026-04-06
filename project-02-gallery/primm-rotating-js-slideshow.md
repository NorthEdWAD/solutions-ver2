## Intro to JavaScript
### PRIMM: JavaScript-Powered Slideshow

---

#### Directions:

- Study the code snippets below
- Consider what the code will do or how it will behave
- Write your predictions in the space provided
- Be prepared to share your conclusions with the class

---

1. Why do you think the `currentIndex` variable is set to zero (0)?  Why is this important for this slideshow project?
```javascript
        const images = ["coffee-shop.jpg", "jean-jacket.jpg", "fashion-girl.jpg"];
        const captions = ["Coffee Shop", "Jean Jacket", "Fashionable"];
        let currentIndex = 0;
```
---
2. Why do you think the `images` and `captions` arrays share an index number?
```javascript
document.getElementById("gallery-img").src = images[index];
document.getElementById("gallery-caption").textContent = captions[index];
```
---
3. What does the `.textContent` property do to the button?
```javascript
document.getElementById("pause-btn").textContent = "Pause";
```
---
4. Predict what this line of code does:
```javascript
slideInterval = setInterval(runSlideshow, 2000);
```
---
5. Explain in plain English what you think the `toggleSlideshow()` function does.
```javascript
function toggleSlideshow() {
   if (isPlaying) { 
      stopTimer(); 
   } else { 
      startTimer(); 
   } // End of IF statement
} // End of toggleSlideshow() function

```
---
6. In the `toggleSlideshow()` function, why add JavaScript comments to the curly braces
at the end of the function?
