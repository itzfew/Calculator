// Function to append characters to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to calculate the result
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to remove the last character from the display
function removeLastCharacter() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

// Function to calculate the square root
function calculateSquareRoot() {
    let currentValue = document.getElementById('display').value;
    let result = Math.sqrt(eval(currentValue));
    document.getElementById('display').value = result;
}

// Function to calculate the percentage
function calculatePercentage() {
    let currentValue = document.getElementById('display').value;
    let result = eval(currentValue) / 100;
    document.getElementById('display').value = result;
}

// Function to calculate the result raised to a power
function calculateRaisedToPower() {
    let currentValue = document.getElementById('display').value;
    let result = Math.pow(eval(currentValue), 2); // Change the exponent as needed
    document.getElementById('display').value = result;
}

// Function to calculate the factorial
function calculateFactorial() {
    let currentValue = document.getElementById('display').value;
    let result = factorial(eval(currentValue));
    document.getElementById('display').value = result;
}

// Factorial function
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

// Function to calculate sine
function calculateSin() {
    let currentValue = document.getElementById('display').value;
    let result = Math.sin(eval(currentValue));
    document.getElementById('display').value = result;
}

// Function to calculate cosine
function calculateCos() {
    let currentValue = document.getElementById('display').value;
    let result = Math.cos(eval(currentValue));
    document.getElementById('display').value = result;
}

// Function to calculate tangent
function calculateTan() {
    let currentValue = document.getElementById('display').value;
    let result = Math.tan(eval(currentValue));
    document.getElementById('display').value = result;
}

// Add more functions for other trigonometric operations as needed
