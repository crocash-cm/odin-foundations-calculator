// clearDisplay to get value of textContent.length of calc-display buffer div to 0
clearDisplay();

// Display width in characters of calculator display buffer
const CHAR_LENGTH_DISPLAY_BUFFER = 16;

// Compuitation variables
let firstOperand, secondOperand = 0;
let operator = "";

// State flags
let operatorSelectedFlag = false;
let resultDisplayedFlag = false;

// DOM Object Variables
const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".number-button");

const button0 = document.querySelector("#button-0");
const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");
const button4 = document.querySelector("#button-4");
const button5 = document.querySelector("#button-5");
const button6 = document.querySelector("#button-6");
const button7 = document.querySelector("#button-7");
const button8 = document.querySelector("#button-8");
const button9 = document.querySelector("#button-9");

const buttonAdd = document.querySelector("#add");
const buttonSubtract = document.querySelector("#subtract");
const buttonMultiply = document.querySelector("#multiply");
const buttonDivide = document.querySelector("#divide");

const buttonPoint = document.querySelector("#point");
const buttonClear = document.querySelector("#clear");
const buttonEquals = document.querySelector("#equals");


// Arithmetic functions

function add(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
}

function subtract(firstOperand, secondOperand) {
    return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
    return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
    if (secondOperand == 0) {
        alert("Division by Zero is impossible!");
        return 0;
    }
    else {
        return firstOperand / secondOperand;
    }
}

function operate(operator, firstOperand, secondOperand) {
    if (operator == "+") {
        return add(firstOperand, secondOperand);
    }
    else if (operator == "-") {
        return subtract(firstOperand, secondOperand);
    }
    else if (operator == "*") {
        return multiply(firstOperand, secondOperand);
    }
    else if (operator == "/") {
        return divide(firstOperand, secondOperand);
    }
}

// Display functions
function populateDisplay(nString) {
    let display = document.getElementById("calc-display");
    let currentContent = display.textContent;
    console.log(currentContent.length);
    if (currentContent.length < CHAR_LENGTH_DISPLAY_BUFFER)
    {
        display.textContent = currentContent + nString;
    }
    
}

function getDisplayNumber() {
    let display = document.getElementById("calc-display");
    let text = display.textContent;
    return Number(text);
}

function clearDisplay() {
    let display = document.getElementById("calc-display");
    display.textContent = "";
}


// Calculator use functions
function resetCalculator() {
    operatorSelectedFlag = false;
    resultDisplayedFlag = false; 
    operator = ""; 
    firstOperand = 0; 
    secondOperand = 0; 
}

function getResult() {
    if (operatorSelectedFlag) {
        secondOperand = getDisplayNumber(); 
        clearDisplay(); 
        console.log("First Operand: " + firstOperand);
        console.log("Second Operand: " + secondOperand);
        console.log("Operator: " + operator);

        firstOperandNumeric = Number(firstOperand);
        secondOperandNumeric = Number(secondOperand);
        numericResult = operate(operator, firstOperandNumeric, secondOperandNumeric);
        console.log(numericResult);
        numericResult = Number(numericResult.toPrecision(CHAR_LENGTH_DISPLAY_BUFFER))
        populateDisplay(numericResult.toString());
        resultDisplayedFlag = true;
    }
    
}

// Event Listeners
operatorButtons.forEach(button => { 
    button.addEventListener("click", function () {
        if (operator === "") {
            operatorSelectedFlag = true;
            firstOperand = getDisplayNumber(); 
            clearDisplay(); 
            console.log(firstOperand)
        }});
        
});

button0.addEventListener("click", function () { if (resultDisplayedFlag == false) { populateDisplay("0"); } });
button1.addEventListener("click", function () { if (resultDisplayedFlag == false) { populateDisplay("1"); } });
button2.addEventListener("click", function () { if (resultDisplayedFlag == false) { populateDisplay("2"); } });
button3.addEventListener("click", function () { if (resultDisplayedFlag == false) { populateDisplay("3"); } });
button4.addEventListener("click", function () { if (resultDisplayedFlag == false) { populateDisplay("4"); } });
button5.addEventListener("click", function () { if (resultDisplayedFlag == false) { populateDisplay("5"); } });
button6.addEventListener("click", function () { if (resultDisplayedFlag == false) { populateDisplay("6"); } });
button7.addEventListener("click", function () { if (resultDisplayedFlag == false) { populateDisplay("7"); } });
button8.addEventListener("click", function () { if (resultDisplayedFlag == false) { populateDisplay("8"); } });
button9.addEventListener("click", function () { if (resultDisplayedFlag == false) { populateDisplay("9"); } });

buttonAdd.addEventListener("click", function () { operator = "+"; });
buttonSubtract.addEventListener("click", function () { operator = "-"; });
buttonMultiply.addEventListener("click", function () { operator = "*"; });
buttonDivide.addEventListener("click", function () { operator = "/"; });

buttonPoint.addEventListener("click", function () { if (resultDisplayedFlag == false) { populateDisplay(".") } ;});

buttonClear.addEventListener("click", function () { 
    resetCalculator();
    clearDisplay();});

buttonEquals.addEventListener("click", function () { getResult() });

