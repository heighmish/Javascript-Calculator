let currentNumber = "0";
let previousNumber = "";
let operator = undefined;

const displayScreen = document.getElementById("displayTextId");
const clearButton = document.getElementById("clearButton");
const backSpaceButton = document.getElementById("backSpaceButton");
const numberButtons = document.querySelectorAll(".numberButtonStyle");
//const operatorButtons = document.querySelectorAll(".operationButtonStyle");
const operatorContainer = document.getElementById("operatorContainer");

//set display to 0 on page load
window.addEventListener("load", () => {
    updateDisplay();
})


//put current number to display screen
const updateDisplay = () => {
    displayScreen.innerText = currentNumber;
}

const appendNumber = (number) => {
    if (number === "." && currentNumber.includes(".")) {
        return ;
    } else if (currentNumber === "0" && number  === ".") {
        //
    } else if (currentNumber === "0") {
        currentNumber = "";
    }
    currentNumber += number;
    updateDisplay();
}

//
const clear = () => {
    currentNumber = "0";
    previousNumber = "";
    operator = undefined;
}

//clear all button
clearButton.addEventListener("click", () => {
    clear();
    updateDisplay();
})

//remove last digit from string
backSpaceButton.addEventListener("click", () => {
    //remove last character 
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
})

//on press of number buttons add number to display
numberButtons.forEach(button =>
    button.addEventListener("click", event => {
        const num = event.target.innerText;
        appendNumber(num);
    })
)


const operatorPressed = (operation) => {
    //operator has been pressed
    if (operator === "") return
    if (previousNumber !== "") {
        calculate();
    }
    operator = operation;
    previousNumber = currentNumber;
    currentNumber = '';
}


//instead of using forEach apply on click to all child nodes
operatorContainer.addEventListener("click", event => {
    if (event.target && event.target.nodeName == "BUTTON") {
        console.log(event.target.innerText);
        const op = event.target.innerText;
        if (op === "=") {
            calculate();
        } else {
            operatorPressed(op);
        }
        updateDisplay();
    }
})

//perform calculations with current number, operator and previos number
const calculate = () => {
    let computedValue;
    const prevNum = parseFloat(previousNumber);
    const currNum = parseFloat(currentNumber);
    console.log(prevNum, currentNumber, operator);
    if (isNaN(prevNum) || isNaN(currNum)) return ;
    switch (operator) {
        case '/':
            computedValue = prevNum / currNum;
            break;
        case '*':
            computedValue = prevNum * currNum;
            break;
        case '-':
            computedValue = prevNum - currNum;
            break;
        case '+':
            computedValue = prevNum + currNum;
            break;
        default:
            return;
    }
    currentNumber = String(computedValue);
    console.log("PostCalculation", currentNumber);
    operator = undefined;
    previousNum = '';
}



//keyboard support
document.addEventListener("keydown", event => {
    const key = event.key;
    console.log(key);
    if (isFinite(key) || key === '.') {
        appendNumber(key);
    } else if (key === '+' || key === '-'  || key === '/' || key === '*') {
        operatorPressed(key);
    } else if (key === 'Backspace') {
        currentNumber = currentNumber.slice(0, -1);
    } else if (key === '=') {
        calculate();
    }  else if (key === "Delete") {
        clear();
    }else {
        return;
    }
    updateDisplay();

})