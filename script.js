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


import java.util.Scanner;

public class MainClass {

    public static void main(String args[]){
        Scanner NumInput = new Scanner(System.in);
        double firstNum = 0;
        double secondNum = 0;
        double result = 0;
        System.out.println("Enter first number: ");
        firstNum = NumInput.nextDouble() ;
        System.out.println("Enter operator: ");
        String amalgar = NumInput.next();
            if (amalgar == "sin" || amalgar == "cos" || amalgar == "tan" || amalgar == "cot"){
            switch(amalgar){
        case "sin":
            result = Math.toRadians(Math.sin(firstNum));
            break;
        case "cos":
            result = Math.toRadians(Math.cos(firstNum));
            break;
        case "tan":
            result = Math.toRadians(Math.tan(firstNum));
            break;
        case "cot":
            result = (Math.toRadians(Math.cos(firstNum))/Math.toRadians(Math.sin(firstNum)));
            break;

        default : 
            break;



            }
            System.out.println(Math.toRadians(result));
            }
            else

                System.out.println("Enter second number: ");
                secondNum = NumInput.nextDouble();  
            switch (amalgar){
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;

        default:
            System.out.println("nemifahmam chi neveeshti");
        }

            System.out.println(result);

    }
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




