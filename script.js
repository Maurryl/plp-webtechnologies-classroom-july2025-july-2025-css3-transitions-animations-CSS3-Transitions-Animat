// --- Part 2: JavaScript Functions - Scope, Parameters & Return Values ---

// Global Scope: This variable is accessible from anywhere in this file.
let globalVar = "I am a global variable.";

/**
 * Calculates the area of a rectangle.
 * @param {number} width The width of the rectangle.
 * @param {number} height The height of the rectangle.
 * @returns {number} The calculated area.
 */
function calculateArea(width, height) {
    // Local Scope: This variable is only accessible inside this function.
    const localVar = "I am a local variable.";
    
    console.log("From inside the function:", globalVar); // Can access global variable
    console.log("From inside the function:", localVar);  // Can access local variable
    
    return width * height;
}

// Call the function to test its scope and return value.
console.log(globalVar); // Accessing the global variable
// The line below would throw an error if uncommented because `localVar` is not in this scope.
// console.log(localVar); 

// Get the button and result element from the DOM.
const calculateAreaBtn = document.getElementById('calculate-area-btn');
const areaResultEl = document.getElementById('area-result');

// Add an event listener to the button to trigger the function.
calculateAreaBtn.addEventListener('click', () => {
    const width = 15;
    const height = 20;
    
    // Call the function with parameters and store the returned value.
    const area = calculateArea(width, height);
    
    // Display the result on the page.
    areaResultEl.textContent = `The area of the rectangle is: ${area}px²`;
});


// --- Part 3: Combining CSS Animations with JavaScript ---

// Get the button and the box to animate.
const triggerAnimationBtn = document.getElementById('trigger-animation-btn');
const animatedBox = document.querySelector('.animated-box');

// Add an event listener to the button.
triggerAnimationBtn.addEventListener('click', () => {
    // Use the classList.add() method to apply a CSS class.
    // This triggers the CSS transition/animation defined in styles.css.
    animatedBox.classList.add('is-visible');
});
