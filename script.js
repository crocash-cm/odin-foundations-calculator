// clearDisplay to get value of textContent.length to 0
clearDisplay();

let firstOperand, secondOperand = 0;
let operator = "";

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



function add(firstOperand, secondOperand) {
    return 1;
}

function subtract(firstOperand, secondOperand) {
    return 1;
}

function multiply(firstOperand, secondOperand) {
    return 1;
}

function divide(firstOperand, secondOperand) {
    return 1;
}

function operate(operator, firstOperand, secondOperand) {
    if (operator == "+") {
        add(firstOperand, secondOperand);
    }
    else if (operator == "-") {
        subtract(firstOperand, secondOperand);
    }
    else if (operator == "*") {
        multiply(firstOperand, secondOperand);
    }
    else if (operator == "/") {
        divide(firstOperand, secondOperand);
    }
}

function populateDisplay(nString) {
    let display = document.getElementById("calc-display");
    let currentContent = display.textContent;
    console.log(currentContent.length);
    if (currentContent.length < 16)
    {
        display.textContent = currentContent + nString;
    }
    
}

function getDisplayNumber() {
    let display = document.getElementById("calc-display");
    return Number(display.textContent());
}

function clearDisplay() {
    let display = document.getElementById("calc-display");
    display.textContent = "";
}

function getFirstOperand() {

}

button0.addEventListener("click", function () { populateDisplay("0");});
button1.addEventListener("click", function () { populateDisplay("1");});
button2.addEventListener("click", function () { populateDisplay("2");});
button3.addEventListener("click", function () { populateDisplay("3");});
button4.addEventListener("click", function () { populateDisplay("4");});
button5.addEventListener("click", function () { populateDisplay("5");});
button6.addEventListener("click", function () { populateDisplay("6");});
button7.addEventListener("click", function () { populateDisplay("7");});
button8.addEventListener("click", function () { populateDisplay("8");});
button9.addEventListener("click", function () { populateDisplay("9");});

buttonClear.addEventListener("click", function () {clearDisplay();});