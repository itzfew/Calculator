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
            var angle = parseFloat(prompt("Enter the angle in degrees:"));
            var result = Math.sin(angle * Math.PI / 180);
            alert("sin(" + angle + ") = " + result);
        }

        function calculateCos() {
            var angle = parseFloat(prompt("Enter the angle in degrees:"));
            var result = Math.cos(angle * Math.PI / 180);
            alert("cos(" + angle + ") = " + result);
        }

        function calculateTan() {
            var angle = parseFloat(prompt("Enter the angle in degrees:"));
            var result = Math.tan(angle * Math.PI / 180);
            alert("tan(" + angle + ") = " + result);
        }

        function calculateCot() {
            var angle = parseFloat(prompt("Enter the angle in degrees:"));
            var result = 1 / Math.tan(angle * Math.PI / 180);
            alert("cot(" + angle + ") = " + result);
        }

        function calculateSec() {
            var angle = parseFloat(prompt("Enter the angle in degrees:"));
            var result = 1 / Math.cos(angle * Math.PI / 180);
            alert("sec(" + angle + ") = " + result);
        }

        function calculateCosec() {
            var angle = parseFloat(prompt("Enter the angle in degrees:"));
            var result = 1 / Math.sin(angle * Math.PI / 180);
            alert("cosec(" + angle + ") = " + result);
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




