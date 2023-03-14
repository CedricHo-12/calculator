function add(a,b) {
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function muliply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, number1, number2) {
    if(operator == "+"){
        return add(number1, number2);
    }else if (operator == "subtract"){
        return subtract(number1, number2);
    }else if (operator == "multiply"){
        return muliply(number1, number2);
    }else if (operator == "divide"){
        return divide(number1, number2);
    }else{
        return "INVALID OPERATOR";
    }
}

const button = document.querySelectorAll(".grid-item");
button.forEach( e => e.addEventListener("click", event => {
    const btn = event.target.closest('button');
    const display = document.querySelector(".display")

    var key = btn.textContent;

    display.innerHTML += key;
}))



