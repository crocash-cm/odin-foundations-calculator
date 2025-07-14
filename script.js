let firstOperand, secondOperand = 0;
let operator = "";

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