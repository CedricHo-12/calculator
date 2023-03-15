let firstOperand = "";
let secondOperand = "";
let displayValue = 0;
let firstOperator = "";
let secondOperator = ""
let answer = "";



function updateDisplay() {
    const display = document.getElementById("display");
    display.innerHTML = displayValue;

}



const buttons = document.querySelectorAll('button');
buttons.forEach( button => button.addEventListener('click', () => {
    if(button.classList.contains('operand')){
        inputOperand(button.innerHTML);
        updateDisplay();
    }else if(button.classList.contains('clear')){
        clear();
        updateDisplay();
    }else if(button.classList.contains('operator')){
        inputOperator(button.innerHTML);
        updateDisplay();
    }else if(button.classList.contains('equal')){
        inputEqual();
        updateDisplay();
    }else if(button.classList.contains('dot')){
        inputDot();
        updateDisplay();
    }
   
}))

function inputDot(){
    
    if(displayValue === 0){
        displayValue += '.';
    }
    if(displayValue = answer) {
        displayValue = '0.';
    }
    if(!displayValue.includes('.')){
    
        displayValue += '.';

     }
}
    
function inputEqual(){

    //press before operand
    if(displayValue === 0){
        displayValue = 0;
    //press before operator
    }else if(displayValue !== 0 && firstOperand === ""){
        displayValue = displayValue;
    //press after operator
    }else {
        secondOperand = Number(displayValue);
        answer = operate(firstOperator,firstOperand, secondOperand);
        displayValue = answer;

        //reset operator pressed to
        firstOperand = "";
        secondOperand = "";
        firstOperator = "";
        secondOperator = "";
        result = "";

    }
}

function inputOperand(operand) {
    if(firstOperator === ""){
        if(displayValue == 0){
            displayValue = operand;
        //after equal button pressed
        }else if(displayValue === answer){
            displayValue = operand;
        }else {
            displayValue += operand;
        }
    }else{
        if(displayValue == firstOperand){
            displayValue = operand;
        }else{
            displayValue += operand;
        }
    }
    
   
}

function clear() {
    firstOperand = "";
    secondOperand = "";
    displayValue = 0;
    firstOperator = "";
    secondOperator = "";
    result = "";
}

function inputOperator(operator) {
    //first operator pressed
    if(firstOperand === "" && secondOperand === ""){
        firstOperand = Number(displayValue);
        firstOperator = operator;
    //second operator pressed
    }else if(firstOperand !== "" && secondOperand === ""){
        secondOperator = operator;
        secondOperand = Number(displayValue);
        answer = operate(firstOperator, firstOperand, secondOperand)
        displayValue = answer;
        firstOperand = displayValue;
    //third, fourth.. operator pressed
    }else if(firstOperand !== "" && secondOperand !== ""){
        secondOperand = Number(displayValue);
        answer = operate(secondOperator, firstOperand, secondOperand);
        displayValue = answer;
        firstOperand = Number(displayValue);
    }
}


function operate(operator, x, y) {
    if(operator == "+"){
        return x + y;
    }else if (operator == "−"){
        return x - y;
    }else if (operator == "x"){
        return x * y;
    }else if (operator == "÷"){
        if(secondOperand === 0){
            return "math error";
        }else {
            return x / y;
        }
    }else {
        return "INVALID OPERATOR";
    }
}





