function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function removeLastCharacter() {
    const displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
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
    const inputValue = parseFloat(document.getElementById('display').value);
    
    if (isNaN(inputValue)) {
        document.getElementById('display').value = 'Error: Invalid input';
        return;
    }
    
    const result = Math.sin(inputValue);
    document.getElementById('display').value = result;
}

function calculateCos() {
    const inputValue = parseFloat(document.getElementById('display').value);
    
    if (isNaN(inputValue)) {
        document.getElementById('display').value = 'Error: Invalid input';
        return;
    }
    
    const result = Math.cos(inputValue);
    document.getElementById('display').value = result;
}

function calculateTan() {
    const inputValue = parseFloat(document.getElementById('display').value);
    
    if (isNaN(inputValue)) {
        document.getElementById('display').value = 'Error: Invalid input';
        return;
    }
    
    const result = Math.tan(inputValue);
    document.getElementById('display').value = result;
}

function calculateCot() {
    const inputValue = parseFloat(document.getElementById('display').value);
    
    if (isNaN(inputValue) || inputValue === Math.PI/2) {
        document.getElementById('display').value = 'Error: Invalid input';
        return;
    }
    
    const result = 1 / Math.tan(inputValue);
    document.getElementById('display').value = result;
}

function calculateSec() {
    const inputValue = parseFloat(document.getElementById('display').value);
    
    if (isNaN(inputValue) || inputValue === Math.PI/2 || inputValue === -Math.PI/2) {
        document.getElementById('display').value = 'Error: Invalid input';
        return;
    }
    
    const result = 1 / Math.cos(inputValue);
    document.getElementById('display').value = result;
}

function calculateCosec() {
    const inputValue = parseFloat(document.getElementById('display').value);
    
    if (isNaN(inputValue) || inputValue === 0 || inputValue === Math.PI || inputValue === -Math.PI) {
        document.getElementById('display').value = 'Error: Invalid input';
        return;
    }
    
    const result = 1 / Math.sin(inputValue);
    document.getElementById('display').value = result;
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
