let currentNumber = "0";
let previousNumber = "";
let operator = "";

const displayScreen = document.getElementById("displayTextId");
const clearButton = document.getElementById("clearButton");
const backSpaceButton = document.getElementById("backSpaceButton");
const numberButtons = document.querySelectorAll(".numberButtonStyle");
const operatorButtons = document.querySelectorAll(".operationButtonStyle");

//set display to 0 on page load
window.addEventListener("load", () => {
    updateDisplay();
})

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
    operator = "";
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

numberButtons.forEach(button =>
    button.addEventListener("click", event => {
        const num = event.target.innerText;
        appendNumber(num);
    })
)

