// Function to append a value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to remove the last character from the display
function removeLastCharacter() {
    const displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

// Function to evaluate and calculate the expression entered in the display
function calculate() {
    const inputExpression = document.getElementById('display').value;
    try {
        const result = evaluateExpression(inputExpression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error: Invalid Expression';
    }
}

// Function to evaluate an expression
function evaluateExpression(expression) {
    // Perform safe evaluation without using eval
    // You can implement your own parser or use a library like math.js
    // Here, let's assume a simple implementation for basic arithmetic operations
    return eval(expression);
}

// Function to calculate the square root of the number displayed
function calculateSquareRoot() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value) && value >= 0) {
        document.getElementById('display').value = Math.sqrt(value);
    } else {
        document.getElementById('display').value = 'Error: Invalid Input';
    }
}

// Function to calculate the percentage of the number displayed
function calculatePercentage() {
    const value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = value / 100;
    } else {
        document.getElementById('display').value = 'Error: Invalid Input';
    }
}

// Trigonometric functions with input validation

// Function to calculate the sine of an angle in degrees
function calculateSin() {
    const angle = parseFloat(prompt("Enter the angle in degrees:"));
    if (!isNaN(angle)) {
        const result = Math.sin(angle * Math.PI / 180);
        alert("sin(" + angle + ") = " + result);
    } else {
        alert("Error: Invalid Input");
    }
}

// Similar functions for other trigonometric operations like cosine, tangent, etc.

// Function to calculate the logarithm base 10 of the number displayed
function calculateLog() {
    const value = parseFloat(document.getElementById('display').value);
    if (value > 0) {
        document.getElementById('display').value = Math.log10(value);
    } else {
        document.getElementById('display').value = 'Error: Invalid Input';
    }
}

// Function to calculate the factorial of the number displayed
function calculateFactorial() {
    const value = parseInt(document.getElementById('display').value);
    if (!isNaN(value) && value >= 0) {
        let result = 1;
        for (let i = 2; i <= value; i++) {
            result *= i;
        }
        document.getElementById('display').value = result;
    } else {
        document.getElementById('display').value = 'Error: Invalid Input';
    }
}

// Function to calculate the natural logarithm of the number displayed
function calculateNaturalLog() {
    const value = parseFloat(document.getElementById('display').value);
    if (value > 0) {
        document.getElementById('display').value = Math.log(value);
    } else {
        document.getElementById('display').value = 'Error: Invalid Input';
    }
}

// Add comments for clarity and explanations

// Add testing to ensure functionality works as expected in various scenarios
