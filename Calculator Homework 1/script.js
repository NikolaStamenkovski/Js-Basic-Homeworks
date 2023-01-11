let numberButtons = document.getElementsByClassName('number');
console.log(numberButtons);
let operationButtons = document.getElementsByClassName('operation');
console.log(operationButtons);
let equalsButton = document.getElementById('equals');
console.log(equalsButton);
let deleteButton = document.getElementById('delete');
console.log(deleteButton);
let allClearButton = document.getElementById('all-clear');
console.log(allClearButton);
let disply = document.getElementById('output');
console.log(disply);
let buttons  = document.getElementsByTagName('button');
console.log(buttons);
function calculatorOperations(event){
    let operation = event.target.innerText;
    if(operation === "C" ) {
        disply.innerText = ' ';
    } else if(operation === '←' ) {
        if(disply.innerText.length > 0) {
            disply.innerText = disply.innerText.slice(0, -1)
        }else {
            disply.innerText = ' ';
        }
        
    } else if(operation === "+" || operation === "-" || operation === "*" || operation === "/") {
        disply.innerText += ` ${operation} `;

    } else if (operation === '=') { 
        disply.innerText = calculations(disply.innerText);
    } else if (operation === ".") {
        disply.innerText += operation;
    } else {
        let lastElement = disply.innerText.slice(-1);
        if(lastElement === "+" || lastElement === "-" || lastElement === "*" || lastElement === "/") {
            disply.innerText += ` ${operation} `;
        } else {
            disply.innerText += `${operation}`;
        }
    }

};

function calculations(input) {
    let array = input.split(' ');
    let result = parseFloat(array[0]);
    for (let i = 1; i < array.length; i=i+2) {
        let mathOperation = array[i];
        let newNumber = parseFloat(array[i+1]);
        if(mathOperation === "+") {
            result += newNumber;
        } else if(mathOperation === "-") {
            result -= newNumber;
        } else if (mathOperation === "*" ) {
            result *= newNumber;
        } else if (mathOperation === "/") {
            result /= newNumber;
        }
    }
    return result;
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', calculatorOperations)
        
};

