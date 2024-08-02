function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function removeLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace 'Math.PI' and 'Math.E' with their respective values before evaluation
        let expression = document.getElementById('display').value
            .replace(/Math\.PI/g, Math.PI)
            .replace(/Math\.E/g, Math.E);
        
        // Evaluate the expression safely
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sqrt(value);
}

function calculatePercentage() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = value / 100;
}

function calculateRaisedToPower() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.pow(value, 2);
}

function calculateSin() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sin(value);
}

function calculateCos() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.cos(value);
}

function calculateTan() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.tan(value);
}

function calculateCot() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = 1 / Math.tan(value);
}

function calculateSec() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = 1 / Math.cos(value);
}

function calculateCosec() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = 1 / Math.sin(value);
}

function calculateLog() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.log10(value);
}

function calculateFactorial() {
    const value = parseInt(document.getElementById('display').value);
    if (value < 0) {
        document.getElementById('display').value = 'Error';
        return;
    }
    let result = 1;
    for (let i = 2; i <= value; i++) {
        result *= i;
    }
    document.getElementById('display').value = result;
}

function calculateNaturalLog() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.log(value);
}
