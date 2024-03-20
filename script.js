function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
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
